import React, { useState } from "react";
import "../styles/items.css"

import {
    DndContext,
    DragOverlay,
    closestCorners,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import Container from "../components/Container";
import { Item } from "../components/SortableItem";

const wrapperStyle = {
    display: "flex",
    flexDirection: "row"
  };
  
  const defaultAnnouncements = {
    onDragStart(id) {
      console.log(`Picked up draggable item ${id}.`);
    },
    onDragOver(id, overId) {
      if (overId) {
        console.log(
          `Draggable item ${id} was moved over droppable area ${overId}.`
        );
        return;
      }
  
      console.log(`Draggable item ${id} is no longer over a droppable area.`);
    },
    onDragEnd(id, overId) {
      if (overId) {
        console.log(
          `Draggable item ${id} was dropped over droppable area ${overId}`
        );
        return;
      }
  
      console.log(`Draggable item ${id} was dropped.`);
    },
    onDragCancel(id) {
      console.log(`Dragging was cancelled. Draggable item ${id} was dropped.`);
    }
  };
  
export default function Items() {
    const [items, setItems] = useState({
        root: ["1", "2", "3"],
        container1: ["4", "5", "6"],
        container2: ["7", "8", "9"],
    });
    const [activeId, setActiveId] = useState();
    
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates
        })
    );

    console.log(items)

return (

    <div id="sortCont">
        <div style={wrapperStyle}>
        <DndContext
        announcements={defaultAnnouncements}
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
            <Container id="root" items={items.root} />
            <Container id="container1" items={items.container1} />
            {/* <Container id="container2" items={items.container2} /> */}
            <DragOverlay>{activeId ? <Item id={activeId} /> : null}</DragOverlay>
        </DndContext>
    </div>
    </div>
);

function findContainer(id) {
    if (id in items) {
      return id;
    }

    return Object.keys(items).find((key) => items[key].includes(id));
  }

  function handleDragStart(event) {
    const { active } = event;
    const { id } = active;

    setActiveId(id);
  }

  function handleDragOver(event) {
    const { active, over, draggingRect } = event;
    const { id } = active;
    const { id: overId } = over;

    // Find the containers
    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setItems((prev) => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];

      // Find the indexes for the items
      const activeIndex = activeItems.indexOf(id);
      const overIndex = overItems.indexOf(overId);

      let newIndex;
      if (overId in prev) {
        // We're at the root droppable of a container
        newIndex = overItems.length + 1;
      } else {
        const isBelowLastItem =
          over &&
          overIndex === overItems.length - 1 &&
          draggingRect.offsetTop > over.rect.offsetTop + over.rect.height;

        const modifier = isBelowLastItem ? 1 : 0;

        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      }

      return {
        ...prev,
        [activeContainer]: [
          ...prev[activeContainer].filter((item) => item !== active.id)
        ],
        [overContainer]: [
          ...prev[overContainer].slice(0, newIndex),
          items[activeContainer][activeIndex],
          ...prev[overContainer].slice(newIndex, prev[overContainer].length)
        ]
      };
    });
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    const { id } = active;
    const { id: overId } = over;

    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    const activeIndex = items[activeContainer].indexOf(active.id);
    const overIndex = items[overContainer].indexOf(overId);

    if (activeIndex !== overIndex) {
      setItems((items) => ({
        ...items,
        [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex)
      }));
    }

    setActiveId(null);
  }

}

// [
//     {
//         id: '1',
//         url: "https://www.mobafire.com/images/tft/set7/item/icon/deathblade.png",
//         alt: "Deathblade"
//     },
//     {
//         id: '2',
//         url: "https://www.mobafire.com/images/tft/set7/item/icon/giant-slayer.png",
//         alt: "Giant Slayer" 
//     },
//     {
//         id: '3',
//         url: "https://www.mobafire.com/images/tft/set7/item/icon/edge-of-night.png",
//         alt: "Edge of Night" 
//     },
//     {
//         id: '4',
//         url: "https://www.mobafire.com/images/tft/set7/item/icon/hextech-gunblade.png",
//         alt: "Hextech Gunblade" 
//     },
//     {
//         id: '5',
//         url: "https://www.mobafire.com/images/tft/set7/item/icon/bloodthirster.png",
//         alt: "Bloodthirster" 
//     },
//     {
//         id: '6',
//         url: "https://www.mobafire.com/images/tft/set7/item/icon/spear-of-shojin.png",
//         alt: "Spear of Shojin" 
//     },
//     {
//         id: '7',
//         url: "https://www.mobafire.com/images/tft/set7/item/icon/zekes-herald.png",
//         alt: "Zeke's Herald" 
//     },
//     {
//         id: '8',
//         url: "https://www.mobafire.com/images/tft/set7/item/icon/infinity-edge.png",
//         alt: "Infinity Edge" 
//     }
// ]