import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTopicForm from './NewTopicForm';

it('should call onTopicsChange with correct arguments', () => {
  const handleTopicsChange = jest.fn();
  const topicName = 'However';
  const { getByLabelText, getByText } = render(<NewTopicForm onTopicAdded={handleTopicsChange} />);

  const inputTopicName = getByLabelText('Topic Name');
  fireEvent.change(inputTopicName, { target: { value: topicName } });

  const addTopicButton = getByText('add topic', { exact: false });
  fireEvent.click(addTopicButton);

  expect(handleTopicsChange).toBeCalled();
  expect(handleTopicsChange).toBeCalledWith(topicName);
});
