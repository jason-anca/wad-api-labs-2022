import React from "react";
import TVHeader from "../components/TVComponents/headerTVList";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/tvContext";

export default {
  title: "TV Page/TVPageHeader",
  component: TVHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <TVHeader title="Discover TV Shows" />;

Basic.storyName = "Default";