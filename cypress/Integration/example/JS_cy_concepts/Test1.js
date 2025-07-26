///<reference types="cypress"/>

describe('My First test suite',function(){
    it('My first Testcase',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4);  //comming from the chai library "Should"  
            
    
    })

})