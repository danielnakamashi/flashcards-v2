import React from 'react';
import { render } from '@testing-library/react';
import { NewCardForm } from './NewCardForm';

describe('<NewCardForm />', () => {
  it('should render', () => {
    const { getByLabelText, getByText } = render(<NewCardForm />);

    expect(getByLabelText(/Question/)).toBeInTheDocument();
    expect(getByLabelText(/Answer/)).toBeInTheDocument();
    expect(getByText('Add Card')).toBeInTheDocument();
  });
});
