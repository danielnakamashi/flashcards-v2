import React from 'react';

interface TopicsListProps {
  items: string[];
  onItemRemoved: (index: number) => void;
}

const TopicsList: React.FC<TopicsListProps> = ({ items, onItemRemoved }) => {
  const handleRemoveClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = event.target as HTMLButtonElement;
    const { index } = button.dataset;

    if (index) {
      onItemRemoved(parseInt(index, 10));
    }
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={item}>
          {item}
          <button onClick={handleRemoveClick} data-index={index}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TopicsList;
