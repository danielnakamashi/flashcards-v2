import { IAddTopicService } from './IAddTopicService';
import { IRemoveTopicService } from './IRemoveTopicService';
import { IGetTopicsByUserService } from './IGetTopicsByUserService';
import { IGetTopicByIdService } from './IGetTopicByIdService';
import { IAddCardService } from './IAddCardService';
import { IRemoveCardService } from './IRemoveCardService';

export type ITopicRepositoryService = IAddTopicService &
  IRemoveTopicService &
  IGetTopicsByUserService &
  IGetTopicByIdService &
  IAddCardService &
  IRemoveCardService;
