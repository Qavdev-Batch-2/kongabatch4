import {search} from "../fixtures/selectors.js";

describe('Testing search bar', () => {

  beforeEach(function (){

    cy.visit('https://www.konga.com/')

  });
  

  it('Search bar- User should be able to search for any item on the search bar', () => {
   
    cy.get(search.search_bar).click();
    cy.get(search.search_bar).type('books');

  })
})