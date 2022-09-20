import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/synergies.css";

import { DndContext, DragOverlay, closestCorners, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import SynergyContainer from "../components/synergies-components/SynergyContainer";
import { Synergy } from "../components/synergies-components/SortableSynergy";

import { useMutation } from "@apollo/client";
import { NERF_SYNERGY_INCREMENT, NEUTRAL_SYNERGY_INCREMENT, BUFF_SYNERGY_INCREMENT } from "../utils/mutations";
import { QUERY_SYNERGIES } from "../utils/queries"

const wrapperStyle = {
    display: "flex",
    flexDirection: "row"
  };

export default function Synergies() {

  const [nerfSynergy] = useMutation(NERF_SYNERGY_INCREMENT, {
    refetchQueries:[
      {
        query: QUERY_SYNERGIES
      }
    ] 
  });
  const [neutralSynergy] = useMutation(NEUTRAL_SYNERGY_INCREMENT, {
    refetchQueries:[
      {
        query: QUERY_SYNERGIES
      }
    ] 
});
  const [buffSynergy] = useMutation(BUFF_SYNERGY_INCREMENT, {
    refetchQueries:[
      {
        query: QUERY_SYNERGIES
      }
    ] 
}); 

  const navigate = useNavigate()


  async function nerfSynergyFunction(input) {

    try{
      const { data } = await nerfSynergy({
        variables: {
          synergyId: parseInt(input),
        }
      })
    } catch (err) {
      console.error(err);
    }
  }

  async function neutralSynergyFunction(input) {

    try{
      const { data } = await neutralSynergy({
        variables: {
          synergyId: parseInt(input),
        }
      })
    } catch (err) {
      console.error(err);
    }
  }

  async function buffSynergyFunction(input) {

    try{
      const { data } = await buffSynergy({
        variables: {
          synergyId: parseInt(input),
        }
      })
    } catch (err) {
      console.error(err);
    }
  }

  function handleSubmit() {
    
    synergies.NerfCont.map((synergy) => {
      nerfSynergyFunction(synergy)
    })

    synergies.NeutralCont.map((synergy) => {
      neutralSynergyFunction(synergy)
    })

    synergies.BuffCont.map((synergy) => {
      buffSynergyFunction(synergy)
    })

    navigate(`/statistics`);

  }

    const [synergies, setSynergies] = useState({
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
                <div id="sortSynergyCont" className="flex">
                    <div className="sortSynergyInnerCont">
                    <h1>Nerf Synergies</h1>
                    <div id="nerfSynergyCont" className="synergyCont">
                        <SynergyContainer id="NerfCont" synergies={synergies.NerfCont} />
                    </div>
                    </div>
                    <div className="sortSynergyInnerCont">
                    <h1>Balanced Synergies</h1>
                    <div id="neutralSynergyCont" className="synergyCont">
                        <SynergyContainer id="NeutralCont" synergies={synergies.NeutralCont} />
                    </div >
                    </div>
                    <div className="sortSynergyInnerCont">
                    <h1>Buff Synergies</h1>
                    <div id="buffSynergyCont" className="synergyCont">
                        <SynergyContainer id="BuffCont" synergies={synergies.BuffCont} />
                    </div>
                    </div>
                    <DragOverlay>{activeId ? <Synergy id={activeId} /> : null}</DragOverlay>
                </div>
                </DndContext>
            </div>
            <div id="synergySubmitCont">
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );

    function findContainer(id) {
        if (id in synergies) {
          return id;
        }
  
        return Object.keys(synergies).find((key) => synergies[key].includes(id));
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
  
      setSynergies((prev) => {
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
            synergies[activeContainer][activeIndex],
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
  
      const activeIndex = synergies[activeContainer].indexOf(active.id);
      const overIndex = synergies[overContainer].indexOf(overId);
  
      if (activeIndex !== overIndex) {
        setSynergies((synergies) => ({
          ...synergies,
          [overContainer]: arrayMove(synergies[overContainer], activeIndex, overIndex)
        }));
      }
  
      setActiveId(null);
    }
}