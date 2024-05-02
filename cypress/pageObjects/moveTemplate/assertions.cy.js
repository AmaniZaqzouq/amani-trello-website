class MoveTemplateAssertions{

    checkThatTemplateIsNotExistInPrevList() {
        cy.findByTestId('quick-card-editor-card-front').should('not.exist');
        return false;
      }

      /*checkThatTemplateIsExistInCurrentList() {
        cy.findByTestId('list').eq(1);
        cy.findByTestId('list-card').eq(3).should('exist');
        return this;
      }*/

}
export default MoveTemplateAssertions;