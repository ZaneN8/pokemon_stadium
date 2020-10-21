import React, { useState } from "react";
import Pokedex from "../data/PokeDex";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState(Pokedex);

  const importPokemon = () => {};

  return (
    <>
      <div>{pokemon.name}</div>
    </>
  );
};

export default PokemonList;
