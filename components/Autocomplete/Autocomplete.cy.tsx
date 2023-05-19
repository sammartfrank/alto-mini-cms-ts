import React from 'react';
import { Autocomplete } from './Autocomplete';

describe('<Autocomplete />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Autocomplete />);
  });
});
