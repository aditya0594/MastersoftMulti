
///<reference types="cypress"/> 

describe("this is my calender test", function(){


    it('this is my testcase for the calender date selections',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.get('button[class="react-date-picker__calendar-button react-date-picker__button"]').click();
        cy.get('button[class="react-calendar__navigation__label"]').click();
        cy.get('button[class="react-calendar__navigation__label"]').click();
        cy.get('button[class="react-calendar__tile react-calendar__decade-view__years__year"]').each(($e1,index,$list)=>{
            const datetoselect = $e1.text()
           if(datetoselect.includes("2028")){
            cy.get('button[class="react-calendar__tile react-calendar__decade-view__years__year"]').eq(index).click();

           }
        })
        cy.get('button[class="react-calendar__tile react-calendar__year-view__months__month"]').each(($e1,index,$list)=>{
            const datetoselect = $e1.text()
           if(datetoselect.includes("April")){
            cy.get('button[class="react-calendar__tile react-calendar__year-view__months__month"]').eq(index).click();

           }
        })
        cy.get('button[class="react-calendar__tile react-calendar__month-view__days__day"]').each(($e1,index,$list)=>{
            const datetoselect = $e1.text()
           if(datetoselect.includes("5")){
            cy.get('button[class="react-calendar__tile react-calendar__month-view__days__day"]').eq(index).click({force:true});

           }
        })

        cy.get('.react-date-picker__inputGroup').eq(0) // Select the input element(s)
        .invoke('prop', 'value') // Get the value of the input field
        .then((value) => {
            console.log('Input value:'+value);

          })
    })
      
})


 
// it('Verify date selection',()=>{
 
//     const monthNumber = "6";
//     const date = "15";
//     const year = "2027";
//     const expectedList = [monthNumber,date,year];

//     cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
//     cy.wait(5000)
//     cy.get(".react-date-picker__inputGroup").click();

//     cy.get(".react-calendar__navigation__label").click();
//     cy.get(".react-calendar__navigation__label").click();
//     cy.contains("button",year).click();
//     cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click();
//     cy.contains("abbr",date).click();

//     //Assertion
//     cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
//     {
//         cy.wrap($el).invoke('val').should('eq',expectedList[index]);
//     }
    
    