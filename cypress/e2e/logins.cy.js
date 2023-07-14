/// <reference types='Cypress'/>

import {logins} from "../fixtures/selectors1.js";

describe("Testing login", function () {
    
    beforeEach(function () {
    
        cy.visit('https://www.konga.com/')
  
    });
    
    it("LOGIN - I Should be able to sign in my account with valid", function () {
        cy.get(logins.loginBtn).click()
        cy.get(logins.emailField).type('jorn1000@yopmail.com')
        cy.get(logins.passwordField).type('password123')
        cy.get(logins.signinBtn).click()

    })
    })