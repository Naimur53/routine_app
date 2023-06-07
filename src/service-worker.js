import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
    ({ request }) => request.destination === 'api',
    new CacheFirst()
);

// Any additional custom service worker logic can be added here

self.addEventListener('install', (event) => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    const { request } = event;

    // Handle navigation requests
    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request)
                .catch(() => caches.match('/index.html'))
        );
    }
});