import { create } from "@storybook/theming/create";

export default create({
  base: "dark",

  colorPrimary: "#2185D0",
  colorSecondary: "deepskyblue",

  // UI
  appBg: "white",
  appContentBg: "#fff",
  appBorderColor: "grey",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#000",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "silver",
  barSelectedColor: "#fff",
  barBg: "#2185D0",

  // Form colors
  inputBg: "#000",
  inputBorder: "silver",
  inputTextColor: "#fff",
  inputBorderRadius: 4,

  brandTitle: "My custom storybook",
  brandUrl: "https://example.com",
  brandImage: "https://placehold.it/350x150"
});
