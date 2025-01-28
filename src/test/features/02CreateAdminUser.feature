Feature: Create Admin User
  @web
  Scenario: Create Admin User

    Given user visits the web page
    When user enter username
    And user enter password
    Then user clicks on signIn Button
    And verify user is logged in
    When user clicks on AdminBtn
    Then user clicks on AddUserBtn
    And user selects user role as Admin
    And user selects EmployeeName
    And user selects status
    And user enters username
    And user enters password
    And user clicks on saveBtn
    Then verify user is created