///<reference types="cypress"/> 
describe('My first testsuite', function ()  // describe is nothing but suite level //we will write in the mocha ,here we are using the mocha

{
  it('My Windows switch ', function () {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // so in the dom to open the saperate window tab there will be the attribute present that is : target : blank 
    // If we open in the new tab cypress can handle it so we have to use jquery and remove the target attribute so that it will 
    //on the same tab

    // to remove attribute we have to use the .invoke('removeAttr','target')


    cy.get('#opentab').invoke('removeAttr', 'target').click();  // invoke is user to remove the attribute from the html
    // command here we are remove the target blank and click

    //cy.get('#opentab').click();

    // Cypress do not support cross origin
    // cy.origin take two parameter first is URL and second is function.

    cy.origin('https://www.qaclickacademy.com/', () => {  //origin us use for if we switch to new domain and have to work on it
      cy.get('#navbarSupportedContent a[href*="about"]').click();
      cy.get('div[class="section-title mt-50"] h2').should('contain', 'Welcome to QAClick Academy ')
    })


  })
})


