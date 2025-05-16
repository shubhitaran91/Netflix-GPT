import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langContants";
import openai from "../utils/openai";
import { OPTIONS } from "../utils/contants";
import { addGptMovieResult } from "../utils/gptSearchSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.config.language);
  const gptInput = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      OPTIONS
    );
    const json = await data.json();

    return json.results;
  };
  const handleGPTSearch = async () => {
    // Make an API call to GPT API and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      gptInput.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      return <div>Something went wrong</div>;
    }

    console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={gptInput}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[language].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearch}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
