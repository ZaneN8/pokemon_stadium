import React, { useState } from "react";
import PokemonAPI from "../data/PokemonAPI";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>Farfetch'd</div>
      <PokemonAPI />
    </div>
  );
};

export default Home;
