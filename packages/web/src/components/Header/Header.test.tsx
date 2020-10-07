import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('<Header />', () => {
  it('renders user data', async () => {
    const { findByTestId, findByText } = render(
      <MemoryRouter>
        <Header
          user={{
            displayName: 'User Name',
            email: 'email@example.com',
            photoURL: 'https://via.placeholder.com/150',
            uid: '123',
          }}
          logout={jest.fn()}
        />
      </MemoryRouter>,
    );

    const image = await findByTestId('avatar');
    const userName = await findByText('User Name');

    expect(image).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
  });

  it('Show logout button when click on user name', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header
          user={{
            displayName: 'User Name',
            email: 'email@example.com',
            photoURL: 'https://via.placeholder.com/150',
            uid: '123',
          }}
          logout={jest.fn()}
        />
      </MemoryRouter>,
    );

    fireEvent.click(getByText('User Name'));
    expect(getByText('Logout')).toBeInTheDocument();
  });

  it('call logout function when user clicks logout button', async () => {
    const mockLogout = jest.fn();
    const { getByText } = render(
      <MemoryRouter>
        <Header
          user={{
            displayName: 'User Name',
            email: 'email@example.com',
            photoURL: 'https://via.placeholder.com/150',
            uid: '123',
          }}
          logout={mockLogout}
        />
      </MemoryRouter>,
    );

    fireEvent.click(getByText('User Name'));
    fireEvent.click(getByText('Logout'));

    await waitFor(() => expect(mockLogout).toBeCalled());
  });
});
