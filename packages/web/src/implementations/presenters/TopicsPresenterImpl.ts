import { createStore, createEvent } from 'effector';
import { Topic } from '@flashcards/entities';
import { ITopicsPresenter } from '@flashcards/presenters';

class TopicsPresenter implements ITopicsPresenter {
  topicsStore = createStore<Topic[]>([]);
  _showTopics = createEvent<Topic[]>('show topics');
  _addTopic = createEvent<Topic>('add topic');
  _removeTopic = createEvent<string>('remove topic');
  _reset = createEvent<void>('reset topics');

  constructor() {
    this.topicsStore
      .on(this._showTopics, (_, topics) => topics)
      .on(this._addTopic, (topics, newTopic) => [...topics, newTopic])
      .on(this._removeTopic, (topics, topicId) => topics.filter(topic => topic.id !== topicId))
      .reset(this._reset);
  }

  addTopic(topic: Topic) {
    return this._addTopic(topic);
  }

  removeTopic(id: string) {
    return this._removeTopic(id);
  }

  reset() {
    return this._reset();
  }

  showTopics(topics: Topic[]) {
    return this._showTopics(topics);
  }
}

export { TopicsPresenter };
