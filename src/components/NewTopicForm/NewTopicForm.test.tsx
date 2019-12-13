import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTopicForm from './NewTopicForm';

describe('<NewTopicForm />', () => {
  it('should call submitFunction with correct arguments', () => {
    const handleTopicsChange = jest.fn();
    const topicName = 'However';
    const { getByLabelText, getByText } = render(<NewTopicForm onTopicAdded={handleTopicsChange} />);

    const inputTopicName = getByLabelText('Topic Name');
    fireEvent.change(inputTopicName, { target: { value: topicName } });

    const addTopicButton = getByText('Add topic');
    fireEvent.click(addTopicButton);

    expect(handleTopicsChange).toBeCalled();
    expect(handleTopicsChange).toBeCalledWith(topicName);
  });

  it('should not call submitFunction when name is empty', () => {
    const handleTopicsChange = jest.fn();
    const topicName = '';
    const { getByLabelText, getByText } = render(<NewTopicForm onTopicAdded={handleTopicsChange} />);

    const inputTopicName = getByLabelText('Topic Name');
    fireEvent.change(inputTopicName, { target: { value: topicName } });

    const addTopicButton = getByText('Add topic');
    fireEvent.click(addTopicButton);

    expect(handleTopicsChange).not.toBeCalled();
  });
});
