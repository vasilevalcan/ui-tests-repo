import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  viewportHeight:1080,
  viewportWidth:1920,
  e2e: {
      baseUrl: 'https://way2automation.com/way2auto_jquery/automation-practice-site.html',
      excludeSpecPattern:['**/1-getting-started/*','**/2-advanced-examples/*'],
      failOnStatusCode: false
  },
});
