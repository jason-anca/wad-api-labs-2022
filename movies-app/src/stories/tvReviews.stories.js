import React from "react";
import TVReviews from "../components/TVComponents/TVReviews";
import SampleTV from "./sampleDataTV";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "TV Details Page/TVReviews",
  component: TVReviews,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <TVReviews tv={SampleTV} />;

Basic.storyName = "Default";