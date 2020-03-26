module.exports = `
    extend type Query {
        orders(id: String): [Order]
    }
`;
