class SsoAdmin{
    sso_adminLoginPage(){
        cy.visit(Cypress.env('SsoadminUrl'))
    }
    ssoAdmindetailsLogin(){

        cy.get("input[name='email']").type("gabriel.sze@yopmail.com");
        cy.intercept('POST', 'https://dev.gaedkeeper.com/dev/api/v1/admin/send-otp').as('sendOtp'); // <-- use correct endpoint path

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
            cy.get("button[type='button']").click();
        })
    }
    UserManagementClick(){
        cy.get("div[class='group rounded-md flex items-center my-3 py-2 px-4 font-semibold text-sm bg-primary text-white cursor-pointer']").click

    }
    UserManagementEyebtn(){
        cy.wait(15000);
        cy.get("span[class='cursor-pointer hover:underline']").first().click();
    }
    UserManagementVerifybtn(){
        cy.contains('span','Verify User').click();
        // cy.get('text-sm font-medium').eq(1).click();
        cy.get("input[type='checkbox']").first().check();
        cy.wait(1000);
        cy.get("input[type='checkbox']").eq(1).check();
        cy.contains('span','Continue').click();
        cy.contains('span','Confirm').click();
        cy.wait(25000)

    }

     USerCerificateVerify(){
      cy.get('.css-1gdrfkc').click()
      cy.wait(1000);
        cy.get("div[tabindex='-1']").each(($e1,index,$list)=>{
           
            if($e1.text()==='Accept'){
              cy.wrap($e1).click();
            }

        })
        cy.wait(2000)
      //cy.get('#react-select-7-input').type("Accept{tab}")
       //cy.get('#react-select-3-option-0').click();
       cy.get(':nth-child(1) > :nth-child(5) > .flex > .cursor-pointer > .w-5').click();
       cy.wait(2000)
       cy.contains('h3','User Certificate').should('contain','User Certificate');
         
    }

}

export default SsoAdmin;