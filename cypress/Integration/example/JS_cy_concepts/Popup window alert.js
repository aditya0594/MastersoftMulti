///<reference types="cypress"/> 
describe('My first testsuite',function()  // describe is nothing but suite level //we will write in the mocha ,here we are using the mocha

{
    it('My first Alert and verify content of alart',function()
    {
    
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        //Alert 

        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();

        //Cypress auto accept the alert and popups

        // cypress have cabibility of browser events, window:alert is command to fired on the open alert, So you are fired the event to get
        // access of the alert
        // window:alert is event which get fired on the alert open so you are firing the event through cypress  to get access to that alert

      // To verify the text on the popup 
      cy.on('window:alert',(str )=>{  // on is method to trigger any event   // function.then() shortcut us fat pipe =>
        //mocha 
        expect(str).to.be.equal('Hello , share this practice page and share your knowledge');
      })

      cy.on('window:confirm',(str)=>{
        //mocha 
        expect(str).to.be.equal('Hello , Are you sure you want to confirm?');
      })

    })
})  


