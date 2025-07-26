
import { Before } from "@badeball/cypress-cucumber-preprocessor";
 
Before(function () {
   cy.fixture("example").then((data) => {
     this.data = data;
     cy.log("Fixture data loaded: " + JSON.stringify(this.data)); // ✅ debug
   });
 });