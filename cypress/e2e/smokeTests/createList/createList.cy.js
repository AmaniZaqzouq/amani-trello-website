/// <reference types="cypress" />
import {Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import createListActions from "../../../pageObjects/createList/actions.cy";
import createListAssertions from "../../../pageObjects/createList/assertions.cy";


const createListAction = new createListActions();
const createListAssertion = new createListAssertions();
const boardName = "My First Board"; 
const listName = "Testing List";


before(()=>{

    cy.loginToTrello();
    cy.wait(3000);
    cy.findByTestId("header-create-menu-button").click();
    cy.findByTestId("header-create-board-button").click();
    cy.findByTestId("create-board-title-input").type(boardName);
    cy.findByTestId("create-board-submit-button").click();
    
});


/*When("The user clicked on add a list button",()=>{
    createListAction.clickOnAddAListButton();
});*/

When("The user Entered the list name",()=>{
    createListAction.typeInListTitleInputField(listName);
});

When("Clicked on add list button",()=>{
    createListAction.clickOnAddListButton();
});

Then("The list will be created successfully",()=>{
    createListAssertion.checkAddACardButtonIsVisible();
});

/*after(()=>{
    cy.findByTestId("OverflowMenuHorizontalIcon").click();
    cy.contains("span","Close board").click();
    cy.findByTestId("popover-close-board-confirm").click();
    cy.findByTestId("close-board-delete-board-button").click();

});*/