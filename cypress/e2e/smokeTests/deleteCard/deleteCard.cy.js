/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import DeleteCardActions from "../../../pageObjects/deleteCard/actions.cy";
import DeleteCardAssertions from "../../../pageObjects/deleteCard/assersions.cy";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";


const deleteCardAction = new DeleteCardActions();
const deleteCardAssertion = new DeleteCardAssertions();
const dataUtils = new sharedDataUtils();

const boardName = "AmaniBoard";
const cardName ="My Card";
let boardUrl, boardId, listId;

before(()=>{
    
    dataUtils.createBoard(boardName).then((resp)=>{
        boardUrl = resp.body.url ; 
        boardId =  resp.body.id ; 
    
    dataUtils.getList(boardId).then((resp)=>{
            listId = resp.body[0].id; 
    dataUtils.createCard(listId,cardName);

        });
        
        });
        cy.wait(3000);   
        cy.loginToTrello(); 
    });
        


Given("The user navigate to the board",()=>{
    deleteCardAction.openBoard(boardUrl);
    
});

When("Clicks on edit icon from the list",()=>{
    deleteCardAction.openCardOptions();
    
});

When("choose archive option",()=>{
    deleteCardAction.chooseArchiveOption();
    
});

Then("The card will be deleted successfully",()=>{
    deleteCardAssertion.checkCardInArchivedItems(cardName);
    deleteCardAssertion.checkThatCardIsDeleted();
    
});


after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId)
});