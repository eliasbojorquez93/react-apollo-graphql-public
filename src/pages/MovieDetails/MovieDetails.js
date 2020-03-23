import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { MOVIE_DETAILS } from '../../graphql/queries.js';
import './MovieDetails.css';
import Loading from '../../components/loading/Loading.js';

const MovieDetails = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(MOVIE_DETAILS, {
    variables: {
      id
    }
  });

  return (<div>
    {
      !loading ?
        (
          <section className="movieDetails">
            <div className="backdropPath">
              <img src={`https://image.tmdb.org/t/p/w1400_and_h450_face${data.movie.backdrop_path}`} alt={data.movie.title} />
            </div>
            <div className="movie">
              <div className="poster">
                <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.movie.poster_path}`} alt={ data.movie.title } />
              </div>
              <div className="movieInfo">
                <h1>{ data.movie.title } <span className="releaseDate">({data.movie.release_date.split('-')[0]})</span></h1>
                <div className="toolsContainer">
                </div>
                <p className="overview">{ data.movie.overview }</p>
              </div>
            </div>
            <div className="score">
              <span>{ data.movie.vote_average * 10 }%</span>
            </div>
          </section>
        )
      : <Loading isVisible={loading} />
    }
  </div>)
}

export default MovieDetails;