Feature: Create New List

    Scenario: Validate that the user can create a new list
    #When The user clicked on add a list button
    When The user Entered the list name
    And Clicked on add list button
    Then The list will be created successfully