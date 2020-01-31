import { useStore } from 'effector-react';
import { Card } from '@flashcards/core';
import { InputBoundary } from '@flashcards/application';
import { TopicPagePresenter } from '../presenter/TopicPagePresenter';

export interface ITopicPageViewModel extends InputBoundary.IShowTopicById {
  useTopicName(): string;
  useCards(): Card[];
}

class TopicPageViewModel implements ITopicPageViewModel {
  _topicPagePressenter: TopicPagePresenter;
  _showTopicById: InputBoundary.IShowTopicById;

  constructor(topicPagePresenter: TopicPagePresenter, showTopicById: InputBoundary.IShowTopicById) {
    this._topicPagePressenter = topicPagePresenter;
    this._showTopicById = showTopicById;
  }

  useTopicName(): string {
    return useStore(this._topicPagePressenter.topicNameStore);
  }

  useCards(): Card[] {
    return useStore(this._topicPagePressenter.cardsStore);
  }

  showTopic(uid: string, topicId: string): void {
    return this._showTopicById.showTopic(uid, topicId);
  }
}

export { TopicPageViewModel };
