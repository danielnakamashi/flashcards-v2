import React from 'react';
import { render } from '@testing-library/react';
import TopicsPage from './TopicsPage';

describe('<Topics />', () => {
  it('should render all components', () => {
    const { getByTestId } = render(
      <TopicsPage
        user={{
          displayName: 'User Name',
          email: 'email@example.com',
          photoURL: 'https://via.placeholder.com/150',
          uid: '123',
        }}
        logout={jest.fn()}
      />,
    );

    expect(getByTestId('header')).toBeInTheDocument();
    expect(getByTestId('new-topic-form')).toBeInTheDocument();
    expect(getByTestId('topics-list')).toBeInTheDocument();
  });
});
