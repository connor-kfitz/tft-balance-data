import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const itemList = [
  {
      id: '1',
      url: "https://www.mobafire.com/images/tft/set7/item/icon/deathblade.png",
      alt: "Deathblade"
  },
  {
      id: '2',
      url: "https://www.mobafire.com/images/tft/set7/item/icon/giant-slayer.png",
      alt: "Giant Slayer" 
  },
  {
      id: '3',
      url: "https://www.mobafire.com/images/tft/set7/item/icon/edge-of-night.png",
      alt: "Edge of Night" 
  },
  {
      id: '4',
      url: "https://www.mobafire.com/images/tft/set7/item/icon/hextech-gunblade.png",
      alt: "Hextech Gunblade" 
  },
  {
      id: '5',
      url: "https://www.mobafire.com/images/tft/set7/item/icon/bloodthirster.png",
      alt: "Bloodthirster" 
  },
  {
      id: '6',
      url: "https://www.mobafire.com/images/tft/set7/item/icon/spear-of-shojin.png",
      alt: "Spear of Shojin" 
  },
  {
      id: '7',
      url: "https://www.mobafire.com/images/tft/set7/item/icon/zekes-herald.png",
      alt: "Zeke's Herald" 
  },
  {
      id: '8',
      url: "https://www.mobafire.com/images/tft/set7/item/icon/infinity-edge.png",
      alt: "Infinity Edge" 
  },
  {
    id: '9',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/rapid-firecannon.png",
    alt: "Rapid Firecannon" 
  },
  {
    id: '10',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/titans-resolve.png",
    alt: "Titan's Resolve" 
  },
  {
    id: '11',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/guinsoos-rageblade.png",
    alt: "Guinsoo's Rageblade" 
  },
  {
    id: '12',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/runaans-hurricane.png",
    alt: "Runaan's Hurricane" 
  },
  {
    id: '13',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/statikk-shiv.png",
    alt: "Statikk Shiv" 
  },
  {
    id: '14',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/zzrot-portal.png",
    alt: "Zz'Rot Portal" 
  },
  {
    id: '15',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/last-whisper.png",
    alt: "Last Whisper" 
  },
  {
    id: '16',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/bramble-vest.png",
    alt: "Bramble Vest" 
  },
  {
    id: '17',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/locket-of-the-iron-solari.png",
    alt: "Locket of the Iron Solari" 
  },
  {
    id: '18',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/gargoyle-stoneplate.png",
    alt: "Gargoyle Stoneplate" 
  },
  {
    id: '19',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/protectors-vow.png",
    alt: "Protector's Vow" 
  },
  {
    id: '20',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/sunfire-cape.png",
    alt: "Sunfire Cape" 
  },
  {
    id: '21',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/shroud-of-stillness.png",
    alt: "Shroud of Stillness" 
  },
  {
    id: '22',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/rabadons-deathcap.png",
    alt: "Rabadon's Deathcap" 
  },
  {
    id: '23',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/ionic-spark.png",
    alt: "Ionic Spark" 
  },
  {
    id: '24',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/archangels-staff.png",
    alt: "Archangel's Staff" 
  },
  {
    id: '25',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/morellonomicon.png",
    alt: "Morellonomicon" 
  },
  {
    id: '26',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/jeweled-gauntlet.png",
    alt: "Jeweled Gauntlet" 
  },
  {
    id: '27',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/dragons-claw.png",
    alt: "Dragon's Claw" 
  },
  {
    id: '28',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/chalice-of-power.png",
    alt: "Chalice of Power" 
  },
  {
    id: '29',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/zephyr.png",
    alt: "Zephyr" 
  },
  {
    id: '30',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/quicksilver.png",
    alt: "Quick Silver" 
  },
  {
    id: '31',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/blue-buff.png",
    alt: "Blue Buff" 
  },
  {
    id: '32',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/redemption.png",
    alt: "Redemption" 
  },
  {
    id: '33',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/hand-of-justice.png",
    alt: "Hand of Justice" 
  },
  {
    id: '34',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/warmogs-armor.png",
    alt: "Warmog's Armor" 
  },
  {
    id: '35',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/banshees-claw.png",
    alt: "Banshee's Claw" 
  },
  {
    id: '36',
    url: "https://www.mobafire.com/images/tft/set7/item/icon/thiefs-gloves.png",
    alt: "Theif's Gloves" 
  },
  
]

export function Item(props) {
  const { id } = props;

  const style = {
    width: 100,
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid black",
    backgroundImage: `url("${itemList[(parseInt(id)-1)].url}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'grey',
    margin: '0',
  };

  console.log(parseInt(id) - 1)
  console.log(itemList[(parseInt(id)-1)].url);


  return <div style={style}></div>;
}

export function SortableItem(props) {
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
      <Item id={props.id} />
    </div>
  );
}

