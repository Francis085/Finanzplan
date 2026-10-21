// Offline-Cache für den Finanzplan. Bei jeder Änderung an den Dateien VERSION erhöhen.
const VERSION = "finanzplan-v1";
const DATEIEN = ["./", "./index.html", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Schriftart von Google: einmal laden, danach aus dem Cache
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(
      caches.open(VERSION).then(async c => {
        const hit = await c.match(req);
        if (hit) return hit;
        try { const res = await fetch(req); c.put(req, res.clone()); return res; }
        catch (err) { return new Response("", { status: 504 }); }
      })
    );
    return;
  }
  if (url.origin !== location.origin) return;

  // Seite: erst Netz (für Updates), ohne Netz aus dem Cache
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put("./index.html", copy)); return res; })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Übrige Dateien: aus dem Cache, sonst Netz
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
