/* eslint-disable no-restricted-globals */

import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

// Precache static assets during the installation phase
precacheAndRoute(self.__WB_MANIFEST);

// Cache the Google Fonts stylesheets with a StaleWhileRevalidate strategy
registerRoute(
    ({ url }) => url.origin === 'https://fonts.googleapis.com',
    new StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
    })
);

// Cache the Google Fonts webfont files with a CacheFirst strategy
registerRoute(
    ({ url }) => url.origin === 'https://fonts.gstatic.com',
    new CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 365, // Cache for 1 year
            }),
        ],
    })
);

// Cache API responses with a CacheFirst strategy
registerRoute(
    ({ url }) => url.pathname.startsWith('/api/'),
    new CacheFirst({
        cacheName: 'api-cache',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24, // Cache for 1 day
            }),
        ],
    })
);