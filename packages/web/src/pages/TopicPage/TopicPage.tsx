import React, { useEffect, useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { User } from '@flashcards/core';
import { ViewModel, Presenter } from '@flashcards/view';
import { UseCase, Service } from '@flashcards/application';
import Header from '../../components/Header';
import { appContext } from '../../contexts/AppContext';
import { useStyles } from './TopicPage.style';
import { NewCardForm } from '../../components/NewCardForm';
import { FlashCard } from '../../components/FlashCard';

interface Props extends RouteComponentProps<{ topicId: string }> {
  user: User;
  logout: () => void;
}

const topicPagePresenter = new Presenter.TopicPagePresenter();
const useViewModel = (topicRepository: Service.ITopicRepository): ViewModel.ITopicPageViewModel => {
  const showTopic = new UseCase.ShowTopic(topicRepository, topicPagePresenter);
  const addCard = new UseCase.AddCard(topicRepository, topicPagePresenter);

  return ViewModel.createTopicPageViewModel(topicPagePresenter, showTopic, addCard);
};

const TopicPage: React.FC<Props> = ({ user, logout, topicId }) => {
  if (topicId === undefined) {
    return null;
  }

  const { topicRepository } = useContext(appContext);

  if (!topicRepository) {
    return null;
  }

  const styles = useStyles();
  const { useTopicName, showTopic, useCards, addCard } = useViewModel(topicRepository);
  const topicName = useTopicName();
  const cards = useCards();

  useEffect(() => {
    showTopic(user.uid, topicId);
  }, [user, topicId]);

  return (
    <>
      <Header user={user} logout={logout} />
      <main data-testid="topic-page">
        <Grid container direction="column" className={styles.list}>
          <Grid item>
            <Typography variant="h1" className={styles.title}>
              {topicName}
            </Typography>
          </Grid>
          <Grid item>
            <NewCardForm
              onAdd={(question, answer) => {
                addCard({ question, answer }, topicId, user.uid);
              }}
            />
          </Grid>
          <Grid item>
            <Grid container direction="row">
              {cards.map(card => (
                <Grid item key={card.id}>
                  <FlashCard title={card.question}>{card.answer}</FlashCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </main>
    </>
  );
};

export default TopicPage;
