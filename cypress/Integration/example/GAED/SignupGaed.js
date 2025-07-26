
///<reference types="cypress"/>
import HomePageGead from "../../../support/pageObject/HomePageGaed";
import LoginPage from "../../../support/pageObject/LoginPage";
import SignupPage from "../../../support/pageObject/SignupPage";

before(function () {
    cy.fixture('example').then(function (data) {
        this.data = data; // Store fixture data in 'this.data'  this.data is available to across your file. 
        cy.log('Fixture data loaded: ' + JSON.stringify(this.data)); // Log the loaded data 
    });
});

describe('To login in the portal',function(){

    it('To signup with the valid consumer details',function(){
        const homepage = new HomePageGead();
        const loginpage = new LoginPage();
        const signup = new SignupPage();
        signup.signupPage();
        signup.signupdetails();
        signup.VerifyConsumerRegister();
    })
})