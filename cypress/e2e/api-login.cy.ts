
context("POST /auth/login", () => {
  it("user Login",() => {
    cy.request(
      {
        method: 'POST', 
        failOnStatusCode: false, 
        url: 'https://fimm-api.8corp.com.br/auth/login?email=controladoria.go@fimmbra.com.br&senha=fimm123'
      }
    ).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.access_token).to.be.a('string')
    })
  })


})