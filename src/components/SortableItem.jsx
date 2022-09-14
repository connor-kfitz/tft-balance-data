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
    }
]

export function Item(props) {
  const { id } = props;

  const style = {
    width: 100,
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    backgroundImage: `url("${itemList[(parseInt(id)-1)].url}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'grey'
  };

  console.log(parseInt(id) - 1)
  console.log(itemList[(parseInt(id)-1)].url);


  return <div style={style}>{id}</div>;
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

