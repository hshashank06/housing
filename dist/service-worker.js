import { precacheAndRoute } from "workbox-precaching";

/// <reference lib="WebWorker" />

// export empty type because of tsc --isolatedModules flag
export type {};
declare const self: ServiceWorkerGlobalScope;

precacheAndRoute([]);

const CACHE_NAME = "image-cache-v1";
const urlsToCache = [
  "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/property-challenge/thumbnail-1.jpg",
  "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/property-challenge/thumbnail-2.jpg",
  "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/property-challenge/thumbnail-3.jpg",
  "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/property-challenge/thumbnail-4.jpg",
  "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/property-challenge/thumbnail-5.jpg",
  "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/property-challenge/thumbnail-6.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      console.log("Response is " + JSON.stringify(response));
      return response || fetch(event.request);
    })
  );
});
