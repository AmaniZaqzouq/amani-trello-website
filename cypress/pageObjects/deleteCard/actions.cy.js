class DeleteCardActions{

    openBoard(url){
        cy.wait(3000);
        cy.visit(url);
        cy.wait(3000);
        cy.screenshot({capture:"fullPage"});
        return this;
    }

    openCardOptions(){
        cy.findByTestId("quick-card-editor-button").click({force:true});
        cy.wait(3000);
        return this;
    }

    chooseArchiveOption(){
        cy.findByTestId("quick-card-editor-archive").click();
        cy.wait(3000);
        return this;
    }

}
export default DeleteCardActions;