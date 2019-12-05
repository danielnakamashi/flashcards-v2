import { Topic } from '../entities/Topic';

export interface TopicPersistence {
  showTopics(uid: string): Promise<Topic[]>;
  addTopic({ name }: { name: string }): Promise<Topic>;
}
