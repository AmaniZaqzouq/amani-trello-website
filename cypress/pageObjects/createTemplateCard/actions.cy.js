class CreateTemplateActions{

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

    chooseOpenCardOption(){
        cy.findByTestId("quick-card-editor-open-card").click();
        cy.wait(3000);
        return this;
    }

    chooseMakeTemplateOption(){
        cy.contains("span","Make template").click();
        //cy.wait(3000);
        return this;
    }

    closeScreen(){
        cy.findByTestId("CloseIcon").first().click();
        //cy.wait(3000);
        return this;
    }

}
export default CreateTemplateActions;