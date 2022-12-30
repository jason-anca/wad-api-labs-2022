import React, { useContext } from "react";
import PageTemplate from "../components/TVComponents/templateTVListPage";
import { TVContext } from "../contexts/tvContext";
import { useQueries } from "react-query";
import { getTV } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromFavourites from "../components/cardIcons/removeFromFavouritesTV";
import WriteReviewTV from "../components/cardIcons/writeReviewTV";

const FavouriteTVPage = () => {
  const {favourites: ids } = useContext(TVContext);

  const favouriteTVQueries = useQueries(
    ids.map((Id) => {
      return {
        queryKey: ["tv", { id: Id }],
        queryFn: getTV,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTVQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const tv = favouriteTVQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });
  const toDo = () => true;

  return (
    <PageTemplate
      title="Favourite TV Shows"
      TVs={tv}
      action={(tv) => {
        return (
          <>
            <RemoveFromFavourites tv={tv} />         
            <WriteReviewTV tv={tv} /> 
          </>
        );
      }}
    />
  );
};

export default FavouriteTVPage;