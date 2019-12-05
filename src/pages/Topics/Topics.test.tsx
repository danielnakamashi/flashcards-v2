import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Topics from './Topics';
import '@testing-library/jest-dom/extend-expect';

describe.skip('<Topics />', () => {
  it('should add a new topic', () => {
    const { getByLabelText, getByText } = render(<Topics />);
    const topicName = 'However';

    const inputTopicName = getByLabelText('Topic name', { exact: false });
    fireEvent.change(inputTopicName, { target: { value: topicName } });

    const addTopicButton = getByText('add topic', { exact: false });
    fireEvent.click(addTopicButton);

    expect(getByText(topicName)).toBeInTheDocument();
  });

  it('should remove a topic', () => {
    const items = ['Topic 1', 'Topic 2'];
    const { getAllByText, queryByText } = render(<Topics items={items} />);
    const removeButtons = getAllByText('remove', { exact: false });
    const indexToRemove = 1;

    fireEvent.click(removeButtons[indexToRemove]);
    expect(queryByText(items[indexToRemove])).toBeNull();
  });

  it('should add nothing when submit an empty topic', () => {
    const items = ['Topic 1', 'Topic 2'];
    const { getByText, queryAllByTestId } = render(<Topics items={items} />);

    const addTopicButton = getByText('add topic', { exact: false });
    fireEvent.click(addTopicButton);

    expect(queryAllByTestId('topicsListItem').length).toEqual(2);
  });

  it('should not add more than one item each time', () => {
    const items = ['a', 'b', 'c', 'd'];
    const { getByLabelText, getByText, queryAllByTestId } = render(<Topics items={items} />);

    const inputTopicName = getByLabelText('Topic name', { exact: false });
    fireEvent.change(inputTopicName, { target: { value: 'b' } });

    const addTopicButton = getByText('add topic', { exact: false });
    fireEvent.click(addTopicButton);

    expect(queryAllByTestId('topicsListItem').length).toEqual(5);
  });
});
