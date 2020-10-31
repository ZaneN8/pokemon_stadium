import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPokemon, selectPokemon } from "../redux/store";

const PokemonAPI = () => {
  const dispatch = useDispatch();
  const pokemon = useSelector(selectPokemon);
  // const [pokemon, setPokemon] = useState([]);
  const [generation, setGeneration] = useState([]);
  // const [pokemonType, setPokemonType] = useState();

  const getGeneration = async () => {
    try {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=151"; // `https://pokeapi.co/api/v2/generation/1`;
      let res = await Axios.get(url);
      const bob = await Promise.all(
        res.data.results.map(({ url }) => Axios.get(url))
      );
      console.log(res);
      setGeneration(res.data);
      // setPokemon(res.data.pokemon_species);
      dispatch(addPokemon(bob));
      // setPokemonType(res.data.types[0].type.name);
    } catch (err) {
      alert("error API call");
      console.log(err);
    }
  };

  useEffect(() => {
    getGeneration();
  }, []);

  return (
    <>
      <div>POKEMON API CALL</div>
      {JSON.stringify(pokemon)}
      {/* {pokemon && pokemon[0] && pokemon[0].name}
      {!pokemon || "bob"} */}
    </>
  );
};

export default PokemonAPI;
