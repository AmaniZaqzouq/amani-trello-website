Feature: Create Template Card

    Scenario: Validate that the user can create a template card
    Given The user navigate to the board
    When Clicks on edit icon from the list
    And Choose open card option
    And choose make template from the opened screen
    And Close the screen
    Then The template will be created successfully