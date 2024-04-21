/// <reference types="cypress" />
import {Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import updateListActions from "../../../pageObjects/updateList/actions.cy";
import updateListAssertions from "../../../pageObjects/updateList/assertions.cy";



const updateListAction = new updateListActions();
const updateListAssertion = new updateListAssertions();
const boardName = "My First Board"; 
const listName = "My List";
const updatedListName ="My Updated List"


before(()=>{

//login to trello
    cy.loginToTrello();
    cy.wait(3000);

//create new board
    cy.findByTestId("header-create-menu-button").click();
    cy.findByTestId("header-create-board-button").click();
    cy.findByTestId("create-board-title-input").type(boardName);
    //cy.wait(3000);
    cy.findByTestId("create-board-submit-button").click();
    cy.wait(3000);

//create new list
    cy.findByTestId("list-name-textarea").first().type(listName);
    cy.findByTestId("list-composer-add-list-button").click();
    cy.wait(3000);
    
    
});

When("The user typed a new title in the title input field and clicked enter",()=>{
    updateListAction.typeInListTitleInputFieldANewTitle(updatedListName);
});


Then("The list will be updated successfully with the new title",()=>{
    updateListAssertion.checkListNameContainValue(updatedListName);
});

/*after(()=>{
    cy.findByTestId("OverflowMenuHorizontalIcon").click();
    cy.contains("span","Close board").click();
    cy.findByTestId("popover-close-board-confirm").click();
    cy.findByTestId("close-board-delete-board-button").click();

});*/
