import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TopicRepositoryMemory } from '@flashcards/service';
import TopicPage from './TopicPage';
import { AppProvider } from '../../contexts/AppContext';

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

  it('should add card', async () => {
    const { getByLabelText, getByText, findByText } = render(
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

    fireEvent.change(getByLabelText(/Question/), { target: { value: 'Question 1' } });
    fireEvent.change(getByLabelText(/Answer/), { target: { value: 'Answer 1' } });
    fireEvent.click(getByText('Add Card'));

    expect(await findByText('Question 1')).toBeInTheDocument();
  });
});
