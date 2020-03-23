import React from 'react';
import './Movie.css';
import SVGIcon from '../SVGIcon/SVGIcon';
import { Link } from "react-router-dom";

const Movie = ({ movieData }) => {
  return (
    <Link to={`/movie/${movieData.id}`}>
      <div className="movieCard">
        <div className="bgMovie">
          <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieData.poster_path}`} className="posterPath" alt={movieData.title} />
        </div>
        <div className="movieData">
          <div>
            <p className="movieTitle">{movieData.title}</p>
            <div className="votes">
              <SVGIcon name="thumbs-up" width={12} /> <span className="voteCount">{movieData.vote_count}</span>
            </div>
          </div>
          <div className="voteAverage">{movieData.vote_average}</div>
        </div>
      </div>
    </Link>
  )
}

export default Movie;