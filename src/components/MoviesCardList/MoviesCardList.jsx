import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ initialMovies, isTablet, isMobile }) => {
  let displayedMovies = initialMovies;

  if (isTablet) {
    displayedMovies = initialMovies.slice(0, 8);
  } else if (isMobile) {
    displayedMovies = initialMovies.slice(0, 5);
  }

  return (
    <>
      <section className="movies-cards-list">
        <ul className="movies__preview-list">
          {displayedMovies.map((card) => (
            <MoviesCard
              key={card.index}
              card={card}
              initialMovies={initialMovies}
            />
          ))}
        </ul>
        {initialMovies.length > 4 && (
          <button type="button" className="movies__more-button">
            Ещё
          </button>
        )}
      </section>
    </>
  );
};

export default MoviesCardList;