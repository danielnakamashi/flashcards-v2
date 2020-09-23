import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Shuffle from '@material-ui/icons/Shuffle';
import { Card } from '@flashcards/core';
import { FlashCard } from '../FlashCard';
import { useStyles } from './StudyPile.style';

type Props = {
  cards: Card[];
  onShuffle: () => void;
};

const StudyPile: React.FC<Props> = ({ cards, onShuffle }) => {
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
  const cls = useStyles();

  if (!cards.length) {
    return null;
  }

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        marginTop="60px"
        height="380px"
      >
        <Paper elevation={3} className={cls.paper}></Paper>
        <Paper elevation={3} className={cls.paper}></Paper>
        <FlashCard front={cards[currentCardIndex].question} containerClassName={cls.flashCard}>
          {cards[currentCardIndex].answer}
        </FlashCard>
      </Box>
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
        <IconButton
          title="shuffle"
          color="primary"
          onClick={() => {
            onShuffle();
            setCurrentCardIndex(0);
          }}
        >
          <Shuffle fontSize="large" />
        </IconButton>
      </Box>
    </Container>
  );
};

export default StudyPile;
