import React from 'react';
import { render } from '@testing-library/react';
import { TopicCard } from './TopicCard';

describe('<TopicCard />', () => {
  it('should render', () => {
    const { getByText } = render(<TopicCard name="Topic Name">Definition</TopicCard>);

    expect(getByText('Topic Name')).toBeInTheDocument();
    expect(getByText('Definition')).toBeInTheDocument();
  });
});
