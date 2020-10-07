import React from 'react';
import { render } from '@testing-library/react';
import { SignInProvider } from '@flashcards/core';
import { TopicRepositoryMemory } from '@flashcards/service';
import { AppProvider } from '../../contexts/appContext';
import { userAuthenticatonMock } from '../../mocks/userAuthenticationMock';
import Login from './Login';

describe('<Login />', () => {
  it('should render all providers', () => {
    const { getByText } = render(
      <AppProvider
        value={{
          userService: userAuthenticatonMock(),
          topicRepository: new TopicRepositoryMemory(),
        }}
      >
        <Login />
      </AppProvider>,
    );

    Object.keys(SignInProvider).forEach((provider) => {
      expect(getByText(provider)).toBeInTheDocument();
    });
  });

  it('should call provider method', () => {
    const userService = userAuthenticatonMock();
    const { getByText } = render(
      <AppProvider value={{ userService, topicRepository: new TopicRepositoryMemory() }}>
        <Login />
      </AppProvider>,
    );

    const provider = Object.values(SignInProvider)[0];
    const providerButton = getByText(provider);
    expect(providerButton).toBeInTheDocument();

    providerButton.click();

    expect(userService.loginWithProvider).toBeCalledWith(provider);
  });
});
