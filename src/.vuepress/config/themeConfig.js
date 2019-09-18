const en = require('./locales/en/config');
const cn = require('./locales/cn/config');

module.exports = {
    locales: {
        '/': cn,
        '/en/': en
    },
    serviceWorker: {
        updatePopup: {
            message: '新增博文 🎉🎉',
            buttonText: '更新'
        }
    },
    url: `https://henrycgh.github.io/blog/`,
    cdn: '',
    blackWhite: true,
    topNavigation: false,
    searchMaxSuggestions: 7,
    responsive: {
        active: true,
        ext: 'png',
        breakpoints: false
    },
    lazyLoad: {},
    share: {
        facebook: {
            appId: `MY FACEBOOK APP ID`,
            version: 'v3.1'
        }
    },
    elevator: {
        duration: 4000,
        mainAudio: '/blog/music/elevator.mp3',
        endAudio: '/blog/music/ding.mp3'
    }
};
