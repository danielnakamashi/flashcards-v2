import { Request } from 'express';
import { Topic } from '@flashcards/core';
import { Service } from '@flashcards/application';

type CreateRootParams = {
  topicRepository: Service.ITopicRepositoryService;
};

type CreateRootReturn = {
  topics: Promise<Topic[]>;
  topic: Promise<Topic | null>;
};

type CardInput = {
  question: string;
  answer: string;
};

type AddCardInput = {
  topicId: string;
  card: CardInput;
};

type AddTopicInput = {
  topic: {
    name: string;
  };
};

type RemoveCardInput = {
  topicId: string;
  cardId: string;
};

type RemoveTopicInput = {
  topicId: string;
};

const createRoot = ({ topicRepository }: CreateRootParams) => {
  return {
    topics: (_: unknown, req: Request) => {
      const uid: string = req.header('uid') ?? '';

      return topicRepository.getTopicsByUser(uid);
    },
    topic: ({ topicId }: { topicId: string }, req: Request) => {
      const uid: string = req.header('uid') ?? '';

      return topicRepository.getTopicById(uid, topicId);
    },
    addCard: ({ topicId, card }: AddCardInput, req: Request) => {
      const uid: string = req.header('uid') ?? '';

      return topicRepository.addCard(card, topicId, uid);
    },
    addTopic: ({ topic }: AddTopicInput, req: Request) => {
      console.log('topicInput', topic);
      const uid: string = req.header('uid') ?? '';

      return topicRepository.addTopic(topic, uid);
    },
    removeCard: ({ topicId, cardId }: RemoveCardInput, req: Request) => {
      const uid: string = req.header('uid') ?? '';

      try {
        topicRepository.removeCard(uid, topicId, cardId);
        return true;
      } catch (_) {
        return false;
      }
    },
    removeTopic: ({ topicId }: RemoveTopicInput, req: Request) => {
      const uid: string = req.header('uid') ?? '';

      try {
        topicRepository.removeTopic(uid, topicId);
        return true;
      } catch (_) {
        return false;
      }
    },
  };
};

export { createRoot };
