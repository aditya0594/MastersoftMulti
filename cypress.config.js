const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const XLSX = require("xlsx");
const path = require("path");



async function setupNodeEvents(on, config)
{
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );
   on("task", {
    updateExcelCell({ filePath, sheetName, rowIndex, columnIndex, newValue }) {
      const fullPath = path.resolve(filePath);
      const workbook = XLSX.readFile(fullPath);
      const sheet = workbook.Sheets[sheetName];

      if (!sheet) {
        throw new Error(`Sheet "${sheetName}" not found`);
      }

      const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      if (rowIndex === "last") {
        rowIndex = data.length - 1;
      }
      if (columnIndex === "last") {
        columnIndex = data[0].length - 1;
      }

      if (!data[rowIndex]) {
        throw new Error(`Row index ${rowIndex} does not exist`);
      }

      data[rowIndex][columnIndex] = newValue;

      const newSheet = XLSX.utils.aoa_to_sheet(data);
      workbook.Sheets[sheetName] = newSheet;
      XLSX.writeFile(workbook, fullPath);

      return null;
    }
  });
  

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}



module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: "cypress-mochawesome-reporter",

  env: {
    url: "https://dev.gaedkeeper.com",
    SsoadminUrl:"https://dev.gaedkeeper.com/admin/login"
  },

  retries: {
    runMode: 1,
  },

  projectId: "1rtjo8",

  e2e: {
    setupNodeEvents,
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    //   require("cypress-mochawesome-reporter/plugin")(on);`
    // },
    // we have add for the spec file
    specPattern: "cypress/integration/example/BDD/Login/*.feature",
      stepDefinitions: "cypress/integration/example/BDD/*.js"
  },


});
