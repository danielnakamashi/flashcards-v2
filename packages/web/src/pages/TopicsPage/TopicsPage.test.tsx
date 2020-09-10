import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import TopicsPage from './TopicsPage';
import { AppProvider } from '../../contexts/AppContext';
import { TopicRepositoryMemory } from '@flashcards/service';

describe('<TopicsPage />', () => {
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

  it('should add topic', async () => {
    const { findByLabelText, findByText } = render(
      <AppProvider value={{ topicRepository: new TopicRepositoryMemory() }}>
        <TopicsPage
          user={{
            displayName: 'User Name',
            email: 'email@example.com',
            photoURL: 'https://via.placeholder.com/150',
            uid: '1',
          }}
          logout={jest.fn()}
        />
      </AppProvider>,
    );

    const inputText = await findByLabelText('New Topic');
    act(() => {
      fireEvent.change(inputText, { target: { value: 'Sample topic 2' } });
    });

    const addTopicButton = await findByText('Add topic');
    act(() => {
      fireEvent.click(addTopicButton);
    });

    expect(await findByText('Sample topic 2')).toBeInTheDocument();
  });
});
