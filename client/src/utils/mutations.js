import { gql } from '@apollo/client';

export const NERF_ITEM_INCREMENT = gql`
  mutation nerfItemIncrement($itemId: Int!) {
    addNerfItem(itemId: $itemId) {
      id
      name
    }
  }
`;

export const NEUTRAL_ITEM_INCREMENT = gql`
  mutation neutralItemIncrement($itemId: Int!) {
    addNeutralItem(itemId: $itemId) {
      id
      name
    }
  }
`;

export const BUFF_ITEM_INCREMENT = gql`
  mutation buffItemIncrement($itemId: Int!) {
    addBuffItem(itemId: $itemId) {
      id
      name
    }
  }
`;