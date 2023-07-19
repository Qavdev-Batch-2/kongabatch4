/// <reference types='Cypress'/>

import {Login_page} from "./Pages/Login_page"; 

const logins = new  Login_page()

describe("Testing login", function () {
    
    beforeEach(function () {
    
        cy.visit('https://www.konga.com/')
  
    });
    
    it("LOGIN - I Should be able to sign in my account with valid", function () {
        logins.login_button()
        logins.enterUsername('jorn1000@yopmail.com')
        logins.enterPassword('password123')
        logins.clickLogin()

    })

    it('Login with invalid details', function(){
        logins.login_button()
        logins.enterUsername('jorn1000@yopmail.co')
        logins.enterPassword('password123')
        logins.clickLogin()
    })
    })