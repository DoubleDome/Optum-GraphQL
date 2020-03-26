const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');
const PORT = 4000;

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'user', url: 'http://localhost:4001/' },
    { name: 'orders', url: 'http://localhost:4002/' },
    { name: 'medications', url: 'http://localhost:4003/' },
  ]
});

const server = new ApolloServer({ gateway, subscriptions: false });
server.listen(PORT);
