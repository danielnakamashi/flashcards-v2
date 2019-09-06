import React, { useState } from 'react';
import NewTopicForm from '../../components/NewTopicForm';
import TopicsList from '../../components/TopicsList';

const Topics: React.FC = () => {
  const [topics, setTopics] = useState([] as string[]);

  const handleTopicAdded = (topic: string) => {
    setTopics(topics => [topic, ...topics]);
  };

  return (
    <div>
      <NewTopicForm onTopicAdded={handleTopicAdded} />
      <TopicsList topics={topics} />
    </div>
  );
};

export default Topics;
