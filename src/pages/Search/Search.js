import React from 'react';
import Movie from '../../components/movie/Movie';
import './Search.css';
import { useLocation } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { SEARCH_MOVIES } from '../../graphql/queries';

const Search = () => {
  const useParams = () => new URLSearchParams(useLocation().search);
  let query = useParams();

  const { loading, error, data } = useQuery(SEARCH_MOVIES, {
    variables: {
      query: query.get('query')
    }
  })

  const getMovies = movies => movies.map((movie, i) => <Movie key={i} movieData={movie} />);

  return (
    <div id="search">
      <h1>search: {query.get('query')}</h1>
      <section className="search">
        {
          !loading &&
            getMovies(data.search)
        }
      </section>
    </div>
  )
}

export default Search;