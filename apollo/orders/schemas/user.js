module.exports = `
  extend type User @key(fields: "id") {
    id: ID! @external
    orders: [Order]
  }
`;
