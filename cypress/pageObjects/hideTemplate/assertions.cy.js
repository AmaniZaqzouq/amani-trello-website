class HideTemplateAssertions{

    checkThatTemplateIsHidden() {
        cy.findByTestId('quick-card-editor-card-front').should('not.exist');
        return false;
      }

}
export default HideTemplateAssertions;