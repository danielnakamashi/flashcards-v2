import { TopicController } from './TopicController';

const showTopicsUseCase = { showTopics: jest.fn() };
const addTopicUseCase = { addTopic: jest.fn() };
const removeTopicUseCase = { removeTopic: jest.fn() };

describe('TopicController', () => {
  it('should call showTopics', () => {
    const topicController = new TopicController(
      showTopicsUseCase,
      addTopicUseCase,
      removeTopicUseCase,
    );
    topicController.showTopics('uid');

    expect(showTopicsUseCase.showTopics).toBeCalledWith('uid');
  });

  it('should call addTopic', () => {
    const topicController = new TopicController(
      showTopicsUseCase,
      addTopicUseCase,
      removeTopicUseCase,
    );
    topicController.addTopic({ name: 'name test' }, '123');

    expect(addTopicUseCase.addTopic).toBeCalledWith({ name: 'name test' }, '123');
  });

  it('should call removeTopic', () => {
    const topicController = new TopicController(
      showTopicsUseCase,
      addTopicUseCase,
      removeTopicUseCase,
    );
    topicController.removeTopic({ uid: 'uid', topicId: 'topicId' });

    expect(removeTopicUseCase.removeTopic).toBeCalledWith({ uid: 'uid', topicId: 'topicId' });
  });
});
