export interface IRemoveTopic {
  removeTopic(uid: string, topicId: string): Promise<void>;
}
