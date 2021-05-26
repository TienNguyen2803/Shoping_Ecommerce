import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  withStyles,
  Box,
  Hidden,
} from "@material-ui/core";
import PriceCard from "./PriceCard";
import calculateSpacing from "./calculateSpacing";

const styles = (theme) => ({
  containerFix: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340,
    },
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360,
    },
  },
});

function AccountingShop(props) {
  const { width, classes } = props;
  return (
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        Lịch sử <span style={{ color: "#b3294e", fontWeight: "bold" }}>SK</span>
        <span style={{ color: "rgb(72, 41, 178)", fontWeight: "bold" }}>G</span>
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
        >
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={4}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "500" : "200"}
          >
            <PriceCard
              title="Người chơi"
              pricing={
                <Box>
                  <span>130.000 </span>
                  <Hidden smDown>
                    <img
                      alt=""
                      src={`${process.env.PUBLIC_URL}/images/home/icon_game.svg`}
                      style={{ position: "absolute", right: 45, top: 155 }}
                    ></img>
                  </Hidden>
                </Box>
              }
              features={[
                <Box>
                  <span style={{ fontSize: 30 }}>10.000</span>
                  <Typography display="inline"> / month</Typography>
                </Box>,
                <Box>
                  <span style={{ fontSize: 30 }}>2.000</span>
                  <Typography display="inline"> / week</Typography>
                </Box>,
                <Box>
                  <span style={{ fontSize: 30 }}>500</span>
                  <Typography display="inline"> / day</Typography>
                </Box>,
              ]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={4}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "400" : "0"}
          >
            <PriceCard
              title="Doanh nghiệp liên kết"
              pricing={
                <Box>
                  <span>80.000</span>
                  <Hidden smDown>
                    <img
                      alt=""
                      src={`${process.env.PUBLIC_URL}/images/home/icon_link.svg`}
                      style={{ position: "absolute", right: 45, top: 155 }}
                    ></img>
                  </Hidden>
                </Box>
              }
              features={[
                <Box>
                  <span style={{ fontSize: 30 }}>8.000</span>
                  <Typography display="inline"> / month</Typography>
                </Box>,
                <Box>
                  <span style={{ fontSize: 30 }}>2.000</span>
                  <Typography display="inline"> / week</Typography>
                </Box>,
                <Box>
                  <span style={{ fontSize: 30 }}>500</span>
                  <Typography display="inline"> / day</Typography>
                </Box>,
              ]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapper}
            xs={12}
            sm={6}
            lg={4}
            data-aos="zoom-in-up"
            data-aos-delay={isWidthUp("md", width) ? "300" : "200"}
          >
            <PriceCard
              title="Người chơi"
              pricing={
                <Box>
                  <span>130.000 </span>
                  <Hidden smDown>
                    <img
                      alt=""
                      src={`${process.env.PUBLIC_URL}/images/home/icon_game.svg`}
                      style={{ position: "absolute", right: 45, top: 155 }}
                    ></img>
                  </Hidden>
                </Box>
              }
              features={[
                <Box>
                  <span style={{ fontSize: 30 }}>10.000</span>
                  <Typography display="inline"> / month</Typography>
                </Box>,
                <Box>
                  <span style={{ fontSize: 30 }}>2.000</span>
                  <Typography display="inline"> / week</Typography>
                </Box>,
                <Box>
                  <span style={{ fontSize: 30 }}>500</span>
                  <Typography display="inline"> / day</Typography>
                </Box>,
              ]}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

AccountingShop.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(
  withWidth()(AccountingShop)
);
