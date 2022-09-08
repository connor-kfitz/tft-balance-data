import React from "react";
import "../styles/nav.css"

export default function Nav() {

    return (
        <nav>
            <div id="innerNav" className="flex">
                <div id="navTitleCont">
                    <h1>TFT Data</h1>
                </div>
                <div id="navLinkCont" className="flex">
                    <h1>Items</h1>
                    <h1>Traits</h1>
                    <h1>Statistics</h1>
                </div>
            </div>
        </nav>
    );
}