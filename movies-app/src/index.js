import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import { Link } from 'react-router-dom'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingPage from './pages/upcomingMoviesPage';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import TVContextProvider from "./contexts/tvContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import PopularMoviesPage from './pages/popularMoviesPage'
import TopRatedMoviesPage from './pages/topRatedMoviesPage'
import PopularTVShowsPage from './pages/popularTVShowsPage'
import TVPage from "./pages/tvDetailsPage";
import FavouriteTVPage from "./pages/favouriteShowsPage"
import AddTVReviewPage from './pages/addTVReviewPage'
import TVReviewPage from "./pages/tvReviewsPage";
import LoginPage from "./pages/loginPage";
import AuthContextProvider, { AuthContext } from "./contexts/authContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <TVContextProvider>
            <AuthContextProvider>
            <Routes>
              <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              <Route path="/reviewsTV/form" element={<AddTVReviewPage />} />
              <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
              <Route exact path="/tv/favourites" element={<FavouriteTVPage />} />
              <Route path="/movies/:id" element={<MoviePage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route path="/reviewsTV/:id" element={<TVReviewPage />} />
              <Route path="/movies/upcoming" element={<UpcomingPage />} />
              <Route path="/tv/popularShows" element={<PopularTVShowsPage />} />
              <Route path="/movies/popular" element={<PopularMoviesPage />} />
              <Route path="/movies/toprated" element={<TopRatedMoviesPage />} />
              <Route path="/tv/:id" element={<TVPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
            </AuthContextProvider>
          </TVContextProvider>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"))
rootElement.render(<App />);