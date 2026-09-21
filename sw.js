// 音読記録アプリ - Service Worker（ホーム画面追加用の最小構成。オフラインキャッシュは行わない）
self.addEventListener('install', function (e) {
  self.skipWaiting();
});
self.addEventListener('activate', function (e) {
  self.clients.claim();
});
self.addEventListener('fetch', function (e) {
  // 常にネットワークから取得（このアプリは常に最新のデータが必要なため）
  return;
});
