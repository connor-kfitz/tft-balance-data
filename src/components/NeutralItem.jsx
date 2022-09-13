import React from "react";
import "../styles/items.css"

import { useDroppable } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import Item from "../components/item";

export default function NeutralItem({id, items}) {

const { setNodeRef } = useDroppable({ id });

  const droppableStyle = {
    padding: "20px 10px",
    border: "1px solid black",
    borderRadius: "5px",
    minWidth: 110
  };

    return (

        <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
            <div ref={setNodeRef} style={droppableStyle}>
                {items.map((item) => (
                    <Item key={item} id={item} />
                ))}
            </div>
        </SortableContext>

    );
}

{/* <div id="neutCol" className="itemCol">
</div> */}