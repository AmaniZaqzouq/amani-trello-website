class updateListActions {

    typeInListTitleInputFieldANewTitle(updatedListName){
        cy.findByTestId("list-name-textarea").first().type(updatedListName + "{enter}", {force:true});
        return this;
       }   

}
export default updateListActions;