import React from "react";
import { withStyles, Grid } from "@material-ui/core";
import Avatars from "./Avatar";
import SideBar from "./SideBar";
import classNames from "classnames";
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
  wrapper: {
    minHeight: "60vh",
  },
});
function AccountProfile(props) {
  const { classes } = props;

  return (
    <div className={classNames(classes.wrapper)}>
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
    </div>
  );
}

export default withStyles(styles)(AccountProfile);
