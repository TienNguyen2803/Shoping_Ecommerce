import {
  Box,
  Grid,
  Typography,
  withStyles,
  isWidthUp,
} from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import Countdown from "react-countdown";
const styles = {
  container_top: {
    position: "absolute",
    top: -13,
    backgroundColor: "#FFD4D2",
    border: "1px solid rgba(236, 45, 37, 1)",
    borderRadius: 50,
    left: "25%",
    color: "rgba(236, 45, 36, 1)",
  },
  container_body: {
    position: "absolute",
    bottom: 1,
    left: "29%",
    color: "#fff",
    width: "50%",
  },
};

function BoxCountDown(props) {
  const { classes, width } = props;
  // Random component
  const Completionist = () => <span>Chúc mừng NghiaNH đã trúng giải! </span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <Grid container direction="row" justify="space-between">
          <Grid
            item
            container
            xs={4}
            className={classes.box_count_down}
            direction="column"
          >
            <Typography
              variant={isWidthUp("lg", width) ? "subtitle1" : "subtitle1"}
            >
              {hours}
            </Typography>
            <Typography
              variant={isWidthUp("lg", width) ? "subtitle1" : "subtitle1"}
            >
              Giờ
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={4}
            direction="column"
            className={classes.box_count_down}
          >
            <Typography
              variant={isWidthUp("lg", width) ? "subtitle1" : "subtitle1"}
            >
              {" "}
              {minutes}
            </Typography>
            <Typography
              variant={isWidthUp("lg", width) ? "subtitle1" : "subtitle1"}
            >
              Phút
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={4}
            direction="column"
            className={classes.box_count_down}
          >
            <Typography
              variant={isWidthUp("lg", width) ? "subtitle1" : "subtitle1"}
            >
              {seconds}
            </Typography>
            <Typography
              variant={isWidthUp("lg", width) ? "subtitle1" : "subtitle1"}
            >
              Giây
            </Typography>
          </Grid>
        </Grid>
      );
    }
  };
  return (
    <Fragment>
      <Box className={classes.container_top}>
        <Typography style={{ padding: "3px 45px" }}>Kết thúc trong</Typography>
      </Box>
      <Box className={classes.container_body}>
        <Countdown date={Date.now() + 1000000} renderer={renderer} />
      </Box>
    </Fragment>
  );
}

export default withStyles(styles, { withTheme: true })(BoxCountDown);
