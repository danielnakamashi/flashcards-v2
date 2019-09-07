import React, { useState, useCallback } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

interface NewTopicFormProps {
  onTopicAdded: (topic: string) => void;
}

const NewTopicForm: React.FC<NewTopicFormProps> = ({ onTopicAdded }) => {
  const [topicName, setTopicName] = useState('');
  const handleFormSubmit = useCallback(
    (event: React.FormEvent) => {
      const sanitizedTopicName = topicName.trim();

      event.preventDefault();

      if (sanitizedTopicName.length > 0) {
        onTopicAdded(topicName);
        setTopicName('');
      }
    },
    [onTopicAdded, topicName],
  );
  const handleTopicNameChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTopicName(event.target.value);
  }, []);

  return (
    <form onSubmit={handleFormSubmit}>
      <InputLabel htmlFor="topicName">Topic Name</InputLabel>
      <Input type="text" id="topicName" value={topicName} onChange={handleTopicNameChange} />
      <Button type="submit">Add topic</Button>
    </form>
  );
};

export default NewTopicForm;
