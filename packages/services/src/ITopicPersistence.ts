import { Topic } from '@flashcards/entities/src/Topic';

export interface ITopicPersistence {
  getTopics(uid: string): Promise<Topic[]>;
  addTopic({ name }: { name: string }): Promise<Topic>;
  removeTopic({ id }: { id: string }): Promise<void>;
  hasTopic(name: string): Promise<boolean>;
}
