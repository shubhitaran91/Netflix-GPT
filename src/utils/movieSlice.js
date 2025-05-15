import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movieNowPlaying: null,
    trailerVideo: null,
    popularMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addMovieNowPlaying: (state, action) => {
      state.movieNowPlaying = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    }
  },
});

export const { addMovieNowPlaying, addTrailerVideo, addPopularMovies, addUpcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
