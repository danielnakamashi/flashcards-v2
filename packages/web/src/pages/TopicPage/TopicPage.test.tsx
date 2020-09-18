import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { TopicRepositoryMemory } from '@flashcards/service';
import TopicPage from './TopicPage';
import { AppProvider } from '../../contexts/AppContext';
import { userAuthenticatonMock } from '../../mocks/userAuthenticationMock';

function renderTopicPage() {
  return render(
    <AppProvider
      value={{
        topicRepository: new TopicRepositoryMemory(),
        userService: userAuthenticatonMock(),
      }}
    >
      <MemoryRouter initialEntries={['/1']}>
        <Route path="/:topicId">
          <TopicPage
            user={{
              displayName: 'User Name',
              email: 'email@example.com',
              photoURL: 'https://via.placeholder.com/150',
              uid: '1',
            }}
            logout={jest.fn()}
          />
        </Route>
      </MemoryRouter>
    </AppProvider>,
  );
}

describe('<TopicPage />', () => {
  it('should render topic name', async () => {
    const { findByText } = renderTopicPage();

    expect(await findByText('Topic 1')).toBeInTheDocument();
  });

  it('should add card', async () => {
    const { getByLabelText, getByText, findByText } = renderTopicPage();

    fireEvent.change(getByLabelText(/Question/), { target: { value: 'Question 1' } });
    fireEvent.change(getByLabelText(/Answer/), { target: { value: 'Answer 1' } });
    fireEvent.click(getByText('Add Card'));

    expect(await findByText('Question 1')).toBeInTheDocument();
  });
});
