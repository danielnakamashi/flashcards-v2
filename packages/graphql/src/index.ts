import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { TopicRepositoryServer } from '@flashcards/service';
import { schema } from './schema';
import { createRoot } from './root';

const topicRepository = new TopicRepositoryServer();
const app = express();
const port = process.env.PORT ?? 4000;
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: createRoot({ topicRepository }),
    graphiql: true,
  }),
);
app.listen(port);
console.log(`Server listening on port ${port}`);
