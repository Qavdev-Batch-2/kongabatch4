/// <reference types='Cypress'/>

import {Forgot} from "./Pages/Login_page";

const Forgot_PD = new Forgot()

describe('Testing Forgotten password', function(){

    this.beforeEach(function(){

        cy.visit('https://www.konga.com/')
    });

    it('Forgotten Password', function(){
        Forgot_PD.login_button()
        Forgot_PD.Forgotten_pwd()
        Forgot_PD.entermail('teestylez4@gmail.com')
        Forgot_PD.Submit_button()
        cy.wait(20000)
    })


    it('Forgotten password with an unresgistered email', function(){
        Forgot_PD.login_button()
        Forgot_PD.Forgotten_pwd()
        Forgot_PD.entermail('teestylez@gmail.com')
        Forgot_PD.Submit_button()
    })

})


