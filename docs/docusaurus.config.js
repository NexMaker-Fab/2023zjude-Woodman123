// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
        title: 'Team 3 - Woodman 123 Team',
        titleDelimiter: '-',
        tagline: 'Woodman 123 Team',
        url: 'https://design-engineering.littleor.cn',
        baseUrl: '/docs/',
        onBrokenLinks: 'throw',
        onBrokenMarkdownLinks: 'warn',
        favicon: 'img/favicon.ico',
        organizationName: 'Littleor', // Usually your GitHub org/user name.
        projectName: 'DesignEngineering', // Usually your repo name.

        presets: [['classic', /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                    docs: {
                        routeBasePath: '/', // doc only mode
                        sidebarPath: require.resolve('./sidebars.js'), // Please change this to your repo.
                        editUrl: 'https://github.com/NexMaker-Fab/2023zjude-Woodman123/tree/main/docs',
                    }, blog: false, theme: {
                        customCss: require.resolve('./src/css/custom.css'),
                    },
                }
            ),],],
        themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
            ({
                tableOfContents: {
                    maxHeadingLevel: 4,
                },
                colorMode: {
                    respectPrefersColorScheme: true
                },
                /* algolia: {
                     // The application ID provided by Algolia
                     appId: 'YOUR_APP_ID',

                     // Public API key: it is safe to commit it
                     apiKey: 'YOUR_SEARCH_API_KEY',

                     indexName: 'YOUR_INDEX_NAME',

                     // Optional: see doc section below
                     contextualSearch: true,

                     // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
                     // externalUrlRegex: 'external\\.com|domain\\.com',

                     // Optional: Algolia search parameters
                     // searchParameters: {},

                     //... other Algolia params
                 },*/
                // algolia: {
                //     // The application ID provided by Algolia
                //     appId: 'FW0TY4ZE99',
                //
                //     // Public API key: it is safe to commit it
                //     apiKey: '1dc44a8b9f2eed41019c57d59f473bdb',
                //
                //     indexName: 'anyweb',
                //
                //     // Optional: see doc section below
                //     contextualSearch: true,
                //
                //     // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
                //     // externalUrlRegex: 'external\\.com|domain\\.com',
                //
                //     // Optional: Algolia search parameters
                //     // searchParameters: {},
                //
                //     //... other Algolia params
                // },

                navbar: {
                    title: 'Woodman 123 Team', logo: {
                        alt: 'My Site Logo', src: 'img/logo.svg', width: 30
                    }, items: [{
                        href: 'https://design-engineering.littleor.cn', label: 'Homepage', position: 'left'
                    }, {
                        href: 'https://github.com/NexMaker-Fab/2023zjude-Woodman123/issues',
                        label: 'Feedback',
                        position: 'left'
                    }, {
                        href: 'https://github.com/NexMaker-Fab/2023zjude-Woodman123', label: 'GitHub', position: 'right',
                    },],
                },

                footer: {
                    style: 'dark',
                    links: [{
                        title: 'Docs', items: [{
                            label: 'Tutorial', to: '/',
                        },],
                    }, {
                        title: 'Community', items: [{
                            label: 'Discussions', href: 'https://github.com/NexMaker-Fab/2023zjude-Woodman123/discussions',
                        },],
                    }, {
                        title: 'More', items: [{
                            label: 'GitHub', href: 'https://github.com/Littleor',
                        },],
                    },],
                    copyright: `Copyright © ${new Date().getFullYear()}  Woodman 123 Team. Built with Docusaurus.`,
                }, prism: {
                    theme: lightCodeTheme, darkTheme: darkCodeTheme, additionalLanguages: ['java'],
                },
            }),
    }
;

module.exports = config;
