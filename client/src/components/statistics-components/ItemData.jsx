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

    function trimNumber(input){
        const string = input.toString();
        return string.slice(0,2);
    }

    return(
        <div id="itemStatCardCont" className="flex">
            {itemData.map((item) => (
                <div className="itemStatCard flex">
                    <div className="itemCardImage" style={{backgroundImage: `url("${itemList[(item.id - 1)].url}")`}} ></div>
                            {(checkZero(item)) ? (
                                
                                <div className="itemCardData flex">
                                    <div className="itemNerfInfo flex">0% Nerf</div>
                                    <div className="itemNeutralInfo flex">0% Neutral</div>
                                    <div className="itemBuffInfo flex">0% Buff</div>
                                </div>
                            ) : (
                                <div className="itemCardData flex">
                                    <div className="itemNerfInfo flex">{trimNumber((item.nerfCount / (item.nerfCount + item.neutralCount + item.buffCount) * 100))}% Nerf</div>
                                    <div className="itemNeutralInfo flex">{trimNumber((item.neutralCount / (item.nerfCount + item.neutralCount + item.buffCount) * 100))}% Balanced</div>
                                    <div className="itemBuffInfo flex">{trimNumber((item.buffCount / (item.nerfCount + item.neutralCount + item.buffCount) * 100))}% Buff</div>
                                </div>
                            )}
                </div>
            ))} 
        </div>
    )
}