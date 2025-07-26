// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
 Cypress.Commands.add('Click on the Element',(element)=>{
    cy.get(element).click();
 })

 Cypress.Commands.add('dropdownDynamic',(dropdownCss, OptionContainerCss,optionToBeSelect)=>{
   //cy.get(dropdownCss).type('Oth');
   cy.get(OptionContainerCss).each(($e1,index,$list)=>{
      
       if($e1.text()===optionToBeSelect){
         cy.wrap($e1).click();
       }

   })
})
const fs = require('fs');
const XLSX = require('xlsx');
const path = require('path');

Cypress.Commands.add('writeExcel', (filePath, sheetName, rowIndex, columnIndex, newValue) => {
  const fullPath = path.resolve(filePath);

  // Read Excel workbook
  const workbook = XLSX.readFile(fullPath);
  const sheet = workbook.Sheets[sheetName];

  if (!sheet) {
    throw new Error(`Sheet "${sheetName}" not found`);
  }

  // Convert sheet to JSON array of arrays (2D array)
  const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

  // Get actual indices
  if (rowIndex === 'last') {
    rowIndex = data.length - 1;
  }
  if (columnIndex === 'last') {
    columnIndex = data[0].length - 1;
  }

  // Ensure the target row exists
  if (!data[rowIndex]) {
    throw new Error(`Row index ${rowIndex} does not exist.`);
  }

  // Update the cell
  data[rowIndex][columnIndex] = newValue;

  // Convert updated data back to worksheet
  const newSheet = XLSX.utils.aoa_to_sheet(data);
  workbook.Sheets[sheetName] = newSheet;

  // Write updated workbook back to file
  XLSX.writeFile(workbook, fullPath);
  cy.log(`Updated cell at row ${rowIndex}, column ${columnIndex} with "${newValue}"`);
});
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })