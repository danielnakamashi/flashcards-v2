import React from 'react';
import { render } from '@testing-library/react';
import { Service } from '@flashcards/application';
import { MemoryRouter } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import App from './App';
import { userAuthenticatonMock, emptyUserAuthenticationMock } from './mocks/userAuthenticationMock';
import { TopicRepositoryMemory } from './mocks/TopicRepositoryMemory';

jest.mock('typeface-roboto', () => {
  return '';
});

function renderApp(userService: Service.IUserService) {
  return render(
    <AppProvider
      value={{
        userService,
        topicRepository: new TopicRepositoryMemory(),
      }}
    >
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    </AppProvider>,
  );
}

describe('<App />', () => {
  it('it should render topics page', async () => {
    const { findByLabelText } = renderApp(userAuthenticatonMock);

    expect(await findByLabelText('New Topic')).toBeInTheDocument();
  });

  it('it should render login page', async () => {
    const { findByText } = renderApp(emptyUserAuthenticationMock);

    expect(await findByText('Google')).toBeInTheDocument();
  });
});
