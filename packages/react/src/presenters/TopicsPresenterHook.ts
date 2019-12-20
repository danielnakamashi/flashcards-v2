import { Store } from 'effector';
import { useStore } from 'effector-react';
import { ITopicsPresenter } from '@flashcards/presenters';
import { Topic } from '@flashcards/entities';

export interface ITopicsPresenterHook extends ITopicsPresenter {
  useTopics(): Topic[];
}

class TopicsPresenterHook implements ITopicsPresenterHook {
  topicsStore: Store<Topic[]>;
  _topicsPresenter: ITopicsPresenter;

  constructor(topicsPresenter: ITopicsPresenter) {
    this._topicsPresenter = topicsPresenter;
    this.topicsStore = this._topicsPresenter.topicsStore;
  }

  addTopic(topic: Topic) {
    return this._topicsPresenter.addTopic(topic);
  }

  removeTopic(id: string) {
    return this._topicsPresenter.removeTopic(id);
  }

  reset() {
    return this._topicsPresenter.reset();
  }

  showTopics(topics: Topic[]) {
    return this._topicsPresenter.showTopics(topics);
  }

  useTopics(): Topic[] {
    return useStore(this._topicsPresenter.topicsStore);
  }
}

export { TopicsPresenterHook };
