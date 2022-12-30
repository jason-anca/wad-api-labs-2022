import React from "react";
import { useParams } from 'react-router-dom';
import TVDetails from "../components/TVComponents/TVDetails";
import PageTemplate from "../components/TVComponents/templateTVPage";
import { getTV } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const TVDetailsPage = ( props ) => {
  const { id } = useParams();

  const { data: tv, error, isLoading, isError } = useQuery(
    ["tv", { id: id }],
    getTV
  );
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {tv ? (
        <>
          <PageTemplate tv={tv}>
            <TVDetails tv={tv} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for TV details</p>
      )}
    </>
  );
};

export default TVDetailsPage;