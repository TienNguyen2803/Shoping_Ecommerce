import classNames from "classnames";
import React, { useEffect } from "react";
import { withStyles, Grid, Avatar } from "@material-ui/core";
import Avatars from "./Avatar";
import SideBar from "./SideBar";

import { Fragment } from "react";
import AccountProfileDetails from "./AccountProfileDetails";
const user = {
  avatar: "/static/images/avatars/avatar_6.png",
  city: "Los Angeles",
  country: "USA",
  jobTitle: "Senior Developer",
  name: "Katarina Smith",
  timezone: "GTM-7",
};
const styles = (theme) => ({
  blogContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    maxWidth: 1280,
    width: "100%",
  },
  wrapper: {
    minHeight: "60vh",
  },
  noDecoration: {
    textDecoration: "none !important",
  },
});
function AccountProfile(props) {
  const { classes } = props;

  return (
    <Fragment className={classNames(classes.wrapper, "lg-p-top")}>
      <div className="container-fluid">
        <Grid container spacing={3}>
          <Grid item container xs={3}>
            <Grid item container xs={12}>
              <Avatars user={user} />
            </Grid>
            <Grid item container xs={12}>
              <SideBar />
            </Grid>
          </Grid>
          <Grid item container xs={9}>
            <AccountProfileDetails />
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

export default withStyles(styles)(AccountProfile);
