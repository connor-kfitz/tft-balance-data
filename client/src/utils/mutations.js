import { gql } from '@apollo/client';

export const NERF_ITEM_INCREMENT = gql`
  mutation nerfItemIncrement($itemId: Int!) {
    addNerfItem(itemId: $itemId) {
      id
      name
    }
  }
`;