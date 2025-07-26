class Utilies{

    dropdownDynamic(dropdownCss, OptionContainerCss,optionToBeSelect){
        cy.get(dropdownCss).type(optionToBeSelect);
        cy.get(OptionContainerCss).each(($e1,index,$list)=>{
           
            if($e1.text()===optionToBeSelect){
              cy.wrap($e1).click();
            }
        })
    }
    AddressdropdownDynamic(dropdownCss, OptionContainerCss,optionToBeSelect){
        cy.get(dropdownCss).type(optionToBeSelect);
        cy.get(OptionContainerCss).each(($e1,index,$list)=>{
           
            if(index===0){
              cy.wrap($e1).click();
            }
        })
    }


}
export default Utilies;


