class LoginPage {

    InvalidEmailValidation(){
        return cy.get('.my-2');
     }
    emailNotExist(){
        return cy.get("span[class='block my-2 text-xs font-normal text-red-500 ']");
    }
    emptyEmail(){
        return cy.get("span[class='block my-2 text-xs font-normal text-red-500 ']");
    }
    LoginPage(email){
        cy.visit(Cypress.env('url')+'/login');
        cy.get("input[name='email']").type(email);
     
    }
    LoginPageOnly(){
        cy.visit(Cypress.env('url')+'/login');
    }
    emptyEmailLoginPage(){
        cy.visit(Cypress.env('url')+'/login');
        cy.get("input[name='email']").click();

        // Step 2: Fill in the email field

    }

    sentOtpbtn(){
    
        cy.get("button[type='submit']").click();
    }

    loginPageVerify(){
        cy.url().should('contain','/platforms')
    }
    ValidEmailLogin(email) {
        cy.visit(Cypress.env('url')+'/login');
        // Step 2: Fill in the email field
        cy.get("input[name='email']").type(email);
        // Step 3: Intercept the network request BEFORE clicking submit
        cy.intercept('POST', 'https://qa.gaedkeeper.com/qa/api/v1/user/send-otp').as('sendOtp'); // <-- use correct endpoint path

        // Step 4: Submit the form (this triggers the OTP API call)
        cy.get("button[type='submit']").click();

        // Step 5: Wait for the API call and read the response
        cy.wait('@sendOtp').then((interception) => {
            const responseBody = interception.response.body;
            cy.log('Full JSON response: ' + JSON.stringify(responseBody));

            // If the OTP is in response.data.code
            const otp = responseBody?.data?.code;
            cy.log('Captured OTP: ' + otp);

            cy.get('[aria-label="Please enter OTP character 1"]').type(otp.toString());

        })
        cy.get("button[type='button']").click();
        Cypress.config('defaultCommandTimeout', 20000)
        cy.get("div[class='capitalize text-2xl font-bold']").then(($e1) => {
            const text = $e1.text();
            cy.log(text);
            expect(text).contains("Welcome")
        });
       
    }

    verifySignUpLinkClick(){
        return cy.get("span[class='xs:text-sm 2xl:text-base 3xl:text-lg font-medium text-primary hover:underline cursor-pointer']").click()
       
    }
}
export default LoginPage;