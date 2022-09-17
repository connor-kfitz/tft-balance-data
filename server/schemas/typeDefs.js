const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Item {
        _id: ID
        name: String
        id: Int
        nerfCount: Int
        neturalCount: Int
        buffCount: Int
    }

    type Query {
        items: [Item]!
        profile(itemId: ID!): Item
    }
`;

module.exports = typeDefs;
