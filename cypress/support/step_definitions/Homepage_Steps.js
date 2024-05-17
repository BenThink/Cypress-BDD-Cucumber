/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Homepage_PO from "../page_objects/Homepage_PO";



const homePage = new Homepage_PO();


Given('I navigate to the WebdriverUniversity homepage', () => {
    homePage.navigateTo_Homepage()
})

// ------------------------------------------------------------------------- //

Given('I validate homepage url', () => {
    homePage.assertUrl('')
})

Given('I validate homepage title {string}', (title) => {
    homePage.assertTitle(title)
})

// ------------------------------------------------------------------------- //

When('I click on the Contact Us button', () => {
    homePage.clickOn_ContactUs_Button();
})

Then('I click on the Login Portal button', () => {
    homePage.clickOn_Login_Button();
})