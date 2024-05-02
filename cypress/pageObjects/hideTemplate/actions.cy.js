class HideTemplateActions{

    openBoard(url){
        cy.wait(3000);
        cy.visit(url);
        cy.wait(3000);
        return this;
    }

    openCardOptions(){
        cy.findByTestId("quick-card-editor-button").click({force:true});
        cy.wait(3000);
        return this;
    }

    chooseHideFromListOption(){
        cy.findByTestId("quick-card-editor-archive").click();
        return this;
    }

}
export default HideTemplateActions;