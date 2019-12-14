import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { Topic } from 'core/entities/Topic';
import { AddTopicParams } from 'core/controllers/TopicController';
import { userStore, userController, topicController, topicsStore } from 'implementation';

export interface TopicsPageProps {
  topics: Topic[];
  addTopic: (topic: AddTopicParams) => void;
}

const withTopicsPageContainer = (Component: React.ComponentType<TopicsPageProps>): React.FC => props => {
  const user = useStore(userStore);
  const topics = useStore(topicsStore);

  useEffect(() => {
    userController.getUser();

    if (user) {
      topicController.showTopics(user.uid);
    }
  }, [user]);

  return <Component {...props} topics={topics} addTopic={topicController.addTopic} />;
};

export { withTopicsPageContainer };
