/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/style.css",
    "revision": "2e83b463999c501c0c69709c2165d040"
  },
  {
    "url": "images/b97cp-tvefl.svg",
    "revision": "21f24f6b522f12bba42ec7d9741b06bd"
  },
  {
    "url": "images/bialh-u8rkl.svg",
    "revision": "63523f0dd1bf51e90ffc8b45f57b19f7"
  },
  {
    "url": "images/bnhe4-rmn6y.svg",
    "revision": "648665b0fae1def93215d21e3bc9e83c"
  },
  {
    "url": "images/images.jpg",
    "revision": "8ec5cc04f378b2303116f1ecc7f45895"
  },
  {
    "url": "images/images1.jpg",
    "revision": "d47f5d6b56c75db8c2d43d183da08346"
  },
  {
    "url": "images/images2.jpg",
    "revision": "2187a24b51d2d7c29b37c8068c986aa9"
  },
  {
    "url": "images/images3.jpg",
    "revision": "cb702a7f0c44ad57e53f7b679f070b8b"
  },
  {
    "url": "images/images4.jpg",
    "revision": "dcefa736b578c8f0723e962f47d3c65b"
  },
  {
    "url": "images/maxresdefault2.jpg",
    "revision": "84e0a3173716caa7a4642a397a87df0c"
  },
  {
    "url": "images/maxresdefault3.jpg",
    "revision": "6153da16753e9cb99365c3d7ea67ac28"
  },
  {
    "url": "images/your-heart-s-telling-you-you-re-homesick-for-a-place-you-ve-never-been-1.jpg",
    "revision": "f8266f76af46a7acc43f307f4528283e"
  },
  {
    "url": "index.html",
    "revision": "0b294d172b85067c8059c62a34227c2e"
  },
  {
    "url": "Нова папка/Новий текстовий документ.html",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
