import { Card } from './Entities/Card';

// Shuffle cards randomically (in the future, use algorithims like spaced repetitions)
function shuffleCards(cards: Card[]): Card[] {
  const cardsCopy = [...cards];
  let m: number = cards.length;
  let t: Card;
  let i: number;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = cardsCopy[m];
    cardsCopy[m] = cardsCopy[i];
    cardsCopy[i] = t;
  }

  return cardsCopy;
}

export { shuffleCards };
