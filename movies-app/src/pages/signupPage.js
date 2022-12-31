import React from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateSignupPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'


const SignUpPage = (props) => {

  return (
    <PageTemplate
    />
  );
};
export default SignUpPage