const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
    baseUrl: 'http://localhost:3000', // Altere para a URL correta do seu servidor de desenvolvimento
    supportFile: 'cypress/support/index.js',
  },
});