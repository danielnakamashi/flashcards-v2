export interface IAddTopicInput {
  addTopic({ name }: { name: string }, uid: string): Promise<void>;
}
