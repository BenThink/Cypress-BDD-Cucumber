@API
Feature: API GET Testing with Cypress and Cucumber

    Background: Pre conditions
        When I make a "GET" request to "users/2"

    @logs
    Scenario: Validate Response Logs
        Then I should see the response logs

    @headers
    Scenario: Validate Headers
        Then the response header "content-type" should include "text/html"
        And the response header "connection" should not exist

    @statusCodes
    Scenario: Validate Status Codes
        Then the response status should be 200

        When I make a "GET" request to "users/non-exist" with failOnStatusCode "false"
        Then the response status should be 404

    @responseBody
    Scenario: Validate GET Request Assertions
        Then the response body should have "data.id" equal to 2
        * the response body should contain "data.email" with "janet.weaver@reqres.in"
        * the response body should not contain "data.last_name" with "SomeFunnyName"

