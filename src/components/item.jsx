import React from "react";
import {useDrag} from "react-dnd";


export default function Picture({url, alt, id}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "image",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return (
        <img ref={drag} src={url} alt={alt} width="73px" style={{border: isDragging ? "5px solid pink" : "0px"}}/>
    );
}