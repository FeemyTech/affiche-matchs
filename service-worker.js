const CACHE_NAME = "eu-affiches-v1";
const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];
const EXPORT_LIBRARY = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_FILES);
    // Cache the PNG export library on the first online launch.
    try {
      const response = await fetch(EXPORT_LIBRARY, { mode: "no-cors" });
      if (response && (response.ok || response.type === "opaque")) {
        await cache.put(EXPORT_LIBRARY, response);
      }
    } catch (e) {
      // The editor still opens offline; PNG export needs the library cached once online.
    }
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);

  if (url.href === EXPORT_LIBRARY) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(EXPORT_LIBRARY);
      if (cached) return cached;
      try {
        const response = await fetch(request);
        if (response && (response.ok || response.type === "opaque")) {
          await cache.put(EXPORT_LIBRARY, response.clone());
        }
        return response;
      } catch (e) {
        return new Response("La bibliothèque d’export PNG n’a pas encore été mise en cache. Ouvrez une fois l’application avec Internet.", {
          status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" }
        });
      }
    })());
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);
      if (cached) return cached;
      try {
        const response = await fetch(request);
        if (response && response.ok) cache.put(request, response.clone());
        return response;
      } catch (e) {
        if (request.mode === "navigate") {
          return (await cache.match("./index.html")) || Response.error();
        }
        return Response.error();
      }
    })());
  }
});
