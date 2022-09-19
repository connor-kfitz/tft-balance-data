const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Item {
        _id: ID
        name: String
        id: Int
        nerfCount: Int
        neutralCount: Int
        buffCount: Int
    }

    type Synergy {
        _id: ID
        name: String
        id: Int
        nerfCount: Int
        neutralCount: Int
        buffCount: Int
    }

    type Query {
        items: [Item]!
        synergies: [Synergy]!
    }

    type Mutation {
        addNerfItem(itemId: Int!): Item
        addNeutralItem(itemId: Int!): Item
        addBuffItem(itemId: Int!): Item
        addNerfSynergy(synergyId: Int!): Synergy
        addNeutralSynergy(synergyId: Int!): Synergy
        addBuffSynergy(synergyId: Int!): Synergy
    }
`;

module.exports = typeDefs;