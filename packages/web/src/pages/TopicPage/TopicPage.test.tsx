import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
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
}

describe('<TopicPage />', () => {
  it('should render', () => {
    const { getByTestId } = renderTopicPage();

    expect(getByTestId('topic-page')).toBeInTheDocument();
  });

  it('should add card', async () => {
    const { getByLabelText, getByText, findByText } = renderTopicPage();

    fireEvent.change(getByLabelText(/Question/), { target: { value: 'Question 1' } });
    fireEvent.change(getByLabelText(/Answer/), { target: { value: 'Answer 1' } });
    fireEvent.click(getByText('Add Card'));

    expect(await findByText('Question 1')).toBeInTheDocument();
  });
});
