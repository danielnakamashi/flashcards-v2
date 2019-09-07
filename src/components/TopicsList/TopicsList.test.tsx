import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TopicsList from './TopicsList';
import '@testing-library/jest-dom';

it('should remove topic from list', () => {
  const handleRemoveItem = jest.fn();
  const { getAllByText } = render(<TopicsList items={['Topic 1', 'Topic 2']} onItemRemoved={handleRemoveItem} />);
  const removeButtons = getAllByText('remove', { exact: false });
  const indexToRemove = 1;

  fireEvent.click(removeButtons[indexToRemove]);
  expect(handleRemoveItem).toBeCalled();
  expect(handleRemoveItem).toBeCalledWith(indexToRemove);
});
