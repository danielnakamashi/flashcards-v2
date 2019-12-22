export interface IRemoveTopicInput {
  removeTopic(param: { uid: string; topicId: string }): void;
}
