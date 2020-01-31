import { Service } from '@flashcards/application';

let topicRepositoryStore: Service.ITopicRepository;
let userServiceStore: Service.IUserService;

function setTopicRepository(topicRepository: Service.ITopicRepository) {
  topicRepositoryStore = topicRepository;
}
function setUserService(userService: Service.IUserService) {
  userServiceStore = userService;
}
function getTopicRepository(): Service.ITopicRepository {
  return topicRepositoryStore;
}
function getUserService(): Service.IUserService {
  return userServiceStore;
}

export { setTopicRepository, setUserService, getTopicRepository, getUserService };
