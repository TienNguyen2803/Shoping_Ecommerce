import "core-js/es6/promise";
import "core-js/es6/set";
import "core-js/es6/map";
import React, { Fragment, Suspense } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Pace from "./shared/components/Pace";
import ConfigStore from "./Config/Store";
import { Provider } from "react-redux";
import Main from "./Components/Main";
import "core-js/es6/promise";
import "core-js/es6/set";
import "core-js/es6/map";

const store = ConfigStore();

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <GlobalStyles />
          <Pace color={theme.palette.primary.light} />
          <Suspense fallback={<Fragment />}>
            <Main />
          </Suspense>
        </Provider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
