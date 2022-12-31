import React from "react";
import TVList from "../components/TVComponents/TVList";
import SampleTV from "./sampleDataTV";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavouritesIconTV";
import Grid from "@mui/material/Grid";
import TVContextProvider from "../contexts/tvContext";

export default {
  title: "TV Page/TVList",
  component: TVList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TVContextProvider>{Story()}</TVContextProvider>,
  ],
};

export const Basic = () => {
  const tv = [
    { ...SampleTV, id: 1 },
    { ...SampleTV, id: 2 },
    { ...SampleTV, id: 3 },
    { ...SampleTV, id: 4 },
    { ...SampleTV, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <TVList
        tvs ={tv}
        action={(tv) => <AddToFavouritesIcon tv={tv} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";