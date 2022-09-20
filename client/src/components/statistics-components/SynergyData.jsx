import React from "react";
import "../../styles/statistics.css"

import synergyList from "../../data-sets/synergyData";

export default function SynergyData(props) {
    const { synergyData } = props;

    function checkZero(input){
        if ((input.nerfCount + input.neutralCount + input.buffCount) === 0){
            return true;
        }
    }
    
    return(
        <div id="itemStatCardCont" className="flex">
            {synergyData.map((synergy) => (
                <div className="itemStatCard flex" key={synergy.id}>
                    <div className="itemCardImage" style={{backgroundImage: `url("${synergyList[(synergy.id - 1)].url}")`}} ></div>
                            {(checkZero(synergy)) ? (
                                
                                <div className="itemCardData flex">
                                    <div className="itemNerfInfo flex">0% Nerf</div>
                                    <div className="itemNeutralInfo flex">0% Neutral</div>
                                    <div className="itemBuffInfo flex">0% Buff</div>
                                </div>
                            ) : (
                                <div className="itemCardData flex">
                                    <div className="itemNerfInfo flex">{Math.trunc((synergy.nerfCount / (synergy.nerfCount + synergy.neutralCount + synergy.buffCount) * 100))}% Nerf</div>
                                    <div className="itemNeutralInfo flex">{Math.trunc((synergy.neutralCount / (synergy.nerfCount + synergy.neutralCount + synergy.buffCount) * 100))}% Balanced</div>
                                    <div className="itemBuffInfo flex">{Math.trunc((synergy.buffCount / (synergy.nerfCount + synergy.neutralCount + synergy.buffCount) * 100))}% Buff</div>
                                </div>
                            )}
                </div>
            ))} 
        </div>
    )
}