import React from "react";
import "./MoviesCard.css";

const MoviesCard = ({card, initialMovies}) => {

  const moviesFavorite = card.favorite ? 'movies__button-like_active' : 'movies__button-like';

  return (
    <li className="movie">
      <figure className="movies__element">
        <img className="movies-card-image" src={card.link} alt={`Картинка превью фильма: ${card.name}`} />
        <figcaption className="movies__card">
          <p className="movies__card-name">{card.name}</p>
          { initialMovies.length > 3 ?
          (<button type="button" className={moviesFavorite}></button>) :
          (<button type="button" className="movies__button-delete"></button>)
          }
        </figcaption>
        <p className="movie__duration">{card.duration}</p>
      </figure>
    </li>
  );
};

export default MoviesCard;
