/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Contact_Us_PO from "../page_objects/Contact_Us_PO";



const contactUsPage = new Contact_Us_PO();


When('I validate contact us page url', function () {
    contactUsPage.validateUrl(this.data.contactUs_Path)
})

When('I validate contact us page title', function () {
    contactUsPage.validateTitle(this.data.contactUs_Title)
})

// ------------------------------------------------------------------------- //

When('I type a specific first name {string}', (firstName) => {
    contactUsPage.assertVisibility_FirstName()

    contactUsPage.type_FirstName(firstName)
})

When('I type a specific last name {string}', (lastName) => {
    contactUsPage.assertVisibility_LastName()

    contactUsPage.type_LastName(lastName)
})

When('I type a specific email address {string}', (email) => {
    contactUsPage.assertVisibility_Email()

    contactUsPage.type_EmailAddress(email)
})

When('I type a specific word {string} and number {int} within the comment input field', (word, number) => {
    contactUsPage.assertVisibility_Comment

    contactUsPage.type_Comment(word + ' ' + number)
})

// ------------------------------------------------------------------------- //

When('I click on the Reset button', () => {
    contactUsPage.assertVisibility_ResetButton

    contactUsPage.clickOn_Reset_Button()
})

Then('I should see all contact data get reset', () => {
    contactUsPage.validate_Reset_Button()
})

// ------------------------------------------------------------------------- //

When('I click on the Submit button', () => {
    contactUsPage.assertVisibility_SubmitButton

    contactUsPage.clickOn_Submit_Button()
})

// ------------------------------------------------------------------------- //

When('I type the first name {word} and the last name {string}', (firstName, lastName) => {
    contactUsPage.type_FirstName(firstName)
    contactUsPage.type_LastName(lastName)
})

When('I type an {string} and a comment {string}', (email, comment) => {
    contactUsPage.type_EmailAddress(email)
    contactUsPage.type_Comment(comment)
})

Then('I should be presented with header text {string}', (message) => {
    contactUsPage.validate_Submission_Header(message)
})