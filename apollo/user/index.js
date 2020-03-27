const { gql, ApolloServer } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');

const BASE_URL = 'http://localhost:5000';
const PORT = 4001;

const loader = require('../util/loader');

const server = new ApolloServer({
  schema: buildFederatedSchema({
    typeDefs: loader.mergeSchemas(`${__dirname}/schemas`),
    resolvers: loader.mergeResolvers(`${__dirname}/resolvers`)
  }),
  context: { baseURL: BASE_URL }
});

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Apollo ready at ${url}`);
});
