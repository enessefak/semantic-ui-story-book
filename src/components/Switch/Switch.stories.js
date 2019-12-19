import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import styled from "styled-components";

import Switch from "./Switch";

import { COLORS, SIZES } from "../../utils/constants";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;

  button + button {
    margin-left: 10px;
  }
`;

const wrapperDecarator = story => <StyledWrapper>{story()}</StyledWrapper>;

export default {
  title: "Components|Switch",
  component: Switch
};

export const defaultSwitch = () => (
  <Switch onClick={action("clicked")} disabled={boolean("Disabled", false)} />
);
