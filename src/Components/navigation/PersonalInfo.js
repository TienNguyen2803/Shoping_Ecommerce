import React, { Fragment, useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useHistory } from "react-router-dom";
import {
  Popover,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Typography,
  withStyles,
  Button,
} from "@material-ui/core";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { isEmpty } from "lodash";
const styles = (theme) => ({
  tabContainer: {
    overflowY: "auto",
    maxHeight: 350,
  },
  popoverPaper: {
    width: "100%",
    maxWidth: 250,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      maxWidth: 270,
    },
  },
  divider: {
    marginTop: -2,
  },
  noShadow: {
    boxShadow: "none !important",
  },
  username: {
    textOverflow: "ellipsis",
    maxWidth: 100,
    overflow: "hidden",
    paddingLeft: 10,
  },
  btn: {
    padding: "15px 15px",
    marginLeft: 10,
    width: 240,
    justifyContent: "flex-start",
  },
});

function PersonalInfo(props) {
  const { classes, messages } = props;
  let history = useHistory();
  const anchorEl = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const handleClickAway = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const id = isOpen ? "scroll-playground" : null;
  return (
    <Fragment>
      <List type="button">
        <ListItem
          onClick={handleClick}
          buttonRef={anchorEl}
          aria-label="Open Messages"
          aria-describedby={id}
          button
          className={classes.box_username}
        >
          <Avatar
            alt="profile picture"
            src={`${process.env.PUBLIC_URL}/images/logged_in/profilePicture.jpg`}
            className={classNames(classes.accountAvatar)}
          />
          <Typography
            align="center"
            className={classes.username}
            color="textPrimary"
          >
            TienNM
          </Typography>
        </ListItem>
      </List>
      <Popover
        disableScrollLock
        id={id}
        open={isOpen}
        anchorEl={anchorEl.current}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        classes={{ paper: classes.popoverPaper }}
        onClose={handleClickAway}
      >
        <List dense className={classes.tabContainer}>
          {isEmpty(messages) ? (
            <ListItem>
              <ListItemText>
                You haven&apos;t received any messages yet.
              </ListItemText>
            </ListItem>
          ) : (
            <Fragment>
              <Button
                className={classes.btn}
                onClick={() => {
                  localStorage.removeItem("user");
                  history.goBack();
                }}
                startIcon={<ExitToAppIcon />}
              >
                Đăng xuất
              </Button>
              <Button
                className={classes.btn}
                startIcon={<PermContactCalendarIcon />}
              >
                Thông tin cá nhân
              </Button>
            </Fragment>
          )}
        </List>
      </Popover>
    </Fragment>
  );
}

PersonalInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles, { withTheme: true })(PersonalInfo);
