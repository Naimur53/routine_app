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
                .then((response) => {
                    if (response) return response;
                    // If the response is null, it means the requested resource is not in cache.
                    // Return the index.html to handle the route on the client-side.
                    return caches.match('/index.html');
                })
        );
    }
});
// Make sure to replace your existing service worker code with the updated version above. After updating the service worker code, rebuild your app and deploy it as a PWA. The service worker should now handle navigation requests correctly, redirecting to the home page ("/") when the app is launched as a PWA with React Router DOM 6.






