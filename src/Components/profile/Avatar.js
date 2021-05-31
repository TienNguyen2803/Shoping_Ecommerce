import classNames from "classnames";
import React from "react";
import moment from "moment";
import {
  Avatar,
  Box,
  Card,
  withStyles,
  CardContent,
  Typography,
} from "@material-ui/core";
const user = {
  avatar: "/static/images/avatars/avatar_6.png",
  city: "Los Angeles",
  country: "USA",
  jobTitle: "Senior Developer",
  name: "Katarina Smith",
  timezone: "GTM-7",
};
const styles = (theme) => ({});
function Avatars(props) {
  const { classes } = props;

  return (
    <div className={classNames(classes.wrapper)}>
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
    </div>
  );
}

export default withStyles(styles)(Avatars);
