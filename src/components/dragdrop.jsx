import React, {useState} from "react";
import Picture from "./picture";
import {useDrop} from "react-dnd"
import "../styles/dragdrop.css"

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

export default function DragDrop() {

    const [nerfItem, setNerfItem] = useState([])
    const [neutItem, setNeutItem] = useState([])

    

    const [{isOver}, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addItemToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    const addItemToBoard = (id) => {
        console.log('First')
        const itemList = ItemList.filter((item) => id === item.id)
        setNerfItem([itemList[0]]);
    };

    const [{isOverTwo}, dropTwo] = useDrop(() => ({
        accept: "image",
        dropTwo: (item) => addItemToNeut(item.id),
        collect: (monitor) => ({
            isOverTwo: !!monitor.isOver(),
        }),
    }))

    const addItemToNeut = (id) => {
        console.log("Test")
        const itemList = ItemList.filter((item) => id === item.id)
        setNeutItem([itemList[0]]);
    };

    

    return (
        <>
        <div className="pictures"> {ItemList.map((item) => {
            return ( <Picture url={item.url} id={item.id} /> )
            })} </div>

        <div className="nerfItem" ref={drop}>
            <h1>Nerf</h1>
            {nerfItem.map((item) => {
                return ( <Picture url={item.url} id={item.id} /> )

            })}
        </div>

        <div className="neutItem" ref={dropTwo}>
        <h1>Neut</h1>
            {neutItem.map((item) => {
                return ( <Picture url={item.url} id={item.id} /> )

            })}
        </div>


        <div className="buffItem"></div>
        </>
        
    );
}

