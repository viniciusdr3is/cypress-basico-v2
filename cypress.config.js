const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "t71cng",
  e2e: {
    setupNodeEvents(on, config) {},
    component: {
      devServer: {
        framework: "react",
        bundler: "vite",
      },
    },
  },
  video: false,
});
