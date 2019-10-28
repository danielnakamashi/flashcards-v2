import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import Authentication, { UserContext, AuthStateChange } from './Authentication';
import '@testing-library/jest-dom/extend-expect';

it('renders unauthenticated component when user is not logged in', () => {
  const Anonimous: React.FC = () => {
    const user = React.useContext(UserContext);
    expect(user).toBeNull();

    return null;
  };

  render(
    <Authentication onAuthStateChanged={() => {}} signOut={() => {}}>
      <Anonimous />
    </Authentication>,
  );
});

it.only('renders authenticated component when user is logged', async () => {
  const Authenticated: React.FC = () => {
    const { user } = React.useContext(UserContext);

    return <div>{user && user.email}</div>;
  };

  const { getByText } = render(
    <Authentication
      onAuthStateChanged={(setter: AuthStateChange) => setter({ email: 'example@email.com' })}
      signOut={() => {}}
    >
      <Authenticated />
    </Authentication>,
  );

  const email = await waitForElement(() => getByText('example@email.com'));

  expect(email).toBeInTheDocument();
});

it('calls onAuthStateChanged', done => {
  const mock = jest.fn();
  const authStateChanged = () => {
    mock();
    done();
  };

  render(
    <Authentication onAuthStateChanged={authStateChanged} signOut={() => {}}>
      <div>Teste</div>
    </Authentication>,
  );

  expect(mock).toHaveBeenCalled();
});
