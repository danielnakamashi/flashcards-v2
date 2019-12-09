import { Topic } from '../entities/Topic';

export interface TopicPersistence {
  getTopics(uid: string): Promise<Topic[]>;
  addTopic({ name }: { name: string }): Promise<Topic>;
  removeTopic({ id }: { id: string }): Promise<void>;
  hasTopic(name: string): Promise<boolean>;
}
