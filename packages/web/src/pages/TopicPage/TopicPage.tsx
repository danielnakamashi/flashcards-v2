import React, { useEffect, useContext } from 'react';
import { useStore } from 'effector-react';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { User } from '@flashcards/core';
import { ViewModel, Presenter } from '@flashcards/presentation';
import { UseCase, Service } from '@flashcards/application';
import Header from '../../components/Header';
import { appContext } from '../../contexts/AppContext';
import { useStyles } from './TopicPage.style';
import { NewCardForm } from '../../components/NewCardForm';
import { FlashCard } from '../../components/FlashCard';

interface Props {
  user: User;
  logout: () => void;
}

const useViewModel = (
  topicRepository: Service.ITopicRepositoryService,
): ViewModel.ITopicPageViewModel => {
  return React.useMemo(() => {
    const topicPagePresenter = new Presenter.TopicPagePresenter();
    const showTopic = new UseCase.ShowTopicUseCase(topicRepository, topicPagePresenter);
    const addCard = new UseCase.AddCardUseCase(topicRepository, topicPagePresenter);

    return ViewModel.topicPageViewModel(topicPagePresenter, showTopic, addCard);
  }, [topicRepository]);
};

const TopicPage: React.FC<Props> = ({ user, logout }) => {
  const { topicId } = useParams<{ topicId: string }>();
  const { topicRepository } = useContext(appContext);

  if (!topicRepository) {
    return null;
  }

  const styles = useStyles();
  const { getTopicNameStore, showTopic, getCardsStore, addCard } = useViewModel(topicRepository);
  const topicName = useStore(getTopicNameStore());
  const cards = useStore(getCardsStore());

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
              onAdd={async (question, answer) => {
                await addCard({ question, answer }, topicId, user.uid);
              }}
            />
          </Grid>
          <Grid item>
            <Grid container direction="row">
              {cards.map((card) => (
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
