import { GetUser } from '@flashcards/use-cases';
import { Logout } from '@flashcards/use-cases';
import { Login } from '@flashcards/use-cases';
import { UserController } from '@flashcards/controllers';
import { UserAuthenticationFirebase } from './services/UserAuthenticationFirebase';
import { UserPresenter } from './presenters/UserPresenter';

import { TopicPersistence } from './services/TopicPersistenceMemory';
import { ShowTopics } from '@flashcards/use-cases';
import { AddTopic } from '@flashcards/use-cases';
import { RemoveTopic } from '@flashcards/use-cases';
import { TopicController } from '@flashcards/controllers';
import { TopicsPresenter } from './presenters/TopicsPresenter';

const userAuthentication = new UserAuthenticationFirebase();
const userPresenter = new UserPresenter();
const getUser = new GetUser(userAuthentication, userPresenter);
const logout = new Logout(userAuthentication, userPresenter);
const login = new Login(userAuthentication, userPresenter);
const userController = new UserController(getUser, logout, login);

const topicPersistence = new TopicPersistence();
const topicsPresenter = new TopicsPresenter();
const showTopics = new ShowTopics(topicPersistence, topicsPresenter);
const addTopic = new AddTopic(topicPersistence, topicsPresenter);
const removeTopic = new RemoveTopic(topicPersistence, topicsPresenter);
const topicController = new TopicController(showTopics, addTopic, removeTopic);

export { userController, userPresenter, topicController, topicsPresenter };
