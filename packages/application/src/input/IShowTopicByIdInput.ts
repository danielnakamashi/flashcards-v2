export interface IShowTopicByIdInput {
  showTopic(uid: string, topicId: string): Promise<void>;
}
