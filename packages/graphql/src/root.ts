import { Request } from 'express';
import { Service } from '@flashcards/application';

type CreateRootParams = {
  topicRepository: Service.ITopicRepositoryService;
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

const createQueries = ({ topicRepository }: CreateRootParams) => ({
  topics: (_: never, req: Request) => {
    const uid: string = req.header('uid') ?? '';

    return topicRepository.getTopicsByUser(uid);
  },
  topic: ({ topicId }: { topicId: string }, req: Request) => {
    const uid: string = req.header('uid') ?? '';

    return topicRepository.getTopicById(uid, topicId);
  },
});

const createMutations = ({ topicRepository }: CreateRootParams) => ({
  addCard: ({ topicId, card }: AddCardInput, req: Request) => {
    const uid: string = req.header('uid') ?? '';

    return topicRepository.addCard(card, topicId, uid);
  },
  addTopic: ({ topic }: AddTopicInput, req: Request) => {
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
});

const createRoot = (params: CreateRootParams) => ({
  ...createQueries(params),
  ...createMutations(params),
});

export { createRoot };
