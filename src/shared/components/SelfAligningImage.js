import React, { useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { Button, GridListTileBar, withStyles } from "@material-ui/core";
import classNames from "classnames";
const styles = (theme) => ({
  imageContainer: {
    width: "100%",
    paddingTop: "100%",
    overflow: "hidden",
    position: "relative",
  },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
  },
  button: {
    background: " rgba(208, 1, 27, 1) ",
    border: "1px solid rgba(251, 235, 237, 1)",
    borderRadius: 50,
    maxWidth: 113,
    maxHeight: 35,
    color: "#fff",
    right: 10,
    bottom: "25%",
    [theme.breakpoints.down("md")]: {
      maxWidth: 80,
      maxHeight: 25,
      fontSize: 12,
      right: 3,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 80,
      maxHeight: 25,
      fontSize: 10,
      right: 3,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 70,
      maxHeight: 22,
      fontSize: 10,
      right: 3,
    },
  },
});

function SelfAligningImage(props) {
  const { classes, src, title, subtitle, roundedBorder, theme } = props;
  const img = useRef();
  const [hasMoreWidthThanHeight, setHasMoreWidthThanHeight] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  const onLoad = useCallback(() => {
    if (img.current.naturalHeight < img.current.naturalWidth) {
      setHasMoreWidthThanHeight(true);
    } else {
      setHasMoreWidthThanHeight(false);
    }
    setHasLoaded(true);
  }, [img, setHasLoaded, setHasMoreWidthThanHeight]);

  return (
    <div className={classes.imageContainer}>
      <img
        style={{
          height: hasMoreWidthThanHeight ? "100%" : "auto",
          width: hasMoreWidthThanHeight ? "auto" : "100%",
          display: hasLoaded ? "block" : "none",
          borderRadius: roundedBorder ? theme.shape.borderRadius : 0,
        }}
        ref={img}
        className={classes.image}
        onLoad={onLoad}
        src={src}
        alt=""
      />
      {title && (
        <GridListTileBar
          style={{ position: "relative" }}
          title={title}
          subtitle={subtitle}
          actionIcon={
            <Button className={classNames("position-absolute", classes.button)}>
              Tham gia
            </Button>
          }
        />
      )}
    </div>
  );
}

SelfAligningImage.propTypes = {
  classes: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string,
  timeStamp: PropTypes.number,
  roundedBorder: PropTypes.bool,
};

export default withStyles(styles, { withTheme: true })(SelfAligningImage);
