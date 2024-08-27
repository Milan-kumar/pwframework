Feature: User Authentication Tests

  Background:
    Given User opens the application
    And Clicks on the login link

  Scenario: Login should be success
    And User enters the username as "ortoni"
    And User enters the password as "Pass1234"
    When User clicks on the login button
    Then Login should be success "ortoni"
