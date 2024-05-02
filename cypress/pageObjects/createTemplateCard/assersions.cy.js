class CreateTemplateAssertions{
    checkThisCardIsTemplateIsVisible(){
        cy.findByTestId('badge-card-template').should('be.visible');
        return this;
    }

}
export default CreateTemplateAssertions;