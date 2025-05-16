import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptToggle: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptToggle = !state.showGptToggle;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearch, addGptMovieResult } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
