/**
 To install the cypress we have to use the : npm install cypress.
 When install the cypress the "node_modules" folder will be created

 
 What is the Cypress test runner 

 In general cypress is asynchronus in  nature there is not gaureantee in squence it is handle by the cypress squence steps
 
 Promise
 
 Promise come with the rejection,resolved, pending
 .then() do not rush for the next step without resolved.


 1. To get url of current page : 

    cy.get("span[class='xs:text-sm 2xl:text-base 3xl:text-lg font-medium text-primary hover:underline cursor-pointer']").click()
        cy.url().then((url)=>{
            cy.log("This is signup url : " + url )
        })
        return;
        
  // Verify that the URL is correct after the click
  cy.url().should('include', '/signup');  // or match the exact URL

  

2. what is difference between the should and contains in cypress

1.should()
should() is used for assertions in Cypress. It allows you to check properties or expect certain conditions on an element or value.
To assert that an element has specific text, CSS properties, or other attributes.
cy.get('button').should('be.visible');
cy.url().should('include', 'login');
cy.get('h1').should('have.text', 'Welcome');

2. Contains
contains() is used to find elements containing a specific text or value.
 It can also be used to locate elements and check if they contain a certain text.

 cy.contains('button', 'Submit').click();
 cy.contains('div', 'Hello').should('be.visible');



3. Environment variable
    We set the property in the cypress.config.js like

  env: {
    url: "https://qa.gaedkeeper.com/",
  },

  and we can this property in our test case it used for the URL like main parameters

4. What is the npx. 
    Npx nothing but we are poining the node-module bin folder 

5. Keys event in the cypress ? 

cy.get('input#name').type('Aditya'); // normal typing
cy.get('input#name').type('{enter}'); // press Enter key
cy.get('input#name').trigger('keydown', { keyCode: 13, which: 13 }); // Enter key
cy.get('input#name').trigger('keyup', { key: 'Enter' });
cy.get('input#name').trigger('keypress', { key: 'A', code: 'KeyA' });


6. span[class='cursor-pointer hover:underline'] There are multiple element i want click on first element

  cy.get("span.cursor-pointer.hover:underline").first().click();






































 */