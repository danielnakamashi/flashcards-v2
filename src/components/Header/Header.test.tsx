import React from 'react';
import ReactDOM from 'react-dom';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';
import Authentication, { AuthStateChange } from '../../containers/Authentication';

it('renders without crash', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders user data', async () => {
  const authStateChange = (setter: AuthStateChange) => {
    setter({
      displayName: 'User Name',
      email: 'email@example.com',
      phoneNumber: null,
      photoURL: 'https://via.placeholder.com/150',
      providerId: 'example',
      uid: '123',
    });
  };

  const { container, getByText } = render(
    <Authentication onAuthStateChanged={authStateChange} signOut={() => {}}>
      <Header />
    </Authentication>,
  );

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
  const signOut = jest.fn();
  const { getByText } = render(
    <Authentication onAuthStateChanged={() => {}} signOut={signOut}>
      <Header />
    </Authentication>,
  );

  fireEvent.click(getByText('Logout'));

  expect(signOut).toBeCalled();
});
