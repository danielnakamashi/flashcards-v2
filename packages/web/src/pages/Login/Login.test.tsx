import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'effector';
import { User } from '@flashcards/core';
import { SignInProvider } from '@flashcards/core';
import Login from './Login';
import { AppProvider } from '../../contexts/AppContext';
import { userAuthenticatonMock } from '../../mocks/userAuthenticationMock';

describe('<Login />', () => {
  it('should render all providers', () => {
    const store = createStore<User | null>(null);
    const { getByText } = render(
      <AppProvider value={{ userService: userAuthenticatonMock }}>
        <Login loginPresenter={{ userStore: store, setUser: jest.fn(), reset: jest.fn() }} />
      </AppProvider>,
    );

    Object.keys(SignInProvider).forEach((provider) => {
      expect(getByText(provider)).toBeInTheDocument();
    });
  });

  it('should call provider method', () => {
    const store = createStore<User | null>(null);
    const { getByText } = render(
      <AppProvider value={{ userService: userAuthenticatonMock }}>
        <Login loginPresenter={{ userStore: store, setUser: jest.fn(), reset: jest.fn() }} />
      </AppProvider>,
    );

    const provider = Object.values(SignInProvider)[0];
    const providerButton = getByText(provider);
    expect(providerButton).toBeInTheDocument();

    providerButton.click();

    expect(userAuthenticatonMock.loginWithProvider).toBeCalledWith(provider);
  });
});
