import React from 'react';
import { render } from '@testing-library/react';
import TopicsPage from './TopicsPage';
import { topicsMock } from '../../mocks';

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
    topicsPresenter: {
      useTopics: () => topicsMock,
    },
    topicController: {
      addTopic: () => {},
      showTopics: () => {},
    },
  }),
}));

describe('<Topics />', () => {
  it('should render all components', () => {
    const { getByTestId } = render(<TopicsPage />);

    expect(getByTestId('header')).toBeInTheDocument();
    expect(getByTestId('new-topic-form')).toBeInTheDocument();
    expect(getByTestId('topics-list')).toBeInTheDocument();
  });
});
