
class HomePage {

    goTo(url) {
        cy.visit(url)
    }



    login(username, email, password) {
        cy.get('input[name="name"]').eq(0).type(username);
        cy.get('input[name="email"]').type(email);
        cy.get('#exampleInputPassword1').type(password);
        cy.get('#exampleCheck1').check().should('be.checked');
        cy.get('#exampleFormControlSelect1').select('Male');
        cy.get('input[value="option2"]').click().should('be.checked');

        // Set the birthdate and submit the form
        cy.get('input[name="bday"]').type('1995-05-20');
        cy.contains('Submit').click();

    }
    successAlart() {
        cy.get('.alert-dismissible strong');
    }
}
export default HomePage;
