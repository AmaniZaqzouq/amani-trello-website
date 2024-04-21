class updateListAssertions {
    checkListNameContainValue(updatedListName){
        cy.findByTestId("list-name-textarea").should('contain',updatedListName);
        return this;
    }

 }
 export default updateListAssertions;