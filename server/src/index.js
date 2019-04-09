const { GraphQLServer } = require('graphql-yoga');

const requestMoney = { id: 1, amount: 10, qrCode: 'abcde' };

const resolvers = {
  Query: {
    requestMoney: () => requestMoney,
  },

  Mutation: {
    createRequestMoney: (root, { amount }) => {
      return requestMoney;
    },
  },

  RequestMoney: {
    id: root => root.id,
    amount: root => root.amount,
    qrCode: root => root.qrCode
  }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
});

server.start(
  {
    port: 4000
  },
  ({ port }) => console.log(`Server is running on port ${port}.`)
);
