const routes = Object.freeze({
  home: () => '/',
  topic: (topicId = ':topicId') => `/topic/${topicId}`,
  topicStudy: (topicId = ':topicId') => `/topic/${topicId}/study`,
});

export { routes };
