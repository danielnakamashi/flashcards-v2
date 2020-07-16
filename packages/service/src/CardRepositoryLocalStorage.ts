import { Card } from '@flashcards/core';
import { Service } from '@flashcards/application';

class CardRepositoryLocalStorage implements Service.ICardRepository {
  get cardRepository(): { [key: string]: Card[] } {
    const cardRepository = window.localStorage.getItem('cardRepository');
    if (!cardRepository) {
      window.localStorage.setItem('cardRepository', JSON.stringify({}));
    }

    return JSON.parse(window.localStorage.getItem('cardRepository') ?? JSON.stringify({})) as {
      [key: string]: Card[];
    };
  }

  set cardRepository(value: { [key: string]: Card[] }) {
    window.localStorage.setItem('cardRepository', JSON.stringify(value));
  }

  addCard(
    { question, answer }: { question: string; answer: string },
    topicId: string,
    uid: string,
  ): Promise<Card> {
    const cards = this.cardRepository[topicId] ?? [];
    const lastCard = cards[cards.length - 1];
    const newId = (parseInt(lastCard?.id ?? '0') + 1).toString();
    const newCard = new Card({ id: newId, question, answer });

    cards.push(newCard);
    this.cardRepository = {
      ...this.cardRepository,
      [topicId]: [...cards],
    };

    return Promise.resolve(newCard);
  }
}

export { CardRepositoryLocalStorage };
