class MoveTemplateActions{

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

    chooseMoveOption(){
        cy.findByTestId("quick-card-editor-move").click();
        cy.wait(3000);
        return this;
    }

    selectTheDestinationList(){
        cy.findByTestId("move-card-popover-select-list-destination").select('Doing');
        cy.wait(3000);
        return this;
    }

    clickOnMoveButton(){
        cy.findByTestId("move-card-popover-move-button").click();
        return this;
    }

}
export default MoveTemplateActions;