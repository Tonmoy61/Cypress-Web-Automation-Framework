
describe('automation single flow', () => {
  it('visiting automationpractice.com', () => {
    cy.visit('http://automationpractice.com/index.php')
  })
  it("selecting product",() => {
    cy.get('.sf-menu > :nth-child(3) > a').click();
    cy.get('.right-block > h5 > .product-name').click();
    cy.get('#color_14').click();
    cy.get('#quantity_wanted').clear().type('4');
    cy.get('#group_1').select('M');
    cy.get('.exclusive > span').click();
    cy.get('.button-medium > span',).wait(5000).click();
    cy.get('span.navigation_page').should('have.text', 'Your shopping cart');
 
  })
  it("searching product",()=>{
    cy.get('#search_query_top').clear().type('Evening Dresses, Printed Dress').wait(5000).click();
    })
    it("sign in with correct email and password",()=>{
    cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account');
    cy.get('#email').clear().type('tonmoy6060@gmail.com');
    cy.wait(5000);
    cy.get('#passwd').clear().wait(8000).type('Tonmoy5050');
    cy.wait(5000);
    cy.get('#SubmitLogin > span').click();
    cy.wait(5000);

      
    })
    it("sign in with correct email and wrong password",()=>{
      cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account');
      cy.get('#email').clear().type('tonmoy6060@gmail.com');
      cy.wait(5000);
      cy.get('#passwd').clear().wait(5000).type('tonmoy5050');
      cy.wait(5000);
      cy.get('#SubmitLogin > span').click();
      cy.wait(5000);
      

    })
  })

