interface CardContructorParams {
  id?: string;
  title: string;
  definition: string;
}

class Card {
  id?: string;
  title: string;
  definition: string;

  constructor({ id, title, definition }: CardContructorParams) {
    this.id = id;
    this.title = title;
    this.definition = definition;
  }
}

export { Card };
