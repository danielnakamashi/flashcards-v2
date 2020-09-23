export interface IShowTopicByIdWithShuffledCardsInput {
  showTopicWithShuffledCards(uid: string, topicId: string): Promise<void>;
}
