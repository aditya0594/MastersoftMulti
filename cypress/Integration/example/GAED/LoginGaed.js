
///<reference types="cypress"/>
import HomePageGead from "../../../support/pageObject/HomePageGaed";
import LoginPage from "../../../support/pageObject/LoginPage";

before(function () {
    cy.fixture('example').then(function (data) {
        this.data = data; // Store fixture data in 'this.data'  this.data is available to across your file. 
        cy.log('Fixture data loaded: ' + JSON.stringify(this.data)); // Log the loaded data 
    });
});

describe('To login in the portal',function(){
    const homepage = new HomePageGead();
    const loginpage = new LoginPage();

    // it('To Login with the valid data',function(){
    //     homepage.GoToHomePage();
    //     const getdata = this.data.userEmail
    //         cy.log(getdata);
    //     loginpage.ValidEmailLogin(this.data.userEmail);
    // })

    it('To Login with the Invalid Email',function(){
    
        homepage.GoToHomePage(Cypress.env('url'));
        loginpage.LoginPage(this.data.userInvalidEmail);
        loginpage.InvalidEmailValidation().then(($e1)=>{
            const errorText = $e1.text();
            expect(errorText).to.be.equals("This looks like an invalid email (eg: abc@xyz.com)");
        })
    })

    it('To Login with the Email not exist',function(){
    
        homepage.GoToHomePage(Cypress.env('url'));
        loginpage.LoginPage(this.data.userExist);
        loginpage.sentOtpbtn();
        loginpage.emailNotExist().then(($e1)=>{
            const errorText = $e1.text();
            expect(errorText).to.be.equals("This email is not signed up. Double-check or sign up for a new account.");
        })
    })
    
    it('To Login with empty email',function(){
        
        homepage.GoToHomePage(Cypress.env('url'));
        loginpage.emptyEmailLoginPage();
        loginpage.sentOtpbtn();
        loginpage.emptyEmail().then(($e1)=>{
            const errorText = $e1.text();
            expect(errorText).to.be.equals("Field is Required.");
        })
    });

    it('To verify the signup url', function(){
        loginpage.LoginPage("adityapawar@yopmail.coms");
        loginpage.verifySignUpLinkClick();

         // Verify that the URL is correct after the click
        cy.url().should('include', '/signup');  // or match the exact URL

    })


})