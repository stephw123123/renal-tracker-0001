self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Listen for the signal to show a notification
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
        const options = {
            body: event.data.body,
            icon: 'https://github.io',
            requireInteraction: true
        };
        event.waitUntil(
            self.registration.showNotification(event.data.title, options)
        );
    }
});
