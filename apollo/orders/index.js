const { gql, ApolloServer } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');
const fetch = require('isomorphic-unfetch');

const BASE_URL = 'http://localhost:3001';
const PORT = 4002;

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
