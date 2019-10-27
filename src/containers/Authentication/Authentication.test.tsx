import React from 'react';
import { render } from '@testing-library/react';
import Authentication from './Authentication';
import '@testing-library/jest-dom/extend-expect';

const LoggedComponent = () => <div>Logged</div>;
const UnloggedComponent = () => <div>Unlogged</div>;

it('renders unauthenticated component when user is not logged in', () => {
  const { getByText } = render(<Authentication logged={LoggedComponent} unlogged={UnloggedComponent} />);

  expect(getByText('Unlogged')).toBeInTheDocument();
});

it('calls onAuthStateChanged', done => {
  const mock = jest.fn();
  const authStateChanged = () => {
    mock();
    done();
  };

  render(
    <Authentication logged={LoggedComponent} unlogged={UnloggedComponent} onAuthStateChanged={authStateChanged} />,
  );

  expect(mock).toHaveBeenCalled();
});

it('renders logged component when user is logged in', () => {
  const { getByText } = render(
    <Authentication
      logged={LoggedComponent}
      unlogged={UnloggedComponent}
      onAuthStateChanged={jest.fn(setter => setter(true))}
    />,
  );

  expect(getByText('Logged')).toBeInTheDocument();
});
