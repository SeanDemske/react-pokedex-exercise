import React from "react";
import "./Pokecard.css"
import "./anims.css"

const Pokecard = ({ id, name, type, base_experience }) => {

    return (
        <div className="Pokecard fade-in">
            <h1>{ name }</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={ name } />
            <p>Type: { type }</p>
            <p>EXP: { base_experience }</p>
        </div>
    )
}

export default Pokecard;