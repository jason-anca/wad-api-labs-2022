import React from "react";
import TVDetails from "../components/TVComponents/TVDetails";
import SampleTV from "./sampleDataTV";
import { MemoryRouter } from "react-router";
import TVContextProvider from "../contexts/tvContext";

export default {
  title: "TV Details Page/TVDetails",
  component: TVDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <TVContextProvider>{Story()}</TVContextProvider>,
  ],
};

export const Basic = () => <TVDetails tv={SampleTV} />;

Basic.storyName = "Default";