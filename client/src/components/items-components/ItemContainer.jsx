import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";

import { SortableItem } from "./SortableItem";

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 90px)",
  background: "#2d2d30",
  padding: 20,
  gridGap: 0,
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
          <SortableItem key={id} id={id} url={props.url}/>
        ))}
      </div>
    </SortableContext>
  );
}