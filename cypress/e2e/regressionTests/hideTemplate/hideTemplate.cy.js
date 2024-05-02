/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import HideTemplateActions from "../../../pageObjects/hideTemplate/actions.cy";
import HideTemplateAssertions from "../../../pageObjects/hideTemplate/assertions.cy";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";

const hideTemplateAction = new HideTemplateActions();
const hideTemplateAssertion = new HideTemplateAssertions();
const dataUtils = new sharedDataUtils();

const boardName = "AmaniBoard";
const cardName ="Card Template";
const isTemplate = true;
let boardUrl, boardId, listId;

before(()=>{
    
    dataUtils.createBoard(boardName).then((resp)=>{
        boardUrl = resp.body.url ; 
        boardId =  resp.body.id ; 
    
    dataUtils.getList(boardId).then((resp)=>{
            listId = resp.body[0].id; 
    dataUtils.createTemplate(listId,cardName,isTemplate);

        });
        
        });
        cy.wait(3000);   
        cy.loginToTrello(); 
    });

    Given("The user navigate to the board",()=>{
        hideTemplateAction.openBoard(boardUrl);
           
    });

    When("Clicks on edit icon from the list",()=>{
        hideTemplateAction.openCardOptions();
               
    });

    When("Choose hide from list option",()=>{
        hideTemplateAction.chooseHideFromListOption();
               
    });

    Then("The template will be hidden successfully",()=>{
        hideTemplateAssertion.checkThatTemplateIsHidden();
               
    });

    after(()=>{
        cy.wait(3000)
        dataUtils.deleteBoard(boardId)
    });