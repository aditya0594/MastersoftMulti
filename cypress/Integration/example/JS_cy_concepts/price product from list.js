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
        .then(function(){
            console.log("this is promise resolved and showing in squence")
        })
        console.log("without promise")
         
         //console.log(textproduct);  //it will log in the dev tool console its a javascript command tha
         // thats why it is printing at a beggining of the test run
        // get all product and get all the products name \
        cy.get("@productLocator").find(".product").each(($e1, index, $list )=>{

            const textproduct = $e1.find("h4.product-name").text();
            
             
            if(textproduct.includes("Carrot ")){
                cy.wrap($e1).find("button").click();
            }  

        })


        console.log(cy.get("@productLocator"));
        // cypress is a asynchronus in nature and there will be the no guarantee squence of execution 
        // but the cypress take care of it. Promise is nothing but state and behavior it say Promise is resolved then the step will executed
        // promise comes with the rejection, resolved, pending
        // .then() internally taking this method

       
        
        // Assert the text is correctly print or not 

        cy.get(".brand.greenLogo").should('have.text','GREENKART'); 
 

        // This is use to print in log // We are handle the promise here by using the "then"
        const logotext = cy.get(".brand.greenLogo");
        logotext.then(($e1) =>{
            
            const text = $e1.text();// Extract text using jQuery method
            cy.log(text);// Log the extracted text // this log is cy
        })

        
      
    })
})  


