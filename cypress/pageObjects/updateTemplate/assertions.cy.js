class UpdateTemplateAssertions{
    checkCardtTitleContainValue(newTitle){
        cy.findByTestId("quick-card-editor-button").click({force:true});
        cy.wait(3000);
        cy.findByTestId("quick-card-editor-open-card").click();
        cy.wait(3000);
        cy.get(".window-title").should('contain',newTitle);
        return this;
    }


}
export default UpdateTemplateAssertions;