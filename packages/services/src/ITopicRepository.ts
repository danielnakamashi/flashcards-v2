import { Topic } from '@flashcards/entities/src/Topic';

export interface ITopicRepository {
  getTopics(uid: string): Promise<Topic[]>;
  addTopic({ name }: { name: string }, uid: string): Promise<Topic>;
  removeTopic({ uid, topicId }: { uid: string; topicId: string }): Promise<void>;
}
