import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Typography,
  isWidthUp,
  withWidth,
  withStyles,
  Box,
  Container,
} from "@material-ui/core";
import classNames from "classnames";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DeleteIcon from "@material-ui/icons/Delete";
import Slider from "react-slick";
import SelfAligningImage from "../../shared/components/SelfAligningImage";
import post_list from "../dummy_data/persion";
import WaveBorder from "../../shared/components/WaveBorder";
import BoxCountDown from "./BoxCountDown";
const styles = (theme) => ({
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
  wrapper: {
    height: 200,
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
  },
  slick: {
    "@global": {
      /* the slides */
      " .slick-slide ": {
        margin: "0px 20px",
      },
      ".slick-list": {
        height: 600,
      },
      //buton slick next
      ".slick-arrow slick-next": {
        backgroundColor: "gray",
      },
      ".slick-next:before": {
        fontSize: 50,
        width: "50px !important",
        height: "50px !important",
      },
      ".slick-next": {
        fontSize: "50px !important",
        width: "50px !important",
        height: "50px !important",
        right: 50,
        top: "40%",
      },
      "button.slick-arrow .slick-next": {
        width: "50px !important",
        height: "50px !important",
        fontSize: "50px !important",
      },
      //buton slick prev
      "button.slick-arrow .slick-prev": {
        width: "50px !important",
        height: "50px !important",
        fontSize: "50px !important",
        backgroundColor: "gray",
      },

      ".slick-prev:before": {
        fontSize: 50,
        width: "50px !important",
        height: "50px !important",
      },
      ".slick-prev": {
        left: 10,
        top: "40%",
        zIndex: 99,
        fontSize: "50px !important",
        width: "50px !important",
        height: "50px !important",
      },
    },
  },
});
function FeatureSection(props) {
  const { width, theme, classes } = props;
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className={classNames("container-fluid lg-p-top")}>
        <Typography variant="h3" align="center" className="md-mg-bottom">
          GIẢI THƯỞNG SẮP TRAO THƯỞNG
        </Typography>
        <Container maxWidth="lg">
          <Slider {...settings} className={classes.slick}>
            {posts.map((element, key) => (
              <Box
                className="position-relative"
                style={{ width: 448, height: 669 }}
                data-aos="zoom-in-up"
                data-aos-delay={isWidthUp("md", width) ? 200 : 400}
                key={element.timestamp}
              >
                <SelfAligningImage
                  src={element.src}
                  title={element.name}
                  subtitle={<BoxCountDown />}
                  options={[
                    {
                      name: "Delete",
                      onClick: () => {
                        console.log(" onDelete(post)");
                      },
                      icon: <DeleteIcon />,
                    },
                  ]}
                />
              </Box>
            ))}
          </Slider>
        </Container>
      </div>
      <Box className={classNames("lg-mg-top", classes.wrapper)}></Box>

      <WaveBorder
        upperColor={theme.palette.secondary.main}
        lowerColor="#FFFFFF"
        className={classes.waveBorder}
        animationNegativeDelay={2}
      />
    </div>
  );
}

FeatureSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(FeatureSection)
);
