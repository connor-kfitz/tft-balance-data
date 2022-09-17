import { gql } from "@apollo/client";

export const QUERY_ITEMS = gql`
    query getItems {
        items {
            name
            id
        }
    }
`

// export const QUERY_SYNERGIES = gql`
//     query getSynergies {
//         synergies {
//             name
//             id
//           }
//     }
// `