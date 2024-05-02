import { APIKey , APIToken } from "../../support/constants.cy"
class sharedDataUtils{

    createBoard = (boardName)=>{
        return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`);
    }

    getList = (boardId)=>{
       return cy.request("GET",`https://api.trello.com/1/boards/${boardId}/lists?key=${APIKey}&token=${APIToken}`);
        

        
    }

    createCard = (listId,cardName)=>{
        return cy.request("POST",`https://api.trello.com/1/cards?name=${cardName}&idList=${listId}&key=${APIKey}&token=${APIToken}`);
    }

    createTemplate(listId,cardName,isTemplate){
        return cy.request({
            method: "POST",
            url: `https://api.trello.com/1/cards?name=${cardName}&idList=${listId}&key=${APIKey}&token=${APIToken}`,
            header: "Accept: application/json",
            body: {name: cardName, isTemplate: isTemplate},
    });
}

    deleteBoard = (boardId)=>{
        return cy.request("DELETE",`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`);
    }
}
export default sharedDataUtils;