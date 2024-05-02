class DeleteCardAssertions{

    checkCardInArchivedItems(cardName){
        cy.get('[aria-label="Show menu"]').click();
        cy.get('.js-open-archive').click();
        cy.get('.archived-list-card').findByTestId('card-name').should('contain', cardName);
    }

    checkThatCardIsDeleted() {
        cy.findByTestId('list-card').should('not.exist');
        return false;
      }

}
export default DeleteCardAssertions;