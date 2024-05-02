/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import MoveTemplateActions from "../../../pageObjects/moveTemplate/actions.cy";
import MoveTemplateAssertions from "../../../pageObjects/moveTemplate/assertions.cy";
import sharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";

const moveTemplateAction = new MoveTemplateActions();
const moveTemplateAssertion = new MoveTemplateAssertions();
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
        moveTemplateAction.openBoard(boardUrl);
           
    });

    When("Clicks on edit icon from the list",()=>{
        moveTemplateAction.openCardOptions();
        
           
    });

    When("Choose move option",()=>{
        moveTemplateAction.chooseMoveOption();
           
    });

    When("Select the destination list",()=>{
        moveTemplateAction.selectTheDestinationList();
               
    });

    When("Clicks on move button",()=>{
        moveTemplateAction.clickOnMoveButton();
        
           
    });

    Then("The template will be moved successfully",()=>{
        moveTemplateAssertion.checkThatTemplateIsNotExistInPrevList();
        moveTemplateAssertion.checkThatTemplateIsExistInCurrentList();
               
    });

    after(()=>{
        cy.wait(3000)
        dataUtils.deleteBoard(boardId)
    });
