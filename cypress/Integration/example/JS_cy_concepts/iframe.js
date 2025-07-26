///<reference types="cypress"/> 
///<reference types="cypress-iframe"/>
import 'cypress-iframe'   // We have to install the library for the iframe 
                        // we have to installs  cypress-iframe  by using the npm install -D cypress-iframm

describe('My first testsuite', function ()  // describe is nothing but suite level //we will write in the mocha ,here we are using the mocha



{
  it('My web table handle ', function () {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.frameLoaded('#courses-iframe')
    cy.iframe().find('a[href*=mentorship]').eq(0).click();
   
    cy.iframe().find('h1[class ="pricing-title"]').should('have.length',2);
    })


  })


