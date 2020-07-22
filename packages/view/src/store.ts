import { Service } from '@flashcards/application';

let topicRepositoryStore: Service.ITopicRepositoryService;
let userServiceStore: Service.IUserService;

function setTopicRepository(topicRepository: Service.ITopicRepositoryService) {
  topicRepositoryStore = topicRepository;
}
function setUserService(userService: Service.IUserService) {
  userServiceStore = userService;
}
function getTopicRepository(): Service.ITopicRepositoryService {
  return topicRepositoryStore;
}
function getUserService(): Service.IUserService {
  return userServiceStore;
}

export { setTopicRepository, setUserService, getTopicRepository, getUserService };
