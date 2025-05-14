import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movieNowPlaying: null,
    trailerVideo: null,
  },
  reducers: {
    addMovieNowPlaying: (state, action) => {
      state.movieNowPlaying = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addMovieNowPlaying, addTrailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
