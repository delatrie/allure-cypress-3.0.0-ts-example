import { defineConfig } from "cypress";
import { allureCypress } from "allure-cypress/reporter";

export default defineConfig({
  e2e: {
    baseUrl: "https://allurereport.org",
    setupNodeEvents: (on, config) => {
      allureCypress(on, config);
    },
  },
});
