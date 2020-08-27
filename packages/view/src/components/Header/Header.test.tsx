import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  it('renders user data', async () => {
    const { findByTestId, findByText } = render(
      <Header
        user={{
          displayName: 'User Name',
          email: 'email@example.com',
          photoURL: 'https://via.placeholder.com/150',
          uid: '123',
        }}
        logout={jest.fn()}
      />,
    );

    const image = await findByTestId('avatar');
    const userName = await findByText('User Name');

    expect(image).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
  });

  it('renders logout button', () => {
    const { getByText } = render(
      <Header
        user={{
          displayName: 'User Name',
          email: 'email@example.com',
          photoURL: 'https://via.placeholder.com/150',
          uid: '123',
        }}
        logout={jest.fn()}
      />,
    );

    expect(getByText('Logout')).toBeInTheDocument();
  });

  it('call logout function when user clicks logout button', async () => {
    const mockLogout = jest.fn();
    const { getByText } = render(
      <Header
        user={{
          displayName: 'User Name',
          email: 'email@example.com',
          photoURL: 'https://via.placeholder.com/150',
          uid: '123',
        }}
        logout={mockLogout}
      />,
    );

    fireEvent.click(getByText('Logout'));

    await waitFor(() => expect(mockLogout).toBeCalled());
  });
});
