import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import styled from "styled-components";

import Button from "./Button";

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
  title: "Components|Button",
  component: Button,
  decorators: [withKnobs, wrapperDecarator]
};

export const primaryButton = () => (
  <Button onClick={action("clicked")} disabled={boolean("Disabled", false)}>
    Hello Button
  </Button>
);

export const colors = () => (
  <>
    {Object.values(COLORS).map(color => (
      <Button
        onClick={action("clicked")}
        disabled={boolean("Disabled", false)}
        color={color}
      >
        {color}
      </Button>
    ))}
  </>
);

colors.story = {
  name: "Button Colors"
};

export const sizes = () => (
  <>
    {Object.values(SIZES).map(size => (
      <Button
        onClick={action("clicked")}
        disabled={boolean("Disabled", false)}
        size={size}
      >
        {size}
      </Button>
    ))}
  </>
);

export const disabledButton = () => (
  <Button disabled={boolean("Disabled", true)}>Hello Button</Button>
);
