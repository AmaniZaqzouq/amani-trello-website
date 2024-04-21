/// <reference types="cypress" />
import {Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import deleteListActions from "../../../pageObjects/deleteList/actions.cy";
import deleteListAssertions from "../../../pageObjects/deleteList/assertions.cy";

const deleteListAction = new deleteListActions();
const deleteListAssertion = new deleteListAssertions();
const boardName = "My First Board"; 
const listName = "My List";



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

When("The user clicked on the three dots",()=>{
    deleteListAction.clickOnThreeDots();
});

When("choose archive this list option",()=>{
    deleteListAction.chooseArchiveList();
});


Then("The list will be deleted successfully",()=>{
   deleteListAssertion.checkAddAListBottonIsVisible();
});


