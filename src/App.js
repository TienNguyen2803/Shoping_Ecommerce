import React, { Fragment, Suspense, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import Pace from "./shared/components/Pace";
import ConfigStore from "./Config/Store";
import { Provider } from "react-redux";

const LoggedOutComponent = lazy(() => import("./Components/App/Main"));

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
            <Switch>
              <Route>
                <LoggedOutComponent />
              </Route>
            </Switch>
          </Suspense>
        </Provider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
