import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import HomePageGead from "../../../support/pageObject/HomePageGaed";
import LoginPage from "../../../support/pageObject/LoginPage";
import before from "./Login/before";

const home = new HomePageGead();
const login = new LoginPage();
Given('open the gaed portal', function () {

    home.GoToHomePage(Cypress.env('url'));

})
When('open the login page {string}', function (email) { 
    const emailuser = this.data.userEmail;
    cy.log(emailuser);
    login.ValidEmailLogin(email);
})

Then('It should open the login page', function () {
    login.loginPageVerify();
})
When('open the login page only {string}',function(Invalidemail){
    login.LoginPage(Invalidemail)
})
Then('It should show the error message of invalid email',function(){
    login.InvalidEmailValidation().should('contain','This looks like an invalid email (eg: abc@xyz.com)');
})
When('open the login page and enter empty email',function(){
    login.emptyEmailLoginPage();

    
})
Then('It should show the error message of email',function(){
    login.emptyEmailLoginPage()
    login.sentOtpbtn();
    login.emptyEmail().then(($e1)=>{
        const errorText = $e1.text();
        expect(errorText).to.be.equals("Field is Required.");
})

// Given('Go to login page',function(){
//     login.LoginPageOnly();
// })
Given('Go to login page',function(){
    login.LoginPageOnly();
})
When('Click on the signup button ',function(){
    login.LoginPage(this.data.userEmail);
    login.verifySignUpLinkClick();
     // Verify that the URL is correct after the click
   // cy.url().should('include', '/signup');  // or match the exact URL

})
Then('Verify that it should navigate to signup page',function(){
    cy.url().should('include', '/signup');
})
})

