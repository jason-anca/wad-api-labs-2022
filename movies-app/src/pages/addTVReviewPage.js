import React from "react";
import PageTemplate from "../components/TVComponents/templateTVPage";
import ReviewForm from "../components/reviewForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getTV } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const WriteReviewTVPage = (props) => {
  const location = useLocation()
  const { tvId } = location.state;
  const { data: tv, error, isLoading, isError } = useQuery(
    ["tv", { id: tvId }],
    getTV
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <PageTemplate tv={tv}>
      <ReviewForm tv={tv} />
    </PageTemplate>
  );
};

export default WriteReviewTVPage;