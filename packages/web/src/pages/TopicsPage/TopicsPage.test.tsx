import React from 'react';
import { render } from '@testing-library/react';
import TopicsPage from './TopicsPage';
import { AppProvider } from '../../contexts/AppContext';
import { TopicRepositoryMemory } from '../../mocks/TopicRepositoryMemory';

describe('<Topics />', () => {
  it('should render all components', async () => {
    const { findByTestId } = render(
      <AppProvider value={{ topicRepository: new TopicRepositoryMemory() }}>
        <TopicsPage
          user={{
            displayName: 'User Name',
            email: 'email@example.com',
            photoURL: 'https://via.placeholder.com/150',
            uid: '123',
          }}
          logout={jest.fn()}
        />
      </AppProvider>,
    );

    expect(await findByTestId('header')).toBeInTheDocument();
    expect(await findByTestId('new-topic-form')).toBeInTheDocument();
    expect(await findByTestId('topics-list')).toBeInTheDocument();
  });
});
