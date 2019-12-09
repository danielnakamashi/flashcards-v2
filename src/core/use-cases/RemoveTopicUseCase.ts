export interface RemoveTopicUseCase {
  removeTopic({ id }: { id: string }): void;
}
