import React, { useState, useEffect } from "react";
import PageTemplate from "../components/MovieComponents/templateMovieListPage";
import {getUpcoming} from '../api/tmdb-api';
import Spinner from '../components/spinner';
import MustWatchIcon from '../components/cardIcons/addToMustWatch'
import { useQuery } from 'react-query';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcomingMovies', getUpcoming)

  //using the home page code here
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  const favourites = movies.filter((m) => m.favourite);
  localStorage.setItem("favourites", JSON.stringify(favourites));

    return(
        <PageTemplate 
        title="Upcoming Movies"
        movies={movies} 
        action={(movie) => {
          return (
          <>
           <MustWatchIcon movie={movie} />
           <AddToFavouritesIcon movie={movie} />
          </>
          );
        }}
        />
    )
}

export default UpcomingMoviesPage;