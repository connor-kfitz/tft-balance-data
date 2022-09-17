import React from "react";
import "../styles/statistics.css"

import { useQuery } from "@apollo/client";

import { QUERY_ITEMS } from "../utils/queries";

export default function Statistics() {

    const { loading, data } = useQuery(QUERY_ITEMS);

    const items = data?.items || [];

    console.log('First Bit')
    console.log(data)
    console.log(items);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ): (
                <div>Data {items[0].id}</div>
            )}
        </div>
    );
}