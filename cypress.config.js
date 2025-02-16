const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      return config;
    },
    specPattern: 'cypress/e2e/features/*.feature',
    viewportWidth: 1920,  
    viewportHeight: 1080,  
  },
});
