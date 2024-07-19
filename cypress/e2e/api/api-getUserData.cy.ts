// cypress/tests/api/api-login.spec.ts

describe("GET /user/getUserData", () => {
  beforeEach(() => {
    cy.request(
      {
        method: 'POST', 
        failOnStatusCode: false, 
        url: 'https://fimm-api.8corp.com.br/auth/login?email=controladoria.go@fimmbra.com.br&senha=fimm123'
      }
    ).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.access_token).to.be.a('string')
      cy.wrap(response.body.access_token).as('access_token')
    })
  })

  it("get user data", () => {
      cy.get('@access_token').then((access_token) => {

      
      
      cy.request({
        method: 'GET',
        failOnStatusCode: false,
        url: 'https://fimm-api.8corp.com.br/user/getUserData',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.email).to.be.a('string')
        expect(response.body.nome).to.be.a('string')
        expect(response.body.contrato).to.be.a('string')
        expect(response.body.cidade).to.be.a('string')
        expect(response.body.funcao).to.be.a('string')
        expect(response.body.cpf).to.be.a('string')
        expect(response.body.matricula).to.be.a('string')
      })
    })
  })
})