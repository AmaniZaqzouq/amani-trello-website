/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import UpdateTemplateActions from "../../../pageObjects/updateTemplate/actions.cy";
import UpdateTemplateAssertions from "../../../pageObjects/updateTemplate/assertions.cy";

const updateTemplateAction = new UpdateTemplateActions();
const updateTemplateAssertion = new UpdateTemplateAssertions();
const dataUtils = new sharedDataUtils();
const boardName = "AmaniBoard";
const cardName ="Card Template";
const newTitle ="Updated Card Template"
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
        updateTemplateAction.openBoard(boardUrl);
           
    });

    When("Clicks on edit icon from the list",()=>{
        updateTemplateAction.openCardOptions();
            
    });

    When("Enters the new name",()=>{
        updateTemplateAction.typeNewName(newTitle);
        
        
    });

    When("Clicks on save button",()=>{
        updateTemplateAction.clickOnSaveButton();
            
    });

    Then("The template will be updated successfully",()=>{
        updateTemplateAssertion.checkCardtTitleContainValue(newTitle);
        //updateTemplateAssertion.checkNewTitleIsVisible();
        
    });

    after(()=>{
        cy.wait(3000)
        dataUtils.deleteBoard(boardId)
    });
