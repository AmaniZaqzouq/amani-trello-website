Feature: Delete Card

    Scenario: Validate that the user can delete an existing card
    Given The user navigate to the board
    When Clicks on edit icon from the list
    And choose archive option
    Then The card will be deleted successfully 