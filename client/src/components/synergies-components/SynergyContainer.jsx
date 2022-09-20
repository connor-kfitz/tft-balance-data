import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";

import { SortableSynergy } from "./SortableSynergy";

const containerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 90px)",
  background: "#2d2d30",
  padding: 20,
  gridGap: 0,
};

export default function Container(props) {
  const { id, synergies } = props;

  const { setNodeRef } = useDroppable({
    id
  });

  return (
    <SortableContext id={id} items={synergies} strategy={rectSortingStrategy}>
      <div ref={setNodeRef} style={containerStyle}>
        {synergies.map((id) => (
          <SortableSynergy key={id} id={id} url={props.url}/>
        ))}
      </div>
    </SortableContext>
  );
}