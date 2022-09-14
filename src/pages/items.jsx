import React, { useState } from "react";
import "../styles/items.css"

import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    rectSortingStrategy,
} from '@dnd-kit/sortable';

import { SortableItem } from "../components/SortableItem";
  

const ItemList = [
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
        id: 4,
        url: "https://www.mobafire.com/images/tft/set7/item/icon/hextech-gunblade.png",
        alt: "Hextech Gunblade" 
    },
    {
        id: 5,
        url: "https://www.mobafire.com/images/tft/set7/item/icon/bloodthirster.png",
        alt: "Bloodthirster" 
    },
    {
        id: 6,
        url: "https://www.mobafire.com/images/tft/set7/item/icon/spear-of-shojin.png",
        alt: "Spear of Shojin" 
    },
    {
        id: 7,
        url: "https://www.mobafire.com/images/tft/set7/item/icon/zekes-herald.png",
        alt: "Zeke's Herald" 
    },
    {
        id: 8,
        url: "https://www.mobafire.com/images/tft/set7/item/icon/infinity-edge.png",
        alt: "Infinity Edge" 
    }
]

export default function Items() {
    const [items, setItems] = useState([
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
      ]);

      const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
          coordinateGetter: sortableKeyboardCoordinates,
        }),
      );

return (

    <div id="sortCont">
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
            items={items.map(({id}) => id)}
            strategy={rectSortingStrategy}
            >
                <Grid>
                    {items.map((item) => (
                    <SortableItem key={item.id} id={item.id} url={item.url} />
                    ))}
                </Grid>
            </SortableContext>
        </DndContext>
    </div>
);

function handleDragEnd(event) {
    const {active, over} = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(({id}) => id === active.id);
        const newIndex = items.findIndex(({id}) => id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}

function Grid({children}) {
  return (
    <div
      style={{
        display: 'inline-grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: 10,
      }}
    >
      {children}
    </div>
  );

}