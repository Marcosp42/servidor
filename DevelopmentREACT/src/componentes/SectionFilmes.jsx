import React from "react";
import './SectionFilmes.css'
export default () =>{
    return(
        <div className="sectionFilmes">
            
            <div className="text">
                <h2>Filmes</h2>
                <button>Ver tudo</button>
            </div>

            <div className="divisoria"></div>

            <div className="container">
                <div className="cardFilme"></div>
                <div className="cardFilme"></div>
                <div className="cardFilme"></div>
                <div className="cardFilme"></div>
                <div className="cardFilme"></div>
            </div>
        </div>
    )
}