
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies)
  return (
     movies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.movieNowPlaying} />
          <MovieList title={"Trending"} movies={movies.movieNowPlaying} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          />
          <MovieList title={"Horror"} movies={movies.movieNowPlaying} />
        </div>
      </div>
     ))
}

export default SecondaryContainer