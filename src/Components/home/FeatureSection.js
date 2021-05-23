import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  isWidthUp,
  withWidth,
  Button,
  withStyles,
  Box,
} from "@material-ui/core";
import classNames from "classnames";
import calculateSpacing from "./calculateSpacing";
import DeleteIcon from "@material-ui/icons/Delete";
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
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className={classNames("container-fluid lg-p-top")}>
        <Typography variant="h3" align="center" className="md-mg-bottom">
          ĐỔI HÓA ĐƠN LẤY MÃ DỰ THƯỞNG
        </Typography>
        <Typography variant="h6" align="center" className="lg-mg-bottom">
          Bạn mới mua 1 món hàng, hãy giữ lấy hoá đơn và thử ngay vận may với
          các chương trình trao thưởng của doanh nghiệp dưới đây.
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {posts.map((element, key) => (
              <Grid
                className="position-relative"
                item
                xs={12}
                md={4}
                sm={6}
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
