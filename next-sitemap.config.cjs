/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.sivantocapital.in',
  generateRobotsTxt: true,
  // Manually include all your pages
  additionalPaths: async (config) => [
     await config.transform(config, '/'), 
    await config.transform(config, '/about'),
    await config.transform(config, '/loan-process'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/personal-loan'),
    await config.transform(config, '/business-loan'),
    await config.transform(config, '/education-loan'),
    await config.transform(config, '/home-loan'),
    await config.transform(config, '/loan-against-property'),
    await config.transform(config, '/loan-against-insurance'),
    await config.transform(config, '/loan-against-mutual-funds'),
    await config.transform(config, '/health-insurance'),
    await config.transform(config, '/life-insurance'),
    await config.transform(config, '/credit-cards'),
    await config.transform(config, '/quick-loan-app-form'),
  ],
};
