Feature: Update the Name of the Template 

    Scenario: Validate that the user can update the template name
    Given The user navigate to the board
    When Clicks on edit icon from the list
    And Enters the new name
    And Clicks on save button
    Then The template will be updated successfully