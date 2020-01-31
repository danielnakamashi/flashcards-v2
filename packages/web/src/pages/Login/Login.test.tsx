import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'effector';
import { User } from '@flashcards/core';
import { SignInProvider } from '@flashcards/core';
import Login from './Login';

describe('<Login />', () => {
  it('should render all providers', () => {
    const store = createStore<User | null>(null);
    const { getByText } = render(
      <Login loginPresenter={{ userStore: store, setUser: jest.fn() }} />,
    );

    Object.keys(SignInProvider).forEach(provider => {
      expect(getByText(provider)).toBeInTheDocument();
    });
  });
});
