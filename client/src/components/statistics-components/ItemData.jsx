import React from "react";
import "../../styles/statistics.css"

export default function ItemData(props) {
    const { itemData } = props;
    console.log(itemData);

    const style ={
        width: 90,
        height: 90,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid black",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'grey',
        margin: '0',
      };

    return(
        <div>
            {itemData.map((item) => (
                <div style={style}>
                    {item.id}
                    {item.name}
                </div>
            ))}
        </div>
    )
}