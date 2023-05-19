import React from 'react';
import { PostCard } from './PostCard';

describe('<PostCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <PostCard
        post={{
          id: '1',
          date: '2021-10-10',
          title: 'title',
          description: 'description',
          videoId: 'videoId',
          mode: 'post',
        }}
        deletePost={() => {
          console.log('deletePost');
        }}
      />
    );
  });
});
