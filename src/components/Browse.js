import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  const gptToggle = useSelector((store) => store.gpt.showGptToggle);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {gptToggle ? (
        <GPTSearch />
      ) : (
        <>
          
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
