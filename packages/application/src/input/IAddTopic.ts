export interface IAddTopic {
  addTopic({ name }: { name: string }, uid: string): Promise<void>;
}
