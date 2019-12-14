import React from 'react';
import { render } from '@testing-library/react';
import { Topic } from 'core/entities/Topic';
import TopicsPage from './TopicsPage';
import '@testing-library/jest-dom/extend-expect';

describe('<Topics />', () => {
  const topics = [new Topic({ id: '1', name: 'Topic 1' }), new Topic({ id: '2', name: 'Topic 2' })];

  it('should render all components', () => {
    const { getByTestId } = render(<TopicsPage topics={topics} />);

    expect(getByTestId('header')).toBeInTheDocument();
    expect(getByTestId('new-topic-form')).toBeInTheDocument();
    expect(getByTestId('topics-list')).toBeInTheDocument();
  });
});
