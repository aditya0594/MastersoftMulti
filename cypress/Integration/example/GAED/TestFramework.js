
///<reference types="cypress"/>

import cartPage from "../../../support/pageObject/cartPage";
import ConfirmationPage from "../../../support/pageObject/ConfirmationPage";
import HomePage from "../../../support/pageObject/HomePage";
import productPage from "../../../support/pageObject/productPage";


describe('This is the test suite for the end-to-end test case', function () {
    // TO run from the cmd : npx cypress run --spec "cypress/integration/example/TestFramework.js" --headed --browser chrome --env url="https://rahulshettyacademy.com" 

    // Load the fixture data before the test 
    // this for the data pass to test 
    // Fixture file 'example' is the  json file
    // In before there is a hook which run all the method.

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data; // Store fixture data in 'this.data'  this.data is available to across your file. 
            cy.log('Fixture data loaded: ' + JSON.stringify(this.data)); // Log the loaded data 
        });
    });

    it('This is the test case for the end-to-end test case', function () {

        const home = new HomePage();
        const product = new productPage();
        const cart = new cartPage();
        const confirmationPage = new ConfirmationPage();
        const productname = this.data.productname; // Access productname from fixture
        cy.log('productname: ' + productname)
        
        // Log productname for verification
        //cy.pause(); 
        home.goTo( Cypress.env('url') + "/angularpractice" )  
        home.login(this.data.username, this.data.email, this.data.password)
    
        const url = Cypress.env('url') + "/angularpractice";
       // cy.log(url);
        cy.then(()=>{
            console.log(url)
        });

        cy.get('.alert-dismissible strong').should('have.text', "Success!");

        // Navigate to product list
        product.productClick();

        product.GetCardCount().should('have.length', 4);

        // Find the product and click 'Add'
        product.searchProductAdd(productname)

        // Add another product to the cart
        product.addCartButton();
        product.checkOutButton();
        cy.wait(2000);

        product.calculateAmount().then((sum) => {
            cy.log('Product sum is: ' + sum);
            expect(sum).to.be.lessThan(2000000);
        });

        // Proceed to checkout and select the country
        cart.checkout();
        Cypress.config('defaultCommandTimeout', 10000)  // wait for the 10 sec for the rest of the test 
        cart.location('us', 'Austria');
        // Agree to terms and complete the purchase
        cart.purchaseClick();

        // Verify success message
        confirmationPage.successpurchase().should('contain', 'Success!');
    });
});
