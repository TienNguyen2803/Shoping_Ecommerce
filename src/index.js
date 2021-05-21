import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { makeStyles, useScrollTrigger } from "@material-ui/core";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: "43px",
    right: theme.spacing(2),
    margin: " -10px",
    "& button": {
      backgroundColor: "#FFC848",
      right: "32px",
      margin: "-10px",
    },
    "& button:hover": {
      backgroundColor: "#FF8000",
    },
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}
ReactDOM.render(
  <Suspense fallback="...">
    <div id="back-to-top-anchor" />
    <App />
    <ScrollTop>
      <Fab color="secondary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  </Suspense>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
