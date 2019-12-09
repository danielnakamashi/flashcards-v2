import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Topics from './Topics';
import { useStore } from 'effector-react';
import { Topic } from 'core/entities/Topic';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../instances', () => ({
  userController: {
    getUser: () => {},
  },
  topicController: {
    showTopics: () => {},
    addTopic: () => {},
  },
  userStore: 'userStore',
  topicsStore: 'topicsStore',
}));
jest.mock('effector-react');
// @ts-ignore
useStore.mockImplementation((storeName: string) => {
  switch (storeName) {
    case 'userStore':
      return {
        displayName: 'User Name',
        email: 'email@example.com',
        photoURL: 'https://via.placeholder.com/150',
        uid: '123',
      };
    case 'topicsStore':
      return [new Topic({ id: '1', name: 'Topic 1' }), new Topic({ id: '2', name: 'Topic 2' })];
    default:
      return null;
  }
});

describe('<Topics />', () => {
  it('should not add equal topic name', () => {
    const { getByLabelText, getByText, queryAllByTestId } = render(<Topics />);

    const inputTopicName = getByLabelText('Topic name', { exact: false });
    fireEvent.change(inputTopicName, { target: { value: 'Topic 1' } });

    const addTopicButton = getByText('add topic', { exact: false });
    fireEvent.click(addTopicButton);

    expect(queryAllByTestId('topicsListItem').length).toEqual(2);
  });
});
