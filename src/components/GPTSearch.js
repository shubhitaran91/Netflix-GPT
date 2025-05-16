
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggesions from "./GPTMovieSuggesions";
import { BACKGROUND_IMAGE } from "../utils/contants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-auto object-cover" src={BACKGROUND_IMAGE} alt="logo" />
      </div>
      <div>
        <GPTSearchBar />
        <GPTMovieSuggesions />
      </div>
    </>
  );
};

export default GPTSearch;
