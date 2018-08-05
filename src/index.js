import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import {BrowserRouter} from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ED0000"
    },
    typography: {
      fontFamily: "Roboto"
    }
  }
});

function Root() {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  );
}

ReactDOM.render(<BrowserRouter><Root /></BrowserRouter>, document.getElementById("root"));
registerServiceWorker();
