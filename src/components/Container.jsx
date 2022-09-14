import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";

import { SortableItem } from "./SortableItem";

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  background: "#dadadd",
  padding: 10,
  margin: 10,
  gridGap: 0,
  flex: 1
};

export default function Container(props) {
  const { id, items } = props;

  const { setNodeRef } = useDroppable({
    id
  });

    return (
      <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
        <div ref={setNodeRef} style={containerStyle}>
          {items.map((id) => (
            <SortableItem key={id} id={id} />
          ))}
        </div>
      </SortableContext>
    );
 
  }