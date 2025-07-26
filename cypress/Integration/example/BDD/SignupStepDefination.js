import { Given,Then,When } from "@badeball/cypress-cucumber-preprocessor";
import before from "./Login/before";
import SignupPage from "../../../support/pageObject/SignupPage"; 
import SsoAdmin from "../../../support/pageObject/SsoAdminPage";
import LoginPage from "../../../support/pageObject/LoginPage";


const signup = new SignupPage();
const ssoadmin = new SsoAdmin();
const login = new LoginPage();


Given('Open the signup page',function(){

    signup.signupPage();
})
When('Enter email address and other',function(){
    signup.signupdetails();
})
Then('Verify the Go to Web site button is visiable',function(){
    signup.VerifyConsumerRegister();
})
//sso admin
Given('Open admin sso admin portal',function(){

    ssoadmin.sso_adminLoginPage();
})

When('Login to the admin with gabrial email',function(){
    ssoadmin.ssoAdmindetailsLogin();
})
Then('Go to the User Management',function(){
    ssoadmin.UserManagementClick();
})
Then('Click on the added consumer eye button',function(){
    ssoadmin.UserManagementEyebtn();
})
Then('Click on verify user button and confirm wait for the sso certificate and verify the certificate',function(){
   ssoadmin.UserManagementVerifybtn();
     ssoadmin.USerCerificateVerify();
})




Given('Given Open login page',function(){
     home.GoToHomePage(Cypress.env('url'));
})
When('Login to the existing user',function(){
    login.ValidEmailLogin(email);
})
When('Enter all the invalid details check the error message of field',function(){


})
  