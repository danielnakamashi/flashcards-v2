import { Topic } from '../entities/Topic';

export interface AddTopic {
  addTopic({ name }: { name: string }): Promise<Topic>;
}
