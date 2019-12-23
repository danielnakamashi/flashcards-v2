import { Card } from './Card';

interface TopicConstructorParams {
  id: string;
  name: string;
  cards?: Card[];
}

class Topic {
  id: string;
  name: string;
  cards: Card[];

  constructor({ id, name, cards = [] }: TopicConstructorParams) {
    this.id = id;
    this.name = name;
    this.cards = cards;
  }
}

export { Topic };
