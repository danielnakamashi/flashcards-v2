import React from 'react';

interface TopicsListProps {
  topics: string[];
}

const TopicsList: React.FC<TopicsListProps> = ({ topics }) => (
  <ul>
    {topics.map(topic => (
      <li key={topic}>{topic}</li>
    ))}
  </ul>
);

export default TopicsList;
