Feature: API Testing RestBooker

  Scenario: API Testing RestBooker Get Request
    Given user makes a GET request to RestBooker API
    When user receives a response
    Then user verifies the status code is 200
    And user verifies the response body contains "bookingid"