import React from "react";

import PokemonCardDetails from "./PokemonCardDetails"

function PokemonCardContainer({pokemon}){

    const renderPokemonCards=pokemon.map((onePokemon)=>(
        <PokemonCardDetails 
        key={onePokemon.id}
        id={onePokemon.id}
        // pokemon={pokemon}
        name={onePokemon.name}
        image={onePokemon.image}
        comment={onePokemon.comment}
        pokedexNo={onePokemon["pokedex-no"]}
        pokemonType={onePokemon["pokemon-type"]}
        cardRarity={onePokemon["card-rarity"]}
        />
    ))

    return (

        <div className="pokemonCards"> 
           {renderPokemonCards}
        </div>
            
    )
}

export default PokemonCardContainer