import React, { useEffect } from "react";

import './nav.css'
export default function NavBar({setActive}){
    
    return(
        <nav>
            <ul>
                <li>
                    <button  onClick={() => setActive("Assassin")}>Assassinos</button>
                </li>
                <li>
                    <button  onClick={() => setActive("Fighter")}>Lutadores</button>
                </li>
                <li>
                    <button onClick={() => setActive("Mage")}>Magos</button>
                </li>
                <li>
                    <button onClick={() => setActive("Support")}>Suportes</button>
                </li>
                <li>
                    <button onClick={() => setActive("Tank")}>Tanques</button>
                </li>
            </ul>
        </nav>
    )
}