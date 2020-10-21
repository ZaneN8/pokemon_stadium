import React from "react";

export const SelectPokemon = (id, pokemon_data, is_selected) => {
  return {
    id,
    pokemon_data,
    is_selected,
  };
};

export const SetPokemon = (pokemon) => {
  return {
    pokemon,
  };
};

export const SetTeam = (team) => {
  return {
    team,
  };
};
