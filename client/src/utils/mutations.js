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

export const NERF_SYNERGY_INCREMENT = gql`
  mutation nerfSynergyIncrement($synergyId: Int!) {
    addNerfSynergy(synergyId: $synergyId) {
      id
      name
    }
  }
`;

export const NEUTRAL_SYNERGY_INCREMENT = gql`
  mutation neutralSynergyIncrement($synergyId: Int!) {
    addNeutralSynergy(synergyId: $synergyId) {
      id
      name
    }
  }
`;

export const BUFF_SYNERGY_INCREMENT = gql`
  mutation buffSynergyIncrement($synergyId: Int!) {
    addBuffSynergy(synergyId: $synergyId) {
      id
      name
    }
  }
`;