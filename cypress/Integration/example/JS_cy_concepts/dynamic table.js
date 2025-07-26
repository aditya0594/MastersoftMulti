///<reference types="cypress"/> 
describe('My first testsuite', function ()  // describe is nothing but suite level //we will write in the mocha ,here we are using the mocha

{
  it('My web table handle ', function () {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

    // There will be the  nth-child(2)

    cy.get('table.table-display tr td:nth-child(2)').each(($e1, index, $list) => {

      const text = $e1.text()
      
      if(text.includes("Python")){
      
         cy.get("table.table-display tr td:nth-child(2)").eq(index).next().then(function(price)
        {
        
          const pricetext = price.text();
          expect(pricetext).to.equal('25');
        })
      }
      
      else {
      
          console.log("value not found")
      }
      

    })


  })
})


