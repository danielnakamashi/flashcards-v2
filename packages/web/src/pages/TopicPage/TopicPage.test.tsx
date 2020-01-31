import React from 'react';
import { render } from '@testing-library/react';
import TopicPage from './TopicPage';

describe('<TopicPage />', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <TopicPage
        user={{
          displayName: 'User Name',
          email: 'email@example.com',
          photoURL: 'https://via.placeholder.com/150',
          uid: '123',
        }}
        logout={jest.fn()}
        topicId="1"
      />,
    );

    expect(getByTestId('topic-page')).toBeInTheDocument();
  });
});
