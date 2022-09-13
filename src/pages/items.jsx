import React, { useState } from "react";
import "../styles/items.css"
import { useDrop } from "react-dnd";

import Item from "../components/item";

const ItemList = [
    {
        id: 1,
        url: "https://www.mobafire.com/images/tft/set7/item/icon/deathblade.png",
        alt: "Deathblade"
    },
    {
        id: 2,
        url: "https://www.mobafire.com/images/tft/set7/item/icon/giant-slayer.png",
        alt: "Giant Slayer" 
    },
    {
        id: 3,
        url: "https://www.mobafire.com/images/tft/set7/item/icon/edge-of-night.png",
        alt: "Edge of Night" 
    },
    {
        id: 4,
        url: "https://www.mobafire.com/images/tft/set7/item/icon/hextech-gunblade.png",
        alt: "Hextech Gunblade" 
    },
    {
        id: 5,
        url: "https://www.mobafire.com/images/tft/set7/item/icon/bloodthirster.png",
        alt: "Bloodthirster" 
    },
    {
        id: 6,
        url: "https://www.mobafire.com/images/tft/set7/item/icon/spear-of-shojin.png",
        alt: "Spear of Shojin" 
    },
    {
        id: 7,
        url: "https://www.mobafire.com/images/tft/set7/item/icon/zekes-herald.png",
        alt: "Zeke's Herald" 
    },
    {
        id: 8,
        url: "https://www.mobafire.com/images/tft/set7/item/icon/infinity-edge.png",
        alt: "Infinity Edge" 
    }
]

export default function Items() {

    
    const [board, setBoard] = useState([])

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (moniotr) => ({
            isOver: !!moniotr.isOver(),
        }),
    }));

    const addImageToBoard = (id) => {
        const itemList = ItemList.filter((item) => id === item.id);


        setBoard((board) => [...board, itemList[0]]);
    }

    return (
        <section>
            <h1>♘</h1>
                <div id="itemBalanceCont" className="flex">
                    <div id="nerfCol" className="itemCol">
                        <h1>Nerf</h1>
                        
                    </div>

                            <div id="neutCol" className="itemCol">
                                <h1>Neutral</h1>
                                {ItemList.map((item) => {
                                    return (
                                            <Item url={item.url} alt={item.alt} id={item.id}/>
                                    )
                                })}
                            </div>

                    <div id="buffCol" className="itemCol" ref={drop}>
                        <h1>Buff</h1>
                            {board.map((item) => {
                                return ( <Item url={item.url} alt={item.alt}/> )
                            })}
                    </div>
                </div>
        </section>
    );
}