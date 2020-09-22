import React from 'react';
import { render } from '@testing-library/react';
import { FlashCard } from './FlashCard';

describe('<FlashCard />', () => {
  it('should render', () => {
    const { getByText } = render(
      <FlashCard front="Topic Name" onRemove={() => Promise.resolve()}>
        Definition
      </FlashCard>,
    );

    expect(getByText('Topic Name')).toBeInTheDocument();
    expect(getByText('Definition')).toBeInTheDocument();
  });
});
