import { configureStore, createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "Example",
  initialState: {
    pokemon: [],
  },
  reducers: {
    addPokemon: (state, action) => {
      state.pokemon = action.payload;
    },
  },
});

const store = configureStore({
  reducer: slice.reducer,
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: {},
});

export const { addPokemon } = slice.actions;

export const selectPokemon = (state) => state.pokemon;

export default store;
