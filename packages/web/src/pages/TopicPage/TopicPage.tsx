import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { User, Card } from '@flashcards/core';
import { ViewModel, Presenter } from '@flashcards/presentation';
import { UseCase, Service } from '@flashcards/application';
import Header from '../../components/Header';
import { useServices } from '../../contexts/appContext';
import { useUserContext } from '../../contexts/userContext';
import { useStyles } from './TopicPage.style';
import { NewCardForm } from '../../components/NewCardForm';
import { FlashCard } from '../../components/FlashCard';

const useViewModel = (
  topicRepository: Service.ITopicRepositoryService,
): ViewModel.ITopicPageViewModel => {
  return React.useMemo(() => {
    const topicPagePresenter = new Presenter.TopicPagePresenter();
    const showTopic = new UseCase.ShowTopicUseCase(topicRepository, topicPagePresenter);
    const addCard = new UseCase.AddCardUseCase(topicRepository, topicPagePresenter);
    const removeCard = new UseCase.RemoveCardUseCase(topicRepository, topicPagePresenter);

    return ViewModel.topicPageViewModel(topicPagePresenter, showTopic, addCard, removeCard);
  }, [topicRepository]);
};

const TopicPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const { user, logout } = useUserContext();
  const { topicRepository } = useServices();
  const styles = useStyles();
  const { getTopicNameStore, showTopic, getCardsStore, addCard, removeCard } = useViewModel(
    topicRepository,
  );
  const topicName = useStore(getTopicNameStore());
  const cards = useStore(getCardsStore());
  const cardRemoveHandler = (card: Card): Promise<void> => {
    return removeCard(user.uid, topicId, card.id);
  };

  useEffect(() => {
    showTopic(user.uid, topicId);
  }, [user, topicId]);

  return (
    <>
      <Header user={user} logout={logout} />
      <main data-testid="topic-page">
        <Grid container direction="column" spacing={2} className={styles.list}>
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
            <Grid container direction="row" spacing={2}>
              {cards.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={3}>
                  <FlashCard title={card.question} onRemove={() => cardRemoveHandler(card)}>
                    {card.answer}
                  </FlashCard>
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
