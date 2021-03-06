module.exports = [
    ['meta', { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: `MY APPLE TITLE` }],
    ['meta', { name: 'theme-color', content: `MY COLOR THEME` }],
    ['meta', { name: 'msapplication-navbutton-color', content: `MY COLOR THEME` }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['meta', { name: 'coverage', content: 'WorldWide' }],
    ['meta', { name: 'rating', content: 'general' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['meta', { name: 'googlebot', content: 'index,follow' }],

    // Microsoft
    ['meta', { name: 'application-name', content: `MY APP NAME` }],
    ['meta', { name: 'msapplication-TileColor', content: `MY COLOR THEME` }],
    ['meta', { name: 'msapplication-config', content: 'https://henrycgh.github.io/blog/browserconfig.xml' }],
    ['meta', { name: 'msapplication-square70x70logo', content: 'https://henrycgh.github.io/blog/favicon/ms-icon-70x70.png' }],
    ['meta', { name: 'msapplication-TileImage', content: 'https://henrycgh.github.io/blog/favicon/ms-icon-144x144.png' }],
    ['meta', { name: 'msapplication-square150x150logo', content: 'https://henrycgh.github.io/blog/favicon/mstile-150x150.png' }],
    ['meta', { name: 'msapplication-wide310x150logo', content: 'https://henrycgh.github.io/blog/favicon/ms-icon-310x310.png' }],

    // Facebook
    ['meta', { property: 'og:image:height', content: '1200' }],
    ['meta', { property: 'og:image:width', content: '360' }],
    ['meta', { property: 'og:image:type', content: 'image/png' }],

    ['meta', { name: 'google-site-verification', content: `MY VERIFICATION KEY` }], // google
    ['meta', { name: 'msvalidate.01', content: `MY VERIFICATION KEY` }], // bing
    ['meta', { name: 'yandex-verification', content: `MY VERIFICATION KEY` }], // Yandex

    // Link
    ['link', { rel: 'publisher', href: `MY URL GOOGLE PLUS` }],
    ['link', { rel: 'author', href: `MY URL GOOGLE PLUS` }],
    ['link', { rel: 'author', href: 'https://henrycgh.github.io/blog/humans.txt' }],
    ['link', { rel: 'manifest', href: 'https://henrycgh.github.io/blog/manifest.json' }],

    ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: 'https://henrycgh.github.io/blog/favicon/apple-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: 'https://henrycgh.github.io/blog/favicon/apple-icon-60x60.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: 'https://henrycgh.github.io/blog/favicon/apple-icon-72x72.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: 'https://henrycgh.github.io/blog/favicon/apple-icon-76x76.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: 'https://henrycgh.github.io/blog/favicon/apple-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: 'https://henrycgh.github.io/blog/favicon/apple-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: 'https://henrycgh.github.io/blog/favicon/apple-icon-144x144.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: 'https://henrycgh.github.io/blog/favicon/apple-icon-152x152.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://henrycgh.github.io/blog/favicon/apple-icon-180x180.png' }],

    ['link', { rel: 'icon', type: 'image/png', href: 'https://henrycgh.github.io/blog/favicon/android-icon-192x192.png', sizes: '192x192' }],
    ['link', { rel: 'icon', type: 'image/png', href: 'https://henrycgh.github.io/blog/favicon/favicon-96x96.png', sizes: '96x96' }],
    ['link', { rel: 'icon', type: 'image/png', href: 'https://henrycgh.github.io/blog/favicon/favicon-32x32.png', sizes: '32x32' }],
    ['link', { rel: 'icon', type: 'image/png', href: 'https://henrycgh.github.io/blog/favicon/favicon-16x16.png', sizes: '16x16' }],

    ['link', { rel: 'mask-icon', href: 'https://henrycgh.github.io/blog/favicon/safari-pinned-tab.svg', color: '#ff5733' }],
    ['link', { rel: 'shortcut icon', href: 'https://henrycgh.github.io/blog/favicon/favicon.ico' }],

    ['link', { rel: 'alternate', href: `https://MY_DOMAIN.COM/`, hreflang: 'zh-CN' }],

    // Prebrowsing
    ['link', { rel: 'preconnect', href: 'https://connect.facebook.net/' }],
    ['link', { rel: 'preconnect', href: 'https://platform.twitter.com/' }],
    ['link', { rel: 'preconnect', href: 'https://widget.sndcdn.com/' }],
    ['link', { rel: 'preconnect', href: 'https://api-widget.soundcloud.com/' }],
    ['link', { rel: 'preconnect', href: 'https://www.youtube.com/' }],
    ['link', { rel: 'preconnect', href: 'https://scrimba.com/' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com/' }],
    ['link', { rel: 'preconnect', href: 'https://c.disquscdn.com/' }],
    ['link', { rel: 'preconnect', href: 'https://disqus.com/' }],
    ['link', { rel: 'preconnect', href: 'https://www.google-analytics.com/' }],
    ['link', { rel: 'preconnect', href: 'https://stats.g.doubleclick.net' }],

    ['link', { rel: 'preload', href: 'https://www.google-analytics.com/analytics.js', as: 'script' }]
];
