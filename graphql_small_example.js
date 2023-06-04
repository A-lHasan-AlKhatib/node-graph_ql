const { graphql, buildSchema } = require('graphql');

const schemaSDL = `
  type Query {
    user: User
  }

  type Photos {
    id: String
    path: String
  }

  type User {
    id: String
    name: String
    email: String
    photos: [Photos]
  }
`;

const schema = buildSchema(schemaSDL);

const root = {
  user: () => {
    return {
      id: '3232324',
      name: 'John Doe',
      email: 'john.doe@example.com',
      photos: [{
        id: '123',
        path: '/img/path/here'
      }]
    }
  }
};

graphql(schema, '{ user { id, name, email, photos {id, path }} }', root).then((response) => {
  console.log(response);
});
