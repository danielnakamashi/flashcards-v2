import React, { useState, useCallback } from 'react';

interface NewTopicFormProps {
  onTopicAdded: (topic: string) => void;
}

const NewTopicForm: React.FC<NewTopicFormProps> = ({ onTopicAdded }) => {
  const [topicName, setTopicName] = useState('');
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onTopicAdded(topicName);
    setTopicName('');
  };
  const handleTopicNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTopicName(event.target.value);
  }, []);

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="topicName">Topic Name</label>
      <input type="text" id="topicName" value={topicName} onChange={handleTopicNameChange} />
      <button type="submit">Add topic</button>
    </form>
  );
};

export default NewTopicForm;
