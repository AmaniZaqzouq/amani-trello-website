Feature: Move the Template to any List

    Scenario: Validate that the user can move the template to any list
    Given The user navigate to the board
    When Clicks on edit icon from the list
    And Choose move option
    And Select the destination list
    And Clicks on move button
    Then The template will be moved successfully