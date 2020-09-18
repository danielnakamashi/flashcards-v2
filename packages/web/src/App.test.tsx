import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Service } from '@flashcards/application';
import { TopicRepositoryMemory } from '@flashcards/service';
import { AppProvider } from './contexts/AppContext';
import App from './App';
import { userAuthenticatonMock, emptyUserAuthenticationMock } from './mocks/userAuthenticationMock';

jest.mock('typeface-roboto', () => {
  return '';
});

function renderApp(userService: Service.IUserService, initialEntry = '/') {
  return render(
    <AppProvider
      value={{
        userService,
        topicRepository: new TopicRepositoryMemory(),
      }}
    >
      <MemoryRouter initialEntries={[initialEntry]}>
        <App />
      </MemoryRouter>
    </AppProvider>,
  );
}

describe('<App />', () => {
  it('should render topics page', async () => {
    const { findByLabelText } = renderApp(userAuthenticatonMock());

    expect(await findByLabelText('New Topic', undefined, { timeout: 30000 })).toBeInTheDocument();
  });

  it('should render topic page', async () => {
    const { findByText } = renderApp(userAuthenticatonMock(), '/1');

    expect(await findByText('Topic 1')).toBeInTheDocument();
  });

  it('should render topic page when click on a topic', async () => {
    const { findByText } = renderApp(userAuthenticatonMock());

    fireEvent.click(await findByText('Topic 1'));

    expect(await findByText('Card Question 1')).toBeInTheDocument();
  });

  it('should render login page', async () => {
    const { findByText } = renderApp(emptyUserAuthenticationMock);

    expect(await findByText('Google')).toBeInTheDocument();
  });

  it('should logout', async () => {
    const { findByText } = renderApp(userAuthenticatonMock());

    const logoutButton = await findByText('Logout');
    fireEvent.click(logoutButton);

    expect(await findByText('Google')).toBeInTheDocument();
  });
});
