import React from 'react';
import { render, waitForElement, fireEvent, wait } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  it('renders user data', async () => {
    const { container, getByText } = render(
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

    const image = await waitForElement(() =>
      container.querySelector('[src="https://via.placeholder.com/150"]'),
    );
    const userName = await waitForElement(() => getByText('User Name'));

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

    await wait(() => expect(mockLogout).toBeCalled());
  });
});
