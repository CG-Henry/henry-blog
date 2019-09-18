const ads = require('./ads');

module.exports = {
    languages: {
        label: 'ENGLISH',
        shortname: 'EN'
    },
    ads,
    logo: {
        name: 'blog/henry-blog-logo',
        ext: 'png',
        alt: 'Logo in 3 colors in play format'
    },
    share: {
        facebookCaption: '',
        twitterVia: ''
    },
    newsletter: {
        provider: 'mailchimp',
        action: ''
    },
    copy: `2018 © HenryCGH - 
        <a href="https://vuepress.vuejs.org/" rel="noopener" target="_blank">
          MADE WITH VUEPRESS
        </a>`,
    footer: {
        nav1: {
            title: 'Henry Blog',
            items: [
                {
                    label: '关于我',
                    path: '/en/about/'
                },
                {
                    label: '分类',
                    path: '/en/categories/'
                },
                {
                    label: '联系方式',
                    path: '/en/contact/'
                }
            ]
        },
        nav2: {
            title: '社区',
            items: [
                {
                    label: '知乎',
                    link: 'https://www.zhihu.com/'
                }
            ]
        }
    },
    social: [
        {
            name: 'github',
            link: `https://github.com/HenryCGH`
        }
    ]
};
