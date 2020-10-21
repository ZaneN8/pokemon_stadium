import Axios from "axios";
import React, { useEffect, useState } from "react";

const PokemonAPI = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);

  const getPokemon = async () => {
    // const i = (1..150)
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/12`;
      let res = await Axios.get(url);
      setPokemon(res.data);
      setPokemonType(res.data.types[0].type.name);
    } catch (err) {
      alert("error API call");
      console.log(err);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);
  console.log(pokemon);

  return (
    <>
      <div>POKEMON API CALL</div>
      <div>
        <img src={pokemon.sprites} />
        <div>
          {pokemon.id}: {pokemon.name}
        </div>
        <div>{pokemon.height}</div>
        <div>{pokemon.types}</div>
      </div>
    </>
  );
};

export default PokemonAPI;
