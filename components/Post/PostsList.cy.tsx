import React from 'react'
import { PostsList } from './PostsList'

describe('<PostsList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PostsList />)
  })
})