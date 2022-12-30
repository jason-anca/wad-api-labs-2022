import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { MoviesContext } from "../../../contexts/moviesContext";

export default function MovieCard({ movie, action }) {
  const { favourites, addToFavourites } = useContext(MoviesContext);

  if (favourites.find((id) => id === movie.id)) {
    movie.favourite = true;
  } else {
    movie.favourite = false
  }

  const handleAddToFavourite = (e) => {
    e.preventDefault();
    addToFavourites(movie);
  };

  return (
    <Card sx={{ maxWidth: 345, background: "#333231" }} >
      <CardHeader
        avatar={
          movie.favourite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p" sx= {{color: "white"}}>
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p" sx= {{color: "white"}}>
              <CalendarIcon fontSize="small" sx= {{color: "blue"}} />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p" sx= {{color: "white"}}>
              <StarRateIcon fontSize="small" sx= {{color: "yellow"}} />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" sx= {{color: "red"}} >
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}