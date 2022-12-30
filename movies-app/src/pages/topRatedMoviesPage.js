import React from "react";
import PageTemplate from "../components/MovieComponents/templateMovieListPage";
import { getTopRatedMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const TopRatedMovies = (props) => {

    const { data, error, isLoading, isError } = useQuery('topRatedTV', getTopRatedMovies)

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }
    const movies = data.results;

    const popular = movies.filter(m => m.favourite)
    localStorage.setItem('popular', JSON.stringify(popular))

    return (
        <PageTemplate
            title="Top Rated Movies"
            movies={movies}
            action={(movie) => {
                return <AddToFavouritesIcon movie={movie} />
            }}
        />
    );
};
export default TopRatedMovies;