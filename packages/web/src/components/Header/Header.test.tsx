import React from 'react';
import { render, waitForElement, fireEvent, wait } from '@testing-library/react';
import Header from './Header';

const mockLogout = jest.fn();
jest.mock('../../contexts/AppContext', () => ({
  useInstances: () => ({
    userController: {
      logout: mockLogout,
      getUser: jest.fn(),
    },
    userPresenter: {
      useUser: () => ({
        displayName: 'User Name',
        email: 'email@example.com',
        photoURL: 'https://via.placeholder.com/150',
        uid: '123',
      }),
    },
  }),
}));

describe('<Header />', () => {
  it('renders user data', async () => {
    const { container, getByText } = render(<Header />);

    const image = await waitForElement(() =>
      container.querySelector('[src="https://via.placeholder.com/150"]'),
    );
    const userName = await waitForElement(() => getByText('User Name'));

    expect(image).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
  });

  it('renders logout button', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Logout')).toBeInTheDocument();
  });

  it('call logout function when user clicks logout button', async () => {
    const { getByText } = render(<Header />);

    fireEvent.click(getByText('Logout'));

    await wait(() => expect(mockLogout).toBeCalled());
  });
});
