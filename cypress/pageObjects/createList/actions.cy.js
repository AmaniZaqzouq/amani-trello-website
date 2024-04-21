class createListActions {
    
   /*clickOnAddAListButton(){
    cy.findByTestId("home-team-boards-tab").click();
    cy.wait(3000);
    cy.contains("div","My First Board").click();
    cy.wait(3000);
    cy.findByTestId("list-composer-button").click();
    return this;
   }*/

   typeInListTitleInputField(listName){
    cy.findByTestId("list-name-textarea").first().type(listName);
    return this;
   }

   clickOnAddListButton(){
    cy.findByTestId("list-composer-add-list-button").click();
    //cy.wait(3000);
    return this;
   }
}
export default createListActions;