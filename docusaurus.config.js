/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Riffing Austin',
  tagline: 'The tagline of my site',
  url: 'https://riffingaustin.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Riffing Austin',
      items: [
        {to: '/', label: 'Blog', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Austin Allsbury`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          blogTitle: 'Riffing Austin',
          blogDescription: 'Austin Allsbury',
          showReadingTime: true,
          path:'./blog',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
