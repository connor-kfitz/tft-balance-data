import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});

  const style = {
    width: 200,
    height: 200,
    padding: 20,
    border: '2px solid',
    backgroundImage: `url("${props.url}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'grey',
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
      <div ref={setNodeRef} style={style} {...attributes} {...listeners} />
    );
  };

