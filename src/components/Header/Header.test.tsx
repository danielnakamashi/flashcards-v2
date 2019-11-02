import React from 'react';
import ReactDOM from 'react-dom';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import { AppProvider } from 'containers/AppContext';
import Header from './Header';
import { User } from 'types/user-context';
import '@testing-library/jest-dom/extend-expect';

it('renders without crash', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders user data', async () => {
  const user: User = {
    displayName: 'User Name',
    email: 'email@example.com',
    photoURL: 'https://via.placeholder.com/150',
    uid: '123',
  };
  const signOut = () => {};

  const { container, getByText } = render(
    <AppProvider useUser={() => ({ user, signOut })}>
      <Header />
    </AppProvider>,
  );

  const image = await waitForElement(() => container.querySelector('[src="https://via.placeholder.com/150"]'));
  const userName = await waitForElement(() => getByText('User Name'));

  expect(image).toBeInTheDocument();
  expect(userName).toBeInTheDocument();
});

it('renders logout button', () => {
  const user: User = {
    displayName: 'User Name',
    email: 'email@example.com',
    photoURL: 'https://via.placeholder.com/150',
    uid: '123',
  };
  const signOut = () => {};

  const { getByText } = render(
    <AppProvider useUser={() => ({ user, signOut })}>
      <Header />
    </AppProvider>,
  );

  expect(getByText('Logout')).toBeInTheDocument();
});

it('call logout function when user clicks logout button', () => {
  const user: User = {
    displayName: 'User Name',
    email: 'email@example.com',
    photoURL: 'https://via.placeholder.com/150',
    uid: '123',
  };
  const signOut = jest.fn();

  const { getByText } = render(
    <AppProvider useUser={() => ({ user, signOut })}>
      <Header />
    </AppProvider>,
  );

  fireEvent.click(getByText('Logout'));

  expect(signOut).toBeCalled();
});
