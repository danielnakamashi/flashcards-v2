import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Topic } from '@flashcards/core';
import TopicsList from './TopicsList';

describe('<TopicsList />', () => {
  it('should remove topic from list', () => {
    const handleRemoveItem = jest.fn();
    const topic1 = new Topic({ id: '1', name: 'Topic 1' });
    const topic2 = new Topic({ id: '2', name: 'Topic 2' });
    const topics = [topic1, topic2];
    const { getAllByText } = render(<TopicsList items={topics} onItemRemoved={handleRemoveItem} />);
    const removeButtons = getAllByText('Remove');
    const indexToRemove = 1;

    fireEvent.click(removeButtons[indexToRemove]);
    expect(handleRemoveItem).toBeCalled();
    expect(handleRemoveItem).toBeCalledWith(topics[indexToRemove].id);
  });
});
