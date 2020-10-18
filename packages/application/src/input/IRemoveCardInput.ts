export type IRemoveCardInput = {
  removeCard(uid: string, topicId: string, cardId: string): Promise<void>;
};
