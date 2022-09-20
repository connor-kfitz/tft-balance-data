import React from "react";
import "../../styles/statistics.css"

import itemList from "../../data-sets/itemData";

export default function ItemData(props) {
    const { itemData } = props;

    function checkZero(input){
        if ((input.nerfCount + input.neutralCount + input.buffCount) === 0){
            return true;
        }
    }

    return(
        <div id="itemStatCardCont" className="flex">
            {itemData.map((item) => (
                <div className="itemStatCard flex" key={item.id}>
                    <div className="itemCardImage" style={{backgroundImage: `url("${itemList[(item.id - 1)].url}")`}} ></div>
                            {(checkZero(item)) ? (
                                
                                <div className="itemCardData flex">
                                    <div className="itemNerfInfo flex">0% Nerf</div>
                                    <div className="itemNeutralInfo flex">0% Neutral</div>
                                    <div className="itemBuffInfo flex">0% Buff</div>
                                </div>
                            ) : (
                                <div className="itemCardData flex">
                                    <div className="itemNerfInfo flex">{Math.trunc((item.nerfCount / (item.nerfCount + item.neutralCount + item.buffCount) * 100))}% Nerf</div>
                                    <div className="itemNeutralInfo flex">{Math.trunc((item.neutralCount / (item.nerfCount + item.neutralCount + item.buffCount) * 100))}% Balanced</div>
                                    <div className="itemBuffInfo flex">{Math.trunc((item.buffCount / (item.nerfCount + item.neutralCount + item.buffCount) * 100))}% Buff</div>
                                </div>
                            )}
                </div>
            ))} 
        </div>
    )
}