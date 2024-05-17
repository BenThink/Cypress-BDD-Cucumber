@login @regression
Feature: WebdriverUniversity - Login Page

    Background: Pre conditions
        Given I navigate to the WebdriverUniversity homepage
        * I validate homepage url
        * I validate homepage title "WebDriverUniversity.com"
        Then I click on the Login Portal button

    @url_title_login
    Scenario: Validate the url & title of Login page
        And I validate login page url
        And I validate login page title

    Scenario: Validate empty Login
        When I click on the login button
        Then I should be presented with an alert box which contains text 'validation failed'

    Scenario Outline: Validate Valid & Invalid Login Credentials
        When I type a username <username>
        * I type a password <password>
        * I click on the login button
        Then I should be presented with an alert box which contains text '<expectedAlertText>'

        Examples:
            | username      | password      | expectedAlertText    |
            | webdriver     | webdriver123  | validation succeeded |
            | webdriver     | wrongpassword | validation failed    |
            | wrongusername | webdriver123  | validation failed    |

