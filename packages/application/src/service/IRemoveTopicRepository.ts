export interface IRemoveTopicRepository {
  removeTopic({ uid, topicId }: { uid: string; topicId: string }): Promise<void>;
}
