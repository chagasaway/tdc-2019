var express = require('express');
var graphqlHTTP = require('express-graphql');

const resolvers = {
  Query: {
    requestMoney: () => ({ qrCode: 'abcde', amount: '1.22', }),
  },
  Mutation: {
    createRequestMoney: (_, args) => {
      return { qrCode: 'abcde', amount: args.amount }
    }
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  typeDefs: './schema.graphql',
  resolvers,
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));