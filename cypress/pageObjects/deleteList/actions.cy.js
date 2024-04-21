class deleteListActions{
    clickOnThreeDots(){
        cy.findByTestId("list-edit-menu-button").click();
        cy.wait(3000);
        return this;
    }

    chooseArchiveList(){
        cy.contains("a","Archive this list").click();
        cy.wait(3000);
        return this;
    }

}
export default deleteListActions;