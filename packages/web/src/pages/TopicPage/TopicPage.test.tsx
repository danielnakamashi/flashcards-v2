import React from 'react';
import { render } from '@testing-library/react';
import TopicPage from './TopicPage';
import { AppProvider } from '../../contexts/AppContext';
import { TopicRepositoryMemory } from '../../mocks/TopicRepositoryMemory';

describe('<TopicPage />', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <AppProvider value={{ topicRepository: new TopicRepositoryMemory() }}>
        <TopicPage
          user={{
            displayName: 'User Name',
            email: 'email@example.com',
            photoURL: 'https://via.placeholder.com/150',
            uid: '123',
          }}
          logout={jest.fn()}
          topicId="1"
        />
      </AppProvider>,
    );

    expect(getByTestId('topic-page')).toBeInTheDocument();
  });
});
