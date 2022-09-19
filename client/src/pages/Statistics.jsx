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

    return (
        <div id="statsContainer">
            <label for="stats">
                <select id="stats" onChange={handleChange}>
                    <option id="itemOption">Items</option>
                    <option id="synergyOption">Synergies</option>
                </select>
            </label>


            {(currentPage === 'Items') ? (
                <ItemContainer/>
            ) : (
                <SynergyContainer/>
            )}
        </div>
    );
}