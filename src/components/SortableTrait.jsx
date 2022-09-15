import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const traitList = [
  {
      id: '1',
      url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-assassin.svg?v=17",
      alt: "Assassian"
  },
  {
      id: '2',
      url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-bard.svg?v=17",
      alt: "Bard" 
  },
  {
      id: '3',
      url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-bruiser.svg?v=17",
      alt: "Bruiser" 
  },
  {
    id: '4',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-cannoneer.svg?v=17",
    alt: "Cannoneer" 
  },
  {
    id: '5',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-cavalier.svg?v=17",
    alt: "Cavalier" 
  },
  {
    id: '6',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-dragonmancer.svg?v=17",
    alt: "Dragonmancer" 
  },
  {
    id: '7',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-evoker.svg?v=17",
    alt: "Evoker" 
  },
  {
    id: '8',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-guardian.svg?v=17",
    alt: "Guardian" 
  },
  {
    id: '9',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-mage.svg?v=17",
    alt: "Mage" 
  },
  {
    id: '10',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-monolith.svg?v=17",
    alt: "Monolith" 
  },
  {
    id: '11',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-mystic.svg?v=17",
    alt: "Mystic" 
  },
  {
    id: '12',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-prodigy.svg?v=17",
    alt: "Prodigy" 
  },
  {
    id: '13',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-shapeshifter.svg?v=17",
    alt: "Shapeshifter" 
  },
  {
    id: '14',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-spellthief.svg?v=17",
    alt: "Spell-Thief" 
  },
  {
    id: '15',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-starcaller.svg?v=17",
    alt: "Starcaller" 
  },
  {
    id: '16',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-swiftshot.svg?v=17",
    alt: "Swiftshot" 
  },
  {
    id: '17',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-warrior.svg?v=17",
    alt: "Warrior" 
  },
  {
    id: '18',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-astral.svg?v=17",
    alt: "Astral" 
  },
  {
    id: '19',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-darkflight.svg?v=17",
    alt: "Darkflight" 
  },
  {
    id: '20',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-dragon.svg?v=17",
    alt: "Dragon" 
  },
  {
    id: '21',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-guild.svg?v=17",
    alt: "Guild" 
  },
  {
    id: '22',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-jade.svg?v=17",
    alt: "Jade" 
  },
  {
    id: '23',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-lagoon.svg?v=17",
    alt: "Lagoon" 
  },
  {
    id: '24',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-mirage.svg?v=17",
    alt: "Mirage" 
  },
  {
    id: '25',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-ragewing.svg?v=17",
    alt: "Ragewing" 
  },
  {
    id: '26',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-scalescorn.svg?v=17",
    alt: "Scalescorn" 
  },
  {
    id: '27',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-shimmerscale.svg?v=17",
    alt: "Shimmerscale" 
  },
  {
    id: '28',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-tempest.svg?v=17",
    alt: "Tempest" 
  },
  {
    id: '29',
    url: "https://cdn.mobalytics.gg/assets/common/icons/tft-synergies-set7-5/24-whispers.svg?v=17",
    alt: "Whispers" 
  },
]

export function Trait(props) {
  const { id } = props;

  const style = {
    width: 90,
    height: 90,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid black",
    backgroundImage: `url("${traitList[(parseInt(id)-1)].url}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'grey',
    margin: '0',
  };

  return <div style={style}></div>;
}

export function SortableTrait(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Trait id={props.id} />
    </div>
  );
}