module.exports = `
  type User @key(fields: "id"){
    id: ID!
    type: String
    firstname: String
    lastname: String
    name: String
    abbreviatedName: String
    birthdate: String
    age: Int
    address: String
    city: String
    state: String
    zipcode: String
    managedUsers: [User]
  }
`;
