import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  IconButton,
  withStyles,
  Grid,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import BookIcon from "@material-ui/icons/Book";
import NavigationDrawer from "../../shared/components/NavigationDrawer";
import styles from "./styles";

function NavBar(props) {
  const {
    classes,
    openRegisterDialog,
    openLoginDialog,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab,
  } = props;
  const menuItems = [
    {
      link: "/",
      name: "Trang chủ",
      icon: <HomeIcon className="text-white" />,
    },
    {
      link: "/blog",
      name: "Chương trình",
      icon: <BookIcon className="text-white" />,
    },
    {
      link: "/blog",
      name: "Đã trao giải",
      icon: <BookIcon className="text-white" />,
    },
    {
      link: "/blog",
      name: "Về chúng tôi",
      icon: <BookIcon className="text-white" />,
    },
    {
      name: "Đăng ký",
      onClick: openRegisterDialog,
      icon: <HowToRegIcon className="text-white" />,
    },
    {
      name: "Đăng nhập",
      onClick: openLoginDialog,
      icon: <LockOpenIcon className="text-white" />,
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid container>
            <Grid container direction="row" item xs={1}>
              <Typography
                variant="h4"
                className={classes.brandText}
                display="inline"
                color="primary"
              >
                SK
                <span
                  className={classes.brandText}
                  style={{ color: "#4829B2" }}
                >
                  G
                </span>
              </Typography>
            </Grid>
            <Grid container justify="flex-end" item xs={11}>
              <Hidden mdDown>
                <Grid container item lg={9} xl={10} justify="center">
                  {menuItems.map((element, index) => {
                    if (element.link) {
                      return (
                        <Link
                          key={index}
                          to={element.link}
                          className={classes.noDecoration}
                          onClick={handleMobileDrawerClose}
                        >
                          <Button
                            color="secondary"
                            size="large"
                            classes={{ text: classes.menuButtonText }}
                          >
                            {element.name}
                          </Button>
                        </Link>
                      );
                    }
                    return <Box key={index}></Box>;
                  })}
                </Grid>

                <Grid container item lg={3} xl={2}>
                  {menuItems.map((element, index) => {
                    if (!element.link) {
                      return (
                        <Button
                          color="secondary"
                          size="large"
                          onClick={element.onClick}
                          classes={{ text: classes.menuButtonText }}
                          key={index}
                        >
                          {element.name}
                        </Button>
                      );
                    }
                    return <Box key={index}></Box>;
                  })}
                </Grid>
              </Hidden>
              <Hidden lgUp>
                <IconButton
                  className={classes.menuButton}
                  onClick={handleMobileDrawerOpen}
                  aria-label="Open Navigation"
                >
                  <MenuIcon color="primary" />
                </IconButton>
              </Hidden>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="left"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
