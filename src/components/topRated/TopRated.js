import React from 'react';
import Movie from '../movie/Movie';
import data from '../../resources/topRatedMockup.json';
import './TopRated.css';

const getMovies = () => {
    const movies = data.results;

    return movies.map((movie, i) => <Movie key={i} movieData={movie} />);
};

const TopRated = () => {
    return (
        <div>
            <h1>Top Rated</h1>
            <section className="topRated">
                { getMovies() }
            </section>
        </div>
    )
}

export default TopRated;