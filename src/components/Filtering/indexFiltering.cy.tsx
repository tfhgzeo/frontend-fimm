import React from 'react'
import Filtering from './index'
// import 'tailwindcss/dist/tailwind.min.css'


describe('<Filtering />', () => {
  // const [refresh, setRefresh] = React.useState(0)
  it('solicitacoes', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <div className='flex flex-1 h-[100vh] w-[100vw] justify-center items-center'>
        <Filtering screen="epi" />
      </div>
    )
  })

  it('epi', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <div className='flex flex-1 h-[100vh] w-[100vw] justify-center items-center'>
        <Filtering screen='epi' />
      </div>
    )
  })

  it('solicitacoesEquip', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <div className='flex flex-1 h-[100vh] w-[100vw] justify-center items-center'>
        <Filtering screen='solicitacoesEquip' />
      </div>
    )
  })

  it('funcionarios', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <div className='flex flex-1 h-[100vh] w-[100vw] justify-center items-center'>
        <Filtering screen='funcionarios' />
      </div>
    )
  })
})