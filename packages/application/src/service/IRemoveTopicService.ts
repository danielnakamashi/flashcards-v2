export type IRemoveTopicService = {
  removeTopic(uid: string, topicId: string): Promise<void>;
};
