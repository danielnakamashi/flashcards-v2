import { GetUser, Logout, Login } from '@flashcards/application';
import { UserController, TopicController, UserPresenter, TopicsPresenter } from '@flashcards/view';
import { UserAuthenticationFirebase, TopicRepositoryFirestore } from '@flashcards/service';
import { ShowTopics, AddTopic, RemoveTopic } from '@flashcards/application';
import firebase from '../config/firebase';

const userAuthentication = new UserAuthenticationFirebase(firebase.auth());
const userPresenter = new UserPresenter();
const getUser = new GetUser(userAuthentication, userPresenter);
const logout = new Logout(userAuthentication, userPresenter);
const login = new Login(userAuthentication, userPresenter);
const userController = new UserController(getUser, logout, login);

const topicPersistence = new TopicRepositoryFirestore(firebase.firestore());
const topicsPresenter = new TopicsPresenter();
const showTopics = new ShowTopics(topicPersistence, topicsPresenter);
const addTopic = new AddTopic(topicPersistence, topicsPresenter);
const removeTopic = new RemoveTopic(topicPersistence, topicsPresenter);
const topicController = new TopicController(showTopics, addTopic, removeTopic);

export { userController, userPresenter, topicController, topicsPresenter };
