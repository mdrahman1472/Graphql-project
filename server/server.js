const express = require('express');
const {ApolloServer} = require('appollo-server-express');

// fake data to populate
const authors = [
   {
      id: "1",
      info: {
         name: "Md Rahman",
         age: 24,
         gender: "M",
      }
   },
   {
      id: "2",
      info: {
         name: "John Doe",
         age: 33,
         gender: "M",
      }
   }
];

// graphql schemma in string form
const tyoeDefs = `{
   type Author {
      id: ID!
      info: Person
   }
   type Person {
      name: String!
      age: Int
      gender: String
   }
   type Query {
      getAuthors: [Author]
   }
}
`;

// the resolver
const resolvers = {
   Query: {
      getAuthors: () => authors,
   }
}
const PORT = 3600;

// put together a schemma
const server = new ApolloSever ({typedefs, resolvers});

const app = express();

server.applyMiddleware({
   app,
   path: '/graphql'
});

app.listen (PORT, () => {
   console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});