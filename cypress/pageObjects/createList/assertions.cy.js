class createListAssertions {
   checkAddACardButtonIsVisible(){
    cy.findByTestId("list-add-card-button").should("be.visible")
        return this;
   } 
}
export default createListAssertions;