import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Typography,
  isWidthUp,
  withWidth,
  Button,
  Grid,
  Card,
  Hidden,
  Box,
  withStyles,
} from "@material-ui/core";
import classNames from "classnames";
import calculateSpacing from "../../shared/components/calculateSpacing";
import post_list from "../dummy_data/persion";
import ZoomImage from "../../shared/components/ZoomImage";
import OtpInput from "react-otp-input";
const styles = (theme) => ({
  waveBorder: {
    paddingTop: theme.spacing(4),
  },

  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  container: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  otp: {
    "& input": {
      width: "2rem !important",
      height: "2rem !important",
      marginRight: 5,
      fontSize: "1rem",
      borderRadius: 50,
    },
  },
});
function AwardList(props) {
  const { width, classes } = props;

  const [otp] = useState("123456");
  const [posts, setPosts] = useState([]);
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  const fetchRandomPosts = useCallback(() => {
    shuffle(post_list);
    const posts = [];
    const iterations = post_list.length;
    const oneDaySeconds = 60 * 60 * 24;
    let curUnix = Math.round(
      new Date().getTime() / 1000 - iterations * oneDaySeconds
    );
    for (let i = 0; i < iterations; i += 1) {
      const person = post_list[i];
      const post = {
        id: i,
        src: person.src,
        timestamp: curUnix,
        name: person.name,
        email: person.email,
        phone: person.phone,
      };
      curUnix += oneDaySeconds;
      posts.push(post);
    }
    posts.reverse();
    setPosts(posts);
  }, [setPosts]);
  useEffect(() => {
    fetchRandomPosts();
  }, [fetchRandomPosts]);
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className={classNames("container-fluid lg-p-top")}>
        <Typography variant="h3" align="center" className="md-mg-bottom">
          TOP NGƯỜI NHẬN GIẢI
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {posts.map((element, key) => (
              <Grid
                className="position-relative"
                item
                xs={12}
                md={6}
                sm={6}
                data-aos="zoom-in-up"
                data-aos-delay={isWidthUp("md", width) ? 200 : 400}
                key={element.timestamp}
              >
                <Box display="flex" justifyContent="center" className="row">
                  <Card
                    className={classes.card}
                    data-aos-delay="200"
                    data-aos="zoom-in"
                  >
                    <div
                      className={classNames(classes.containerFix, "container")}
                    >
                      <Box justifyContent="space-between" className="row">
                        <Grid item xs={12} md={5}>
                          <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-between"
                          >
                            <Typography
                              variant={isWidthUp("lg", width) ? "h6" : "h6"}
                            >
                              {element.name}
                            </Typography>
                            <Typography
                              variant={
                                isWidthUp("lg", width)
                                  ? "subtitle1"
                                  : "subtitle1"
                              }
                            >
                              {element.email}
                            </Typography>
                            <Typography
                              variant={
                                isWidthUp("lg", width)
                                  ? "subtitle1"
                                  : "subtitle1"
                              }
                            >
                              {element.phone}
                            </Typography>
                            <Typography
                              variant={isWidthUp("lg", width) ? "h6" : "h6"}
                            >
                              Mã Chương Trình:
                            </Typography>
                            <Typography
                              variant={
                                isWidthUp("lg", width)
                                  ? "subtitle1"
                                  : "subtitle1"
                              }
                            >
                              SE62756
                            </Typography>
                            <Typography
                              variant={isWidthUp("lg", width) ? "h6" : "h6"}
                            >
                              Ngày tham gia:
                            </Typography>
                            <Typography
                              variant={
                                isWidthUp("lg", width)
                                  ? "subtitle1"
                                  : "subtitle1"
                              }
                            >
                              20/5/2021
                            </Typography>
                            <Typography
                              variant={isWidthUp("lg", width) ? "h6" : "h6"}
                            >
                              Mã trúng thưởng:
                            </Typography>
                            <OtpInput
                              className={classes.otp}
                              isDisabled
                              value={otp}
                              numInputs={6}
                              inputStyle={{
                                border: "2px solid rgba(0,0,0,0.3)",
                              }}
                            />
                          </Box>
                        </Grid>
                        <Hidden smDown>
                          <Grid item md={6}>
                            <ZoomImage
                              src={`${process.env.PUBLIC_URL}/images/home/panel.svg`}
                              className={classes.image}
                              alt="header example"
                            />
                          </Grid>
                        </Hidden>
                      </Box>
                    </div>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="container-fluid md-mg-top pd=5" align="center">
          <Button variant="contained" color="secondary" disableElevation>
            Xem tất cả
          </Button>
        </div>
      </div>
    </div>
  );
}

AwardList.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(withStyles(styles, { withTheme: true })(AwardList));
