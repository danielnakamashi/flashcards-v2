import React from 'react';
import { render } from '@testing-library/react';
import TopicsList from './TopicsList';
import '@testing-library/jest-dom';

it('should remove topic from list', () => {
  const { getByText } = render(<TopicsList topics={['However']} />);
});
