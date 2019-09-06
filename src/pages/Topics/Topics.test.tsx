import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Topics from './Topics';
import '@testing-library/jest-dom/extend-expect';

it('should add a new topic', () => {
  const { getByLabelText, getByText } = render(<Topics />);
  const topicName = 'However';

  const inputTopicName = getByLabelText('Topic name', { exact: false });
  fireEvent.change(inputTopicName, { target: { value: topicName } });

  const addTopicButton = getByText('add topic', { exact: false });
  fireEvent.click(addTopicButton);

  expect(getByText(topicName)).toBeInTheDocument();
});
