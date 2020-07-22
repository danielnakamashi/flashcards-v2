export interface IRemoveTopicService {
  removeTopic(uid: string, topicId: string): Promise<void>;
}
