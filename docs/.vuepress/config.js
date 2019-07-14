module.exports = {
    title: 'ATShop API',
    description: 'API documentation for ATShop.io',

    plugins: [
        [require('vuepress-intercom'), { appId: 'msak0o3q' }]
    ],

    themeConfig: {
        search: false,

        nav: [
            {
                text: 'GitHub',
                link: require('../../package.json').homepage,
            },
            {
                text: 'ATShop',
                link: 'https://atshop.io/'
            },
        ],

        sidebar: [
            {
                title: 'Guide',
                collapsable: false,
                children: [
                    '/guide/',
                    '/guide/setting-up-ddp'
                ]
            },
            {
                title: 'Methods',
                collapsable: false,
                children: [
                    '/reference/methods/orders'
                ]
            }
        ]
    },
};