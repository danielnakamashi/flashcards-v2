import React from 'react';
import { render } from '@testing-library/react';
import { FlashCard } from './FlashCard';

describe('<FlashCard />', () => {
  it('should render', () => {
    const { getByText } = render(<FlashCard name="Topic Name">Definition</FlashCard>);

    expect(getByText('Topic Name')).toBeInTheDocument();
    expect(getByText('Definition')).toBeInTheDocument();
  });
});
