/// <reference types="cypress" />

describe('Smoke Testing', () => {
    beforeEach(() => {
      cy.visit('https://www.konga.com/')

    })

    it("Should be able to login", () => {
        cy.wait(2000)
        cy.get('._12e27_1r3kc > ._7ad32_SD12Y').click()
        cy.get('#username').type('jorn1000@yopmail.com')
        cy.get('#password').type('password123')
        cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click()

        // Should be able to Logout
        cy.get('._12e27_1r3kc > ._3b382_2WveR > ._7ad32_SD12Y').trigger('mouseenter')

    })

   
})