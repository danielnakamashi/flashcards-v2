import React, { useEffect, useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import Typography from '@material-ui/core/Typography';
import { User } from '@flashcards/core';
import { ViewModel, Presenter } from '@flashcards/view';
import { UseCase } from '@flashcards/application';
import Header from '../../components/Header';
import { appContext } from '../../contexts/AppContext';

interface Props extends RouteComponentProps<{ topicId: string }> {
  user: User;
  logout: () => void;
}

const useViewModel = (): ViewModel.ITopicPageViewModel | undefined => {
  const { topicRepository } = useContext(appContext);

  if (!topicRepository) {
    return undefined;
  }

  const topicPagePresenter = new Presenter.TopicPagePresenter();
  const showTopicById = new UseCase.ShowTopic(topicRepository, topicPagePresenter);
  return new ViewModel.TopicPageViewModel(topicPagePresenter, showTopicById);
};

const TopicPage: React.FC<Props> = ({ user, logout, topicId }) => {
  const viewModel = useViewModel();
  const topicName = viewModel?.useTopicName();

  useEffect(() => {
    if (topicId === undefined) {
      return;
    }

    viewModel?.showTopic(user.uid, topicId);
  }, [viewModel, user, topicId]);

  return (
    <>
      <Header user={user} logout={logout} />
      <main data-testid="topic-page">
        <Typography>{topicName}</Typography>
      </main>
    </>
  );
};

export default TopicPage;
