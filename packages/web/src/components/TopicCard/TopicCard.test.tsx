import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { TopicCard } from './TopicCard';

describe('<TopicCard />', () => {
  it('should render', () => {
    const { getByText } = render(
      <TopicCard topicId="1" onRemove={() => {}}>
        Topic Name
      </TopicCard>,
    );

    expect(getByText('Topic Name')).toBeInTheDocument();
  });

  it('should call onRemove with args', () => {
    const mockOnRemove = jest.fn();
    const { getByText } = render(
      <TopicCard topicId="1" onRemove={mockOnRemove}>
        Topic Name
      </TopicCard>,
    );

    fireEvent.click(getByText('Remove'));

    expect(mockOnRemove).toBeCalledWith('1');
  });
});
