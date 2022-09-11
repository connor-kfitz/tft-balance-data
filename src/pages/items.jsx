import React from "react";
import "../styles/items.css"
import DragDrop from '../components/dragdrop'


export default function Items() {

    return (
        <section>
            <h1>Items</h1>
                <div id="itemBalanceCont">
                    
                </div>
                <DragDrop/>
        </section>
    );
}