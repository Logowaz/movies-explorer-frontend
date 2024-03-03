import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const Movies = ({ initialMovies, isTablet, isMobile }) => {
  return (
    <main>
      <SearchForm />
      <MoviesCardList
        initialMovies={initialMovies}
        isTablet={isTablet}
        isMobile={isMobile}
      />
    </main>
  );
};

export default Movies;
