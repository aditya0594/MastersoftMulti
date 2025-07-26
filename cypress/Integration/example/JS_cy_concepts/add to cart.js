//Cypress --spec file is the test file <reference types="cypress"/> is for the suggestions 
///<reference types="cypress"/> 
describe('My first testsuite',function()  // describe is nothing but suite level //we will write in the mocha ,here we are using the mocha

{
    it('My first testcase',function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/"); //cy is the global delaration like the webdrive, In cypress we need not create the object of cy
        cy.get("input[type='search']").type("ca");
        cy.get("button[class='search-button']").click;
        cy.wait(2000);
        // in selenium use to navigate to the url but in cypress it is work as the findelement
        cy.get(".product:visible").should("have.length",4);  //this is a assertion    assertion coming from the chai libraby
         
        //parent child chaining 

        cy.get('.products').as('productLocator');  // this is alias in the cypress for the centralize locator 

        cy.get("@productLocator").find(".product").should("have.length",4);
        
        cy.get("@productLocator").find(".product").eq(2).contains("ADD TO CART").click()
        cy.get("@productLocator").find(".product").each(($e1,index,$List)=>{
            const vegName = $e1.find("h4.product-name").text();
            if(vegName.includes('Cauliflower - 1 Kg')){
          
                cy.get('.cart-icon > img').click();
                cy.contains('PROCEED TO CHECKOUT').click();
                cy.contains('Place Order').should('have.text','Place Order');
                cy.contains('Place Order').click();

            }
        
        })
        // this is like under the product we are performing the actions 
    
     
      
        
      
    })
})  


