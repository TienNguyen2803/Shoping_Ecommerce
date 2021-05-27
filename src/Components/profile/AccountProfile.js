import classNames from "classnames";
import React, { useEffect } from "react";
import moment from "moment";
import {
  Avatar,
  Box,
  Button,
  Card,
  withStyles,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@material-ui/core";
import { Fragment } from "react";
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
  const { classes, width, blogPosts } = props;

  return (
    <Fragment className={classNames(classes.wrapper, "lg-p-top")}>
      <Card {...props}>
        <CardContent>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Avatar
              src={user.avatar}
              sx={{
                height: 100,
                width: 100,
              }}
            />
            <Typography color="textPrimary" gutterBottom variant="h3">
              {user.name}
            </Typography>
            <Typography color="textSecondary" variant="body1">
              {`${user.city} ${user.country}`}
            </Typography>
            <Typography color="textSecondary" variant="body1">
              {`${moment().format("hh:mm A")} ${user.timezone}`}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Fragment>
  );
}

export default withStyles(styles)(AccountProfile);
