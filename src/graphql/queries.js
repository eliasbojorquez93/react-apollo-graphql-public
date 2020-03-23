import { gql } from '@apollo/client';

export const MOVIE_DETAILS = gql`
query Movie($id: String) {
  movie(id: $id) {
    id
    title
    original_title
    overview
    poster_path
    backdrop_path
    release_date
    revenue
    vote_average
    vote_count
    homepage
  }
}
`;

export const TRENDING_MOVIES = gql`
{
  trending(media_type: "movie", time_window: "week") {
    id
    title
    vote_average
    poster_path
  }
}
`;

export const SEARCH_MOVIES = gql`
query Search($query: String) {
  search(query: $query) {
    id
    title
    vote_average
    poster_path
  }
}
`;

export const TOP_RATED = gql`
query TopRated($page: String) {
  top_rated(page: $page) {
    id
    title
    vote_average
    poster_path
  }
}
`;