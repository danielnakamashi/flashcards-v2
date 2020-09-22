import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { UseCase, Service } from '@flashcards/application';
import { ViewModel, Presenter } from '@flashcards/presentation';
import { useServices } from '../../contexts/appContext';
import Header from '../../components/Header';
import { useUserContext } from '../../contexts/userContext';
import StudyPile from '../../components/StudyPile';
import { useStyles } from './TopicStudyPage.style';

const useViewModel = (
  topicRepository: Service.ITopicRepositoryService,
): ViewModel.ITopicStudyPageViewModel => {
  return React.useMemo(() => {
    const presenter = new Presenter.TopicStudyPagePresenter();
    const showTopic = new UseCase.ShowTopicWithShuffledCardsUseCase(topicRepository, presenter);

    return ViewModel.topicStudyPageViewModel(presenter, showTopic);
  }, [topicRepository]);
};

const TopicStudyPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const { user, logout } = useUserContext();
  const { topicRepository } = useServices();
  const styles = useStyles();
  const { getCardsStore, getTopicNameStore, showTopic } = useViewModel(topicRepository);
  const topicName = useStore(getTopicNameStore());
  const cards = useStore(getCardsStore());

  console.log(user.uid, topicId);

  useEffect(() => {
    showTopic(user.uid, topicId);
  }, [user, topicId]);

  return (
    <>
      <Header user={user} logout={logout} />
      <Box pt={2}>
        <Container maxWidth="md" component="main" data-testid="topic-study-page">
          <Typography variant="h1" className={styles.title} align="center">
            {topicName}
          </Typography>
          <StudyPile cards={cards} />
        </Container>
      </Box>
    </>
  );
};

export default TopicStudyPage;
