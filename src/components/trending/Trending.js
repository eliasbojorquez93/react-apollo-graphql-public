import React from 'react';
import Movie from '../movie/Movie';
import './Trending.css';
import { TRENDING_MOVIES } from '../../graphql/queries';
import { useQuery } from '@apollo/client';
import Loading from '../loading/Loading';

const TopRated = () => {
    const { loading, error, data } = useQuery(TRENDING_MOVIES);

    const getMovies = movies => movies.map((movie, i) => <Movie key={i} movieData={movie} />);

    return (
        <>
            <Loading isVisible={loading} />
            <div>
                <h1>TRENDING</h1>
                <section className="trending">
                    {
                        !loading &&
                            getMovies(data.trending)
                    }
                </section>
            </div>
        </>
    )
}

export default TopRated;