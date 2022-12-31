import React from "react";
import TVCard from "../components/TVComponents/TVCard";
import SampleTV from "./sampleDataTV";
import { MemoryRouter } from "react-router";
import TVContextProvider from "../contexts/tvContext";
import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavouritesIconTV";

export default {
  title: "TV Page/TVCard",
  component: TVCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TVContextProvider>{Story()}</TVContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <TVCard
      tv={SampleTV}
      action={(tv) => <AddToFavouritesIcon tv={tv} />}
      taging={(tv) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleTV, poster_path: undefined };
  return (
    <TVCard
      tv={sampleNoPoster}
      action={(tv) => <AddToFavouritesIcon tv={tv} />}
      taging={(tv) => null}
    />
  );
};
Exceptional.storyName = "exception";