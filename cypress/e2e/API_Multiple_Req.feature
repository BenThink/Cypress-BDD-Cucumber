@API
Feature: Multiple API Requests Testing with Cypress and Cucumber

    @post
    Scenario: Validate POST Request Assertions
        When I make a "POST" request to "login" with body
            | email    | eve.holt@reqres.in |
            | password | cityslicka         |
        Then the response status should be 200
        And the response body should have "token" equal to "QpwL5tke4Pnpja7X4"

    @postError
    Scenario: Validate POST Request Error Assertions
        When I make a "POST" request to "login" with failOnStatusCode "false" and body
            | email            | eve.holt@reqres.in |
            | failOnStatusCode | false              |
        Then the response status should be 400
        And the response body should have "error" equal to "Missing password"

    @delete
    Scenario: Validate DELETE Request Assertions
        When I make a "DELETE" request to "users/2"
        Then the response status should be 204

    @put
    Scenario: Validate PUT Request with Token and Assertions
        When I make a "PUT" request to "users/2" with body
            | name | name-update           |
            | auth | bearer my-token-value |
        Then the response status should be 403
        And the response body should have "name" equal to "name-update"
