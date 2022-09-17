import { gql } from "@apollo/client";

export const QUERY_ITEMS = gql`
    query getItems {
        items {
            name
            id
        }
    }
`