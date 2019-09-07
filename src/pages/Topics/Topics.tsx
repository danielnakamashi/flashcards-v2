import React, { useState } from 'react';
import NewTopicForm from '../../components/NewTopicForm';
import TopicsList from '../../components/TopicsList';

interface TopicsProps {
  items?: string[];
}

const Topics: React.FC<TopicsProps> = ({ items = [] }) => {
  const [topics, setTopics] = useState(items);

  const handleTopicAdded = (topic: string) => {
    setTopics(topics => [topic, ...topics]);
  };

  const handleRemoveItem = (index: number) => {
    setTopics(topics => {
      let topicsMutable = [...topics];
      topicsMutable.splice(index, 1);

      return topicsMutable;
    });
  };

  return (
    <div>
      <NewTopicForm onTopicAdded={handleTopicAdded} />
      <TopicsList items={topics} onItemRemoved={handleRemoveItem} />
    </div>
  );
};

export default Topics;
