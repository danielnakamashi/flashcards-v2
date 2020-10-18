export type IShowTopicByIdInput = {
  showTopic(uid: string, topicId: string): Promise<void>;
};
