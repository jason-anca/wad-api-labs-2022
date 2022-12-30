import React, { useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews"
//import { color } from "@mui/system";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
    background: "#333231"
};

const chip = { margin: 0.5, background: "white", color: "black"};

const MovieDetails = ({ movie }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Paper sx= {{background: "#333231"}}>
    <>
      <Typography variant="h5" component="h3" sx= {{color: "white"}}>
        Overview
      </Typography>

      <Typography variant="h6" component="p" sx= {{color: "white"}}>
        {movie.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Genres" sx={chip} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={root}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} sx={{background: "white"}}/>
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
          sx={{background: "white"}}
        />
        <Chip
          icon={<StarRate sx= {{color: "yellow"}}/>}
          label={`${movie.vote_average} (${movie.vote_count}`}
          sx={{background: "white"}}
        />
        <Chip label={`Released: ${movie.release_date}`} sx={{background: "white"}} />
      </Paper>
      <Paper 
        component="ul" 
        sx={root}
      >
        <li>
          <Chip label="Production Countries" sx={chip} color="primary" />
        </li>
        {movie.production_countries.map((c) => (
          <li key={c.name}>
            <Chip label={c.name} sx={chip} />
          </li>
        ))}
      </Paper>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
            position: "fixed",
            bottom: '1em',
            right: '1em',
            background: "#6b4604"
        }}
      >
        <NavigationIcon />
        Reviews
        </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
      </>
      </Paper>
  );
};
export default MovieDetails ;