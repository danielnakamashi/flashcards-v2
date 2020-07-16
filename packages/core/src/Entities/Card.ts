interface CardContructorParams {
  id: string;
  question: string;
  answer: string;
}

class Card {
  id: string;
  question: string;
  answer: string;

  constructor({ id, question, answer }: CardContructorParams) {
    this.id = id;
    this.question = question;
    this.answer = answer;
  }
}

export { Card };
