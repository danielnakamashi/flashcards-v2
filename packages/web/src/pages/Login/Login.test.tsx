import React from 'react';
import { render } from '@testing-library/react';
import { SignInProvider } from '@flashcards/core';
import Login from './Login';

describe('<Login />', () => {
  it('should render all providers', () => {
    const { getByText } = render(<Login />);

    Object.keys(SignInProvider).forEach(provider => {
      expect(getByText(provider)).toBeInTheDocument();
    });
  });
});
