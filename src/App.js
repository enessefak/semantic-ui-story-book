import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./utils/constants";

import { Button, Switch } from "./components";

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Button>Deneme</Button>
      <Button disabled>Deneme</Button>
      <Switch />
    </div>
  </ThemeProvider>
);

export default App;
