export type IRemoveCardService = {
  removeCard(uid: string, topicId: string, cardId: string): Promise<void>;
};
