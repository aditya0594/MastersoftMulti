class cartPage{


    checkout(){
        cy.get('button[class="btn btn-success"]').click();
    }
    location(type, suggestedvalue){
        cy.get('#country').type(type).then(() => {
            cy.wait(2000);
            cy.get('.suggestions ul li a').each(($e1) => {
                if ($e1.text().includes(suggestedvalue)) {
                    cy.wrap($e1).click();
                }
            });
        });
    }
    purchaseClick(){
        cy.contains('I agree with the ').click();
        return cy.contains('Purchase').click();
    }
}
export default cartPage;