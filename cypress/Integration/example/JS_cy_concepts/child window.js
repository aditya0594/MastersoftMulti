///<reference types="cypress"/> 
describe('My first testsuite',function()  // describe is nothing but suite level //we will write in the mocha ,here we are using the mocha

{
    it('My Windows switch ',function()
    {
    
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        cy.get('#opentab').then(function(e1){

            const url = e1.prop('href'); 
           // to get the value of href "Prop" is user

            cy.visit(url);  // this comment should be there for the open the site
            cy.origin(url,()=>{
                cy.get('#navbarSupportedContent a[href*="about"]').click();

            })
        })
        
    })
        

})


