/// <reference types='cypress'/>

import {createAcct} from '../fixtures/selectors';

describe("Testing Signup", function () {
    beforeEach(function () {

        cy.visit('https://www.konga.com/')

    });

    it('User should be able t create an account with valid details', function  () {
        cy.get(createAcct.signupButtn).click()
        cy.get(createAcct.signupBtn).click()
        cy.get(createAcct.firstnameField).type('Mike')
        cy.get(createAcct.lastnameField).type('Terry')
        cy.get(createAcct.emailField).type('testing24user@gmail.com')
        cy.get(createAcct.numberField).type('08145282363')
        cy.get(createAcct.password).type('Testing4')
        cy.get(createAcct.createBtn).click()
        cy.get(createAcct.pinField).type('8542')
        cy.get(createAcct.submitCode).click()

    })
})
