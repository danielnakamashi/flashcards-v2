export type IAddTopicInput = {
  addTopic({ name }: { name: string }, uid: string): Promise<void>;
};
