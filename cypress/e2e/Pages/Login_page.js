export class Login_page{

    login_button(){
        cy.get('._12e27_1r3kc > ._7ad32_SD12Y').click()
    }

    enterUsername (username){
        cy.get('#username').type(username)
    }
    
    enterPassword (password){
        cy.get('#password').type(password)
    }

    clickLogin(){
        cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click()
    }
}

export class Forgot{
    login_button(){
        cy.get('._12e27_1r3kc > ._7ad32_SD12Y').click()
    }

    Forgotten_pwd(){
        cy.get('._65514_3A2Fa').click()
    }

    entermail(email){
        cy.get('#email').type(email)
    }

    Submit_button(){
        cy.get('.f0828_35LxM > ._2aac2_3bwnD > ._0a08a_3czMG').click()
    }
}
   

