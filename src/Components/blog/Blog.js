import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  withWidth,
  withStyles,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@material-ui/core";
import moment from "moment";
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
const user = {
  avatar: "/static/images/avatars/avatar_6.png",
  city: "Los Angeles",
  country: "USA",
  jobTitle: "Senior Developer",
  name: "Katarina Smith",
  timezone: "GTM-7",
};

function Blog(props) {
  const { classes, selectBlog } = props;

  useEffect(() => {
    selectBlog();
  }, [selectBlog]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      className={classNames(classes.wrapper, "lg-p-top")}
    >
      <div className={classes.blogContentWrapper}>
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
          <Divider />
          <CardActions>
            <Button color="primary" fullWidth variant="text">
              Upload picture
            </Button>
          </CardActions>
        </Card>
      </div>
    </Box>
  );
}

Blog.propTypes = {
  selectBlog: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  blogPosts: PropTypes.arrayOf(PropTypes.object),
};

export default withWidth()(withStyles(styles, { withTheme: true })(Blog));
