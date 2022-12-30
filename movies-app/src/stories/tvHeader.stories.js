import React from "react";
import TVHeader from "../components/TVComponents/headerTV";
import SampleTV from "./sampleDataTV";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "TV Details Page/TVHeader",
  component: TVHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <TVHeader tv={SampleTV} />;

Basic.storyName = "Default";