import React from "react";
import "../styles/items.css"

import { useDroppable } from "@dnd-kit/core";

export default function NerfItem() {

    const { isOver, setNodeRef } = useDroppable({
        id: 'droppable',
    });

    const style = {
        border: isOver ? 'green' : undefined,
    };

    return (
        
        <div id="nerfCol" className="itemCol" ref={setNodeRef} style={style}>


        </div>
    );
}