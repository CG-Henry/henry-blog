// See more in https://github.com/ktquez/vuepress-theme-ktquez#configuration
const path = require('path');
const head = require('./config/head');
const themeConfig = require('./config/themeConfig');
const resolve = pathName => path.join(__dirname, pathName);

module.exports = {
    head,
    themeConfig,
    base: '/blog/',
    title: `Henry Blog`,
    description: '程先生的第一个博客',
    ga: `MY TRACKING CODE GOOGLE ANALYTICS`,
    evergreen: true, // For modern browsers
    serviceWorker: true,
    locales: {
        '/': {
            lang: 'zh-CN'
        },
       /*  '/en/': {
            lang: 'en'
        } */
    },
    configureWebpack() {
        return {
            resolve: {
                alias: {
                    '@public': resolve('./public')
                }
            }
        };
    }
};
