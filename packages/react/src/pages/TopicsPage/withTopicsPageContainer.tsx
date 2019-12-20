import React, { useEffect } from 'react';
import { Topic } from '@flashcards/entities';
import { AddTopicParams } from '@flashcards/controllers';
import { useInstances } from '../../contexts/AppContext';

export type TopicsPageProps = {
  topics: Topic[];
  addTopic: (topic: AddTopicParams) => void;
};

const withTopicsPageContainer = (
  Component: React.ComponentType<TopicsPageProps>,
): React.FC => props => {
  const { userPresenter, topicsPresenter, userController, topicController } = useInstances();
  const user = userPresenter.useUser();
  const topics = topicsPresenter.useTopics();

  useEffect(() => {
    userController.getUser();

    if (user) {
      topicController.showTopics(user.uid);
    }
  }, [topicController, user, userController]);

  return <Component {...props} topics={topics} addTopic={topicController.addTopic} />;
};

export { withTopicsPageContainer };
