import React from 'react';
import { render } from '@testing-library/react';
import { Topic } from '@flashcards/entities';
import { TopicsPage } from './TopicsPage';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../contexts/AppContext', () => ({
  useInstances: () => ({
    userController: {
      logout: jest.fn(),
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

describe('<Topics />', () => {
  it('should render all components', () => {
    const topics = [
      new Topic({ id: '1', name: 'Topic 1' }),
      new Topic({ id: '2', name: 'Topic 2' }),
    ];
    const { getByTestId } = render(<TopicsPage topics={topics} addTopic={() => {}} />);

    expect(getByTestId('header')).toBeInTheDocument();
    expect(getByTestId('new-topic-form')).toBeInTheDocument();
    expect(getByTestId('topics-list')).toBeInTheDocument();
  });
});
