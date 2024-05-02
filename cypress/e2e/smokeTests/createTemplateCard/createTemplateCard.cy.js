/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import CreateTemplateActions from "../../../pageObjects/createTemplateCard/actions.cy";
import CreateTemplateAssertions from "../../../pageObjects/createTemplateCard/assersions.cy";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";


const CreateTemplateAction = new CreateTemplateActions();
const CreateTemplateAssertion = new CreateTemplateAssertions();
const dataUtils = new sharedDataUtils();

const boardName = "AmaniBoard";
const cardName ="Card Template";
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
    CreateTemplateAction.openBoard(boardUrl);
    
});

When("Clicks on edit icon from the list",()=>{
    CreateTemplateAction.openCardOptions();
    
    
});

When("Choose open card option",()=>{
    CreateTemplateAction.chooseOpenCardOption();
    
    
});

When("choose make template from the opened screen",()=>{
    CreateTemplateAction.chooseMakeTemplateOption();
    
    
});

When("Close the screen",()=>{
    CreateTemplateAction.closeScreen();
    
    
});


Then("The template will be created successfully",()=>{
    CreateTemplateAssertion.checkThisCardIsTemplateIsVisible();
    
});

after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId)
});