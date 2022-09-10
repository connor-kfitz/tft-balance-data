import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css"

export default function Nav() {

    return (
        <nav>
            <div id="innerNav" className="flex">
                <div id="navTitleCont">
                    <Link to="/" id="link">
                        <h1>TFT Data</h1>
                    </Link>
                </div>
                <div id="navLinkCont" className="flex">

                    <Link to="/items" id="link">
                        <h1>Items</h1>
                    </Link>
                    
                    <Link to="/traits" id="link">
                        <h1>Traits</h1>
                    </Link>
                    
                    <Link to="/statistics" id="link">
                        <h1>Statistics</h1>
                    </Link>
                </div>
            </div>
        </nav>
    );
}