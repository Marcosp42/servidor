import React from "react";
import './NavigationHome.css'

export default () => {
    return(
    <div className="NavigationHome">
        <ul>
            <button>Inicio</button>
            <button>Filmes</button>
            <button>Series</button>
            <button>Genêro</button>
        </ul>

        <div className="search">
            <input type="text" />
            <button></button>
        </div>
    </div>
    )
}