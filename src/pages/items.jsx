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
        NerfCont: ["1", "2", "3", "4", "5", "6", "7", "8", "10", "11", "12", "13"],
        NeutralCont: ["14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"],
        BuffCont: [],
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

        <div style={wrapperStyle}>
        <DndContext
        announcements={defaultAnnouncements}
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
    <div id="sortItemCont" className="flex">

            <div id="nerfItemCont" className="itemCont">
                <h1>Nerf Items</h1>
                <Container id="NerfCont" items={items.NerfCont} />
            </div>
            <div id="neutralItemCont" className="itemCont">
                <h1>Balanced Items</h1>
                <Container id="NeutralCont" items={items.NeutralCont} />
            </div >
            <div id="buffItemCont" className="itemCont">
                <h1>Buff Items</h1>
                <Container id="BuffCont" items={items.BuffCont} />
            </div>
            <DragOverlay>{activeId ? <Item id={activeId} /> : null}</DragOverlay>
            </div>

        </DndContext>
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

// "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"