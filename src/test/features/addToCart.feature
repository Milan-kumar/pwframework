Feature: Product Test

  Background:
    Given User opens the application
    And Clicks on the login link

  Scenario Outline: Add to Cart
    And User enters the username as "<username>"
    And User enters the password as "<password>"
    When User clicks on the login button
    Then Login should be success "<username>"
    And User searches for book "<book>"
    And User adds the book to the cart
    Then Cart should get updated

    Examples:
      | username | password | book    |
      | ortoni   | Pass1234 | Roomies |
      | ortonikc | Pass1234 | Robbie  |
