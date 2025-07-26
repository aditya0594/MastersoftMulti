///<reference types="cypress"/> 
describe('My first testsuite',function()  // describe is nothing but suite level //we will write in the mocha ,here we are using the mocha

{
    it('My first testcase',function()
    {
    
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption1').check().should('be.checked').should('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').should('have.value','option1')
        cy.get('input[type="checkbox"]').check(['option1','option2'])

        //Static dropdrop

        cy.get('select').select('option2').should('have.value','option2')

        //dynamic dropdown

        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($e1,index,$list)=>{
           
            if($e1.text()==='India'){
              cy.wrap($e1).click();
            }

        })
        

        // Hide show 
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');

        //radio button 

    cy.get('input[value="radio1"]').check().should('be.checked');

    //check options

    cy.get('#checkBoxOption3').check().should('be.checked').then(function(){
        console.log("Checked the button 3")
    })
      
    })
})  


