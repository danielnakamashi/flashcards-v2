import React, { useState } from 'react';
import NewTopicForm from './components/NewTopicForm';

const App: React.FC = () => {
  const [topics, setTopics] = useState([] as string[]);

  const handleTopicAdded = (topic: string) => {
    setTopics(topics => [topic, ...topics]);
  };

  return (
    <div>
      <NewTopicForm onTopicAdded={handleTopicAdded} />
      <ul>
        {topics.map(topic => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
