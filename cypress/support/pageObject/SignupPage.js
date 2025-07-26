// Update the path as necessary
import Utilies from "../../support/Utilies";

// const value = getLastColumnCellValue('cypress/fixtures/testdata.xlsx', 'Sheet1', 2);
// cy.log('Read:', value);


class SignupPage {



    signupPage() {
        cy.visit(Cypress.env('url') + '/signup', { timeout: 10000 })
        cy.url().should('contain', '/signup')

    }

    signupdetails() {

        const utils = new Utilies();
        cy.get("input[name='firstName']").type("aditya");
        cy.get("input[name='lastName']").type("pawar");
        const randomEmail = `aditya${Math.floor(Math.random() * 100000)}@yopmail.com`;
        cy.log(randomEmail);

       // const csvPath = 'cypress/fixtures/testdata.xlsx';
        cy.task('updateExcelCell', {
            filePath: 'cypress/fixtures/testdata.xlsx',
            sheetName: 'ConsumerEmail',
            rowIndex: 0,
            columnIndex: 0,
            newValue: 'Updated by Cypress'
        });

        cy.get("input[name='email']").type(randomEmail);
        cy.get("svg[data-testid='AddIcon']").click();
        utils.dropdownDynamic("div[class='css-19bb58m']", "div[class='css-3chczc-option']", "Other");
        utils.dropdownDynamic("input[aria-describedby='react-select-3-placeholder']", "div[role='option']", "Legal");
        const randomCompany = `company${Math.floor(Math.random() * 100000)}name`;
        cy.get("input[name='companyName']").type(randomCompany);
        cy.get("input[name='companyUrl']").type("www.automationCompany.com");
        utils.AddressdropdownDynamic("input[name='companyAddress']", "li[class='text-sm font-normal text-black-900 px-3 py-2 cursor-pointer hover:bg-[#f6f6f6]']",
            "Chatrapati");

        cy.get("input[type='checkbox']").check().should('be.checked');

        cy.intercept('POST', 'https://dev.gaedkeeper.com/dev/api/v1/user/send-otp').as('sendOtp'); // <-- use correct endpoint path

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
            cy.wait(5000);

        });
    }
    VerifyConsumerRegister() {
        cy.get('.xs\:text-sm').should('be.visible')
    }







}
export default SignupPage;