@contact-us @regression
Feature: WebdriverUniversity - Contact Us Page

    Background: Pre conditions
        Given I navigate to the WebdriverUniversity homepage
        When I click on the Contact Us button

    @url_title_contactUs
    Scenario: Validate the url & title of contact us page
        And I validate contact us page url
        And I validate contact us page title

    Scenario: Validate Reset Button of Contact Us Form  - Using specific data
        * I type a specific first name "Sarah"
        * I type a specific last name "Woods"
        * I type a specific email address "sarah_woods101@gmail.com"
        * I type a specific word "hello123" and number 6788 within the comment input field
        * I click on the Reset button
        Then I should see all contact data get reset

    @smoke
    Scenario Outline: Validate Valid & Invalid Contact Us page
        * I type the first name <firstName> and the last name '<lastName>'
        * I type an '<emailAddress>' and a comment '<comment>'
        * I click on the Submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress            | comment                 | message                      |
            | John      | Jones    | john_jones@gmail.com    | Hello how are you?      | Thank You for your Message!  |
            | Mia       | Carter   | mia_carter123@gmail.com | Test123 Test321         | Thank You for your Message!  |
            | Grace     | Hudson   | grace_hudson            | Do you create websites? | Error: Invalid email address |


