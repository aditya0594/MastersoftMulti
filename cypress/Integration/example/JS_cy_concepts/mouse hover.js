///<reference types="cypress"/> 
describe('My first testsuite',function()  // describe is nothing but suite level //we will write in the mocha ,here we are using the mocha

{
    it('My Windows switch ',function()
    {
    
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
      //  cy.get('.mouse-hover-content').invoke('show');  //to show all option



        cy.contains('Top').click({force:true});  //cypress click on the hidden (that without show options) from the dropdown.  
        // to confirm tha url include top in the url 
        cy.url().should('include','top')
       
        })
        


})  


