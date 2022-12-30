import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/MovieComponents/templateMoviePage";
import MovieReview from "../components/MovieComponents/movieReview";

const MovieReviewPage = (props) => {
  let location = useLocation();
  console.log(location)
  const {movie, review} = location.state;
  
  return (
    <PageTemplate movie={movie}>
      <MovieReview review={review} />
    </PageTemplate>
  );
};

export default MovieReviewPage;