import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should add a new topic', () => {
  const { getByLabelText, getByText } = render(<App />);
  const topicName = 'However';

  const inputTopicName = getByLabelText('Topic name', { exact: false });
  fireEvent.change(inputTopicName, { target: { value: topicName } });

  const addTopicButton = getByText('add topic', { exact: false });
  fireEvent.click(addTopicButton);

  expect(getByText(topicName)).toBeInTheDocument();
});
