import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { TopicRepositoryMemory } from '@flashcards/service';
import TopicPage from './TopicPage';
import { AppProvider } from '../../contexts/appContext';
import { UserProvider } from '../../contexts/userContext';
import { userAuthenticatonMock } from '../../mocks/userAuthenticationMock';
import { act } from 'react-dom/test-utils';

function renderTopicPage(initialEntry = '/1') {
  return render(
    <AppProvider
      value={{
        topicRepository: new TopicRepositoryMemory(),
        userService: userAuthenticatonMock(),
      }}
    >
      <UserProvider
        value={{
          user: {
            displayName: 'User Name',
            email: 'email@example.com',
            photoURL: 'https://via.placeholder.com/150',
            uid: '1',
          },
          logout: jest.fn(),
        }}
      >
        <MemoryRouter initialEntries={[initialEntry]}>
          <Route path="/:topicId">
            <TopicPage />
          </Route>
        </MemoryRouter>
      </UserProvider>
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

  it('should remove card', async () => {
    const { findAllByTitle, getAllByTitle } = renderTopicPage('/2');

    const removeButtons = await findAllByTitle('remove');
    expect(removeButtons).toHaveLength(2);

    act(() => {
      fireEvent.click(removeButtons[0]);
    });

    await waitFor(() => expect(getAllByTitle('remove')).toHaveLength(1));
  });
});
