import { IAddTopic } from './IAddTopic';
import { IRemoveTopic } from './IRemoveTopic';
import { IGetTopicsByUser } from './IGetTopicsByUser';
import { IGetTopicById } from './IGetTopicById';
import { IAddCard } from './IAddCard';

export type ITopicRepository = IAddTopic &
  IRemoveTopic &
  IGetTopicsByUser &
  IGetTopicById &
  IAddCard;
