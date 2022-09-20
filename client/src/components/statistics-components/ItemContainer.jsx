import React from "react";
import "../../styles/statistics.css"
import ItemData from "./ItemData";

import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../../utils/queries";

export default function ItemContainer() {

    const { loading, data } = useQuery(QUERY_ITEMS);

    const items = data?.items || [];

    console.log(items);

    return (
        <div>
            {(loading) ? (
                <div>Loading...</div>
            ) : (
               <ItemData itemData={items}/> 
            )}
        </div>
    );
}