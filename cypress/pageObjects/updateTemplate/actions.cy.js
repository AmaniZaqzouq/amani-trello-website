class UpdateTemplateActions{
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

    typeNewName(newTitle){
        cy.findByTestId("quick-card-editor-card-title").type(newTitle);
        return this;
    }

    clickOnSaveButton(){
        cy.contains("button", "Save").click();
        return this;
    }

}
export default UpdateTemplateActions;