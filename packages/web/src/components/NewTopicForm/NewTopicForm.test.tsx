import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import NewTopicForm from './NewTopicForm';

describe('<NewTopicForm />', () => {
  it('should not call submitFunction when name is empty', async () => {
    const handleTopicsChange = jest.fn();
    const topicName = '';
    const { getByLabelText, getByTestId } = render(
      <NewTopicForm onTopicAdded={handleTopicsChange} />,
    );

    const inputTopicName = getByLabelText('New Topic');
    fireEvent.change(inputTopicName, { target: { value: topicName } });

    const addTopicButton = getByTestId('submit-button');
    fireEvent.click(addTopicButton);

    await wait(() => expect(handleTopicsChange).not.toBeCalled());
  });

  it('should call onTopicAdded with correct arguments', async () => {
    const onTopicAdded = jest.fn();
    const topicName = 'However';
    const { getByLabelText, getByTestId } = render(<NewTopicForm onTopicAdded={onTopicAdded} />);

    const inputTopicName = getByLabelText('New Topic');
    fireEvent.change(inputTopicName, { target: { value: topicName } });

    const addTopicButton = getByTestId('submit-button');
    fireEvent.click(addTopicButton);

    await wait(() => expect(onTopicAdded).toBeCalledWith({ name: topicName }));
  });
});
