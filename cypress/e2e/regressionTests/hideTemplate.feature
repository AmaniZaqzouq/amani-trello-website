Feature: Hide the Template from the List

    Scenario: Validate that the user can hide template from the list
    Given The user navigate to the board
    When Clicks on edit icon from the list
    And Choose hide from list option
    Then The template will be hidden successfully