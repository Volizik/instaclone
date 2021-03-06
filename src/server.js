require('dotenv').config();
import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';
import schema from './schema';

const PORT = process.env.PORT || 4004;

const server = new GraphQLServer({schema});
server.express.use(logger('dev'));

server.start({ port: PORT }).then(() => {console.log(`Server is running on port ${PORT}`)});
