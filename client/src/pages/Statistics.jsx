import React, { useState } from "react";
import "../styles/statistics.css"

import ItemContainer from "../components/statistics-components/ItemContainer";
import SynergyContainer from "../components/statistics-components/SynergyContainer";

export default function Statistics() {

    const [currentPage, setCurrentPage] = useState('Items')

    function handleChange() {
        if(currentPage === "Items"){
            setCurrentPage('Synergies')
        } else {
            setCurrentPage('Items')
        }
    }

    function updatePage() {
        window.location.reload();
    }

    return (
        <div id="statsContainer">
            <div id="statsTab"className="flex">
                <label htmlFor="stats">
                    <select id="stats" onChange={handleChange}>
                        <option id="itemOption">Items</option>
                        <option id="synergyOption">Synergies</option>
                    </select>
                </label>

                <button id="updateButton" onClick={updatePage}>Update Results</button>
            </div>

            {(currentPage === 'Items') ? (
                <ItemContainer/>
            ) : (
                <SynergyContainer/>
            )}
        </div>
    );
}