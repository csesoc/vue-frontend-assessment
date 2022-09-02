describe('Test Suite', () => {
  beforeEach(() => cy.visit('/'))

  it('Logs in with missing username and password', () => {
    cy.get('#login').click()
    cy.get('#login-message').should('have.text', 'Login Failed')
  })

  it('Logs in with missing username', () => {
    cy.get('#password').type('test_password')
    cy.get('#login').click()
    cy.get('#login-message').should('have.text', 'Login Failed')
  })

  it('Logs in with missing password', () => {
    cy.get('#username').type('test_username')
    cy.get('#login').click()
    cy.get('#login-message').should('have.text', 'Login Failed')
  })

  const login = () => {
    cy.get('#username').type('test_username')
    cy.get('#password').type('test_password')
    cy.get('#login').click()
  }

  it('Logs in with username and password', () => {
    login()
    cy.get('#login-message').should('have.text', 'Login Successful')
  })

  it('Logs in successfully and visits the profile page', () => {
    login()
    cy.get('#modalButton').click()
    cy.url().should('contain', '/profile')
  })

  it('Validates profile external links', () => {
    cy.visit('/profile')
    cy.get('a').each(link => {
      const message = link.text();
      expect(link, message).to.have.attr('href').not.contain('undefined');
    });
  })
})
