import "./App.css";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=912103f7";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    setSearchTerm(title);
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log("data", data);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spider");
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-4 justify-center items-center mb-8">
        <h1 className="text-4xl text-gray-900 dark:text-white my-8">
          MovieLand
        </h1>
        <div className="flex flex-col w-full px-8">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Movie name..."
              value={searchTerm}
              onChange={(e) => searchMovies(e.target.value)}
            />
            {/* <button
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => searchMovies(searchTerm)}
            >
              Search
            </button> */}
          </div>
        </div>
      </div>
      {movies?.length > 0 ? (
        <div className="flex flex-wrap gap-8 mb-8">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-8 mb-8 justify-center">
          <h5 className="break-words mb-2 text-md font-bold text-gray-900 dark:text-white">
            No movies found
          </h5>
        </div>
      )}
    </div>
  );
};

export default App;
