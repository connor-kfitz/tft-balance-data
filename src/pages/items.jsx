import React, { useState } from "react";
import "../styles/items.css"

import NerfItem from "../components/NerfItem";
import NeutralItem from "../components/NeutralItem";
import BuffItem from "../components/BuffItem";
import Item from "../components/item";

import {
    DndContext,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors
  } from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import { arrayMove, insertAtIndex, removeAtIndex } from "../utils/array";



const ItemList = [
    {
        id: 1,
        url: "https://www.mobafire.com/images/tft/set7/item/icon/deathblade.png",
        alt: "Deathblade"
    },
    {
        id: 2,
        url: "https://www.mobafire.com/images/tft/set7/item/icon/giant-slayer.png",
        alt: "Giant Slayer" 
    },
    {
        id: 3,
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

const [items, setItems] = useState({
    group1: ["1", "2", "3"],
    group2: ["4", "5", "6"],
    group3: ["7", "8", "9"]
    });

const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates
    })
    );

const handleDragOver = ({ over, active }) => {
    const overId = over?.id;

    if (!overId) {
        return;
    }

    const activeContainer = active.data.current.sortable.containerId;
    const overContainer = over.data.current?.sortable.containerId;

    if (!overContainer) {
        return;
    }

    if (activeContainer !== overContainer) {
        setItems((items) => {
        const activeIndex = active.data.current.sortable.index;
        const overIndex = over.data.current?.sortable.index || 0;

        return moveBetweenContainers(
            items,
            activeContainer,
            activeIndex,
            overContainer,
            overIndex,
            active.id
        );
        });
    }
    };

    const handleDragEnd = ({ active, over }) => {
        if (!over) {
          return;
        }
    
        if (active.id !== over.id) {
          const activeContainer = active.data.current.sortable.containerId;
          const overContainer = over.data.current?.sortable.containerId || over.id;
          const activeIndex = active.data.current.sortable.index;
          const overIndex = over.data.current?.sortable.index || 0;
    
          setItems((items) => {
            let newItems;
            if (activeContainer === overContainer) {
              newItems = {
                ...items,
                [overContainer]: arrayMove(
                  items[overContainer],
                  activeIndex,
                  overIndex
                )
              };
            } else {
              newItems = moveBetweenContainers(
                items,
                activeContainer,
                activeIndex,
                overContainer,
                overIndex,
                active.id
              );
            }
    
            return newItems;
          });
        }
      };

    const moveBetweenContainers = (
    items,
    activeContainer,
    activeIndex,
    overContainer,
    overIndex,
    item
    ) => {
    return {
        ...items,
        [activeContainer]: removeAtIndex(items[activeContainer], activeIndex),
        [overContainer]: insertAtIndex(items[overContainer], overIndex, item)
    };
    };

    const containerStyle = { display: "flex" };

return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
    >
      <div style={containerStyle}>
        {Object.keys(items).map((group) => (
          <NeutralItem id={group} items={items[group]} key={group} />
        ))}
      </div>
    </DndContext>
);

}