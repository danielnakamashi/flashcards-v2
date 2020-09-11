import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TopicPage from './TopicPage';
import { AppProvider } from '../../contexts/AppContext';
import { TopicRepositoryMemory } from '../../mocks/TopicRepositoryMemory';

describe('<TopicPage />', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <AppProvider value={{ topicRepository: new TopicRepositoryMemory() }}>
        <MemoryRouter initialEntries={['/1']}>
          <TopicPage
            user={{
              displayName: 'User Name',
              email: 'email@example.com',
              photoURL: 'https://via.placeholder.com/150',
              uid: '123',
            }}
            logout={jest.fn()}
          />
        </MemoryRouter>
      </AppProvider>,
    );

    expect(getByTestId('topic-page')).toBeInTheDocument();
  });
});
