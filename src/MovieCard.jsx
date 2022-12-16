import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="movie-card  max-w-xs bg-white border border-gray-200 rounded-lg shadow-md">
        <a href="www.google.com" className="w-96">
          <img
            className="rounded-t-lg object-covers h-60 w-full"
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/1000"
            }
            alt={movie.Title}
          />
        </a>
        <div className="p-5">
          <a href="www.google.com">
            <h5 className="break-words mb-2 text-md font-bold text-gray-900 dark:text-white">
              {movie.Title}
            </h5>
          </a>
          <p className="break-words mb-3 text-sm font-normal text-red-700 dark:text-gray-400">
            <b>Type:</b> {movie.Type}
          </p>
          <p className="break-words mb-3 text-sm font-normal text-gray-400 dark:text-gray-400">
            Year: {movie.Year}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
