import React from "react";
import { configure, addParameters, addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { themes } from "@storybook/theming";
import { ThemeProvider } from "styled-components";

import { theme } from "../src/utils/constants";

// import theme from "./theme";

// addParameters({
//   options: {
//     theme
//   }
// });

addParameters({
  options: {
    theme: themes.dark
  }
});

addDecorator(withA11y);

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

// automatically import all files ending in *.stories.js
configure(
  [
    require.context("../stories", true, /\.stories\.(js|mdx)$/),
    require.context("../src/components", true, /\.stories\.(js|mdx)$/)
  ],
  configure
);

const loadFontsForStorybook = () => {
  const fontLinkId = "storybook-font-link-tag";

  if (!document.getElementById(fontLinkId)) {
    const fontLink = document.createElement("link");

    fontLink.id = fontLinkId;
    fontLink.href =
      "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900&display=swap";
    fontLink.rel = "stylesheet";

    document.head.appendChild(fontLink);
  }
};

loadFontsForStorybook();
