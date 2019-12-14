import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import NewTopicForm from './NewTopicForm';

describe('<NewTopicForm />', () => {
  it('should call onTopicAdded with correct arguments', async () => {
    const onTopicAdded = jest.fn();
    const topicName = 'However';
    const { getByLabelText, getByText } = render(<NewTopicForm onTopicAdded={onTopicAdded} />);

    const inputTopicName = getByLabelText('Topic Name');
    fireEvent.change(inputTopicName, { target: { value: topicName } });

    const addTopicButton = getByText('Add topic');
    fireEvent.click(addTopicButton);

    await wait(() => expect(onTopicAdded).toBeCalledWith({ name: topicName }));
  });

  it('should not call submitFunction when name is empty', async () => {
    const handleTopicsChange = jest.fn();
    const topicName = '';
    const { getByLabelText, getByText } = render(<NewTopicForm onTopicAdded={handleTopicsChange} />);

    const inputTopicName = getByLabelText('Topic Name');
    fireEvent.change(inputTopicName, { target: { value: topicName } });

    const addTopicButton = getByText('Add topic');
    fireEvent.click(addTopicButton);

    await wait(() => expect(handleTopicsChange).not.toBeCalled());
  });
});
