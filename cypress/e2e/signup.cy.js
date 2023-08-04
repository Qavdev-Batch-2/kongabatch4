/// <reference types="cypress" />

import {signup,login} from "../fixtures/selectors.js"

describe("Testing Signup", () => {
  beforeEach( ()=> {
  cy.visit('https://www.konga.com')

})

  it.skip("Should be able to signup", () => {
    cy.wait(2000)
    cy.get(signup.signupBtn,{pageLoadTimeout: 8000}).click()
    cy.get(signup.iDonthaveAnAccount).click()
    cy.get(signup.firstnameField).type('John')
    cy.get(signup.lastnameField).type('Billion')
    cy.get(signup.emailField).type('jorn1000@yopmail.com')
    cy.get(signup.mobileField).type('08022740243')
    cy.get(signup.passwordField).type('password123')
    cy.get(signup.showIcon).click()
    cy.get(signup.showIcon).click()
    cy.get(signup.createAccountBtn).click()
    cy.wait(2000)
    cy.get(signup.pin, {pageLoadTimeout: 8000}).type('0020')

    let message ='signup successfully'
    expect(message).to.be.eq('signup successfully')

})

  it("Should not be able to login with incorrect email", () => {
    cy.wait(2000)
    cy.get(login.loginBtn).click()
    cy.get(login.emailField).type('jorn1000@gmail.com')
    cy.wait(1000)
    cy.get(login.passwordField).type('password123')
    cy.get(login.loginButton).click()
})
})