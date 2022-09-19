import React from "react";
import "../../styles/statistics.css"
import SynergyData from "./SynergyData";

import { useQuery } from "@apollo/client";
import { QUERY_SYNERGIES } from "../../utils/queries";

export default function SynergyContainer() {

    const { loading, data } = useQuery(QUERY_SYNERGIES);

    const synergies = data?.synergies || [];

    return (
        <div>
            {(loading) ? (
                <div>Loading...</div>
            ) : (
                <SynergyData synergyData={synergies}/>
            )}
        </div>
    );
}