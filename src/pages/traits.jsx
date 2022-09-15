import React, { useState } from "react";
import "../styles/traits.css";

import { DndContext, DragOverlay, closestCorners, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import TraitContainer from "../components/TraitContainer";
import { Trait } from "../components/SortableTrait";

const wrapperStyle = {
    display: "flex",
    flexDirection: "row"
  };

export default function Traits() {

    const [traits, setTraits] = useState({
        NerfCont: [],
        NeutralCont: ["1", "2", "3", "4", "5", "6", "7", "8", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
        BuffCont: [],
    });

    const [activeId, setActiveId] = useState();

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates
        })
    );

    return (
        <div>
            <div style={wrapperStyle}>
                <DndContext
                sensors={sensors}
                collisionDetection={closestCorners}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDragEnd={handleDragEnd}>
                <div id="sortTraitCont" className="flex">
                    <div className="sortTraitInnerCont">
                    <h1>Nerf Traits</h1>
                    <div id="nerfTraitCont" className="traitCont">
                        <TraitContainer id="NerfCont" traits={traits.NerfCont} />
                    </div>
                    </div>
                    <div className="sortTraitInnerCont">
                    <h1>Balanced Traits</h1>
                    <div id="neutralTraitCont" className="traitCont">
                        <TraitContainer id="NeutralCont" traits={traits.NeutralCont} />
                    </div >
                    </div>
                    <div className="sortTraitInnerCont">
                    <h1>Buff Traits</h1>
                    <div id="buffTraitCont" className="traitCont">
                        <TraitContainer id="BuffCont" traits={traits.BuffCont} />
                    </div>
                    </div>
                    <DragOverlay>{activeId ? <Trait id={activeId} /> : null}</DragOverlay>
                </div>
                </DndContext>
            </div>
            <div id="traitSubmitCont">
                <button>Submit</button>
            </div>
        </div>
    );

    function findContainer(id) {
        if (id in traits) {
          return id;
        }
  
        return Object.keys(traits).find((key) => traits[key].includes(id));
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
  
      const activeContainer = findContainer(id);
      const overContainer = findContainer(overId);
  
      if (
        !activeContainer ||
        !overContainer ||
        activeContainer === overContainer
      ) {
        return;
      }
  
      setTraits((prev) => {
        const activeItems = prev[activeContainer];
        const overItems = prev[overContainer];
  
        const activeIndex = activeItems.indexOf(id);
        const overIndex = overItems.indexOf(overId);
  
        let newIndex;
        if (overId in prev) {
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
            traits[activeContainer][activeIndex],
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
  
      const activeIndex = traits[activeContainer].indexOf(active.id);
      const overIndex = traits[overContainer].indexOf(overId);
  
      if (activeIndex !== overIndex) {
        setTraits((traits) => ({
          ...traits,
          [overContainer]: arrayMove(traits[overContainer], activeIndex, overIndex)
        }));
      }
  
      setActiveId(null);
    }
}