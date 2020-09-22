import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { Card } from '@flashcards/core';
import { FlashCard } from '../FlashCard';
import { useStyles } from './StudyPile.style';

type Props = {
  cards: Card[];
};

const StudyPile: React.FC<Props> = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
  const cls = useStyles();

  if (!cards.length) {
    return null;
  }

  return (
    <Container maxWidth="sm">
      <Container className={cls.container}>
        <Paper elevation={3} className={cls.paper}></Paper>
        <Paper elevation={3} className={cls.paper}></Paper>
        <FlashCard front={cards[currentCardIndex].question} containerClassName={cls.flashCard}>
          {cards[currentCardIndex].answer}
        </FlashCard>
      </Container>
      <Box display="flex" justifyContent="center" alignItems="center">
        <IconButton
          title="previous"
          color="primary"
          onClick={() => {
            setCurrentCardIndex((index) => index - 1);
          }}
          disabled={currentCardIndex === 0}
        >
          <ArrowBack fontSize="large" />
        </IconButton>
        <Typography>
          {currentCardIndex + 1} / {cards.length}
        </Typography>
        <IconButton
          title="next"
          color="primary"
          onClick={() => {
            setCurrentCardIndex((index) => index + 1);
          }}
          disabled={currentCardIndex === cards.length - 1}
        >
          <ArrowForward fontSize="large" />
        </IconButton>
      </Box>
    </Container>
  );
};

export default StudyPile;
