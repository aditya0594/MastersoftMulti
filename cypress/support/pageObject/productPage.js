class productPage{

    productClick(){
        cy.get('a[class="nav-link"]').eq(1).click();
    }
    GetCardCount(){
        return cy.get('div[class="card h-100"]');
    }
    addCartButton(){
        return cy.get('app-card').eq(0).contains('button','Add').click();
    }
    checkOutButton(){
        cy.contains('a','Checkout').click();
    }
    searchProductAdd(productname){
        cy.get('app-card').filter(`:contains("${productname}")`).then($element => {
            cy.wrap($element).should('have.length', 1);
            cy.wrap($element).contains('button','Add').click();
        });
    }
    calculateAmount() {
        let sum = 0;
        return cy.get('tr td:nth-child(4) strong')
            .each(($e1) => {
                const priceAmount = Number($e1.text().split(" ")[1].trim());
                sum += priceAmount; // Accumulate the sum
            })
            .then(() => {
                 // Log the sum for debugging
                return sum; // Return the sum as a Cypress chainable
            });
    }
    
    //.then(function () {
        //     cy.log("The amount: " + sum);
        //     expect(sum).to.be.lessThan(20000000); // Ensure the sum is under a certain amount
        // });
 

}
export default productPage;
    
