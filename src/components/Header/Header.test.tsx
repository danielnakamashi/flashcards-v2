import React from 'react';
import ReactDOM from 'react-dom';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import { userController } from 'implementation';
import Header from './Header';
import '@testing-library/jest-dom/extend-expect';

jest.mock('effector-react', () => ({
  useStore: () => ({
    displayName: 'User Name',
    email: 'email@example.com',
    photoURL: 'https://via.placeholder.com/150',
    uid: '123',
  }),
}));
jest.mock('implementation', () => ({
  userController: {
    logout: jest.fn(),
    getUser: jest.fn(),
  },
}));

describe('<Header />', () => {
  it('renders without crash', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders user data', async () => {
    const { container, getByText } = render(<Header />);

    const image = await waitForElement(() => container.querySelector('[src="https://via.placeholder.com/150"]'));
    const userName = await waitForElement(() => getByText('User Name'));

    expect(image).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
  });

  it('renders logout button', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Logout')).toBeInTheDocument();
  });

  it('call logout function when user clicks logout button', () => {
    const { getByText } = render(<Header />);

    fireEvent.click(getByText('Logout'));

    expect(userController.logout).toBeCalled();
  });
});
