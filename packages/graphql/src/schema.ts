import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Card {
    id: ID!
    question: String!
    answer: String!
  }

  type Topic {
    id: ID!
    name: String!
    cards: [Card!]!
  }

  type Query {
    topics: [Topic!]!
    topic(topicId: String!): Topic
  }

  input CardInput {
    question: String!
    answer: String!
  }

  input TopicInput {
    name: String!
  }

  type Mutation {
    addCard(topicId: String!, card: CardInput): Card
    addTopic(topic: TopicInput!): Topic
    removeCard(topicId: String!, cardId: String!): Boolean
    removeTopic(topicId: String!): Boolean
  }
`);

export { schema };
