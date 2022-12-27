import React from "react";

import './nav.css'
export default function NavBar(){
    return(
        <nav>
            <ul>
                <li>
                    <button>Assassinos</button>
                </li>
                <li>
                    <button>Lutadores</button>
                </li>
                <li>
                    <button>Magos</button>
                </li>
                <li>
                    <button>Suportes</button>
                </li>
                <li>
                    <button>Tanques</button>
                </li>
            </ul>
        </nav>
    )
}