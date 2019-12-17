const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://varlet.dev',
  ignoredPaths: ['index', 'api'],
  pagesDirectory: __dirname + "\\pages",
  targetDirectory : 'public/',
  nextConfigPath: __dirname + "\\next.config.js",
  ignoredExtensions: [ 'png', 'jpg' ],
  pagesConfig: {
    '/login': {
      priority: '0.5',
      changefreq: 'daily'
    }
  }
});
