import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  withWidth,
  withStyles,
  Box,
  Button,
  Hidden,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import ChatIcon from "@material-ui/icons/Chat";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import PriceCard from "../../shared/components/PriceCard";
import calculateSpacing from "../../shared/components/calculateSpacing";

const styles = (theme) => ({
  containerFix: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340,
    },
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360,
    },
  },
});

function UserCare(props) {
  const { width, classes } = props;
  return (
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography variant="h3" align="center" className="lg-mg-bottom">
        CHĂM SÓC KHÁCH HÀNG
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
        >
          <Grid
            item
            className={classes.cardWrapperHighlighted}
            xs={12}
            sm={12}
            md={9}
            lg={6}
            data-aos="zoom-in-up"
            data-aos-delay="100"
          >
            <PriceCard
              highlighted
              title="Liên hệ với bộ phận
Chăm sóc khách hàng "
              pricing={
                <span>
                  <Typography>
                    Bạn có câu hỏi về giải thưởng hoặc thể lệ chơi?
                  </Typography>
                  <Typography>
                    Chat ngay với nhân viên CSKH hoặc gọi số hotline.
                  </Typography>
                </span>
              }
              features={[
                <Box>
                  <Button
                    style={{
                      backgroundColor: "rgb(220, 0, 78)",
                      width: 137,
                    }}
                    variant="contained"
                    color="secondary"
                    startIcon={<PhoneIcon />}
                  >
                    Gọi Ngay
                  </Button>
                  <Hidden xsDown>
                    <img
                      alt=""
                      src={`${process.env.PUBLIC_URL}/images/home/icon_user_care.png`}
                      style={{ position: "absolute", right: 25, top: 93 }}
                    ></img>
                  </Hidden>
                </Box>,
                <Box>
                  <Button
                    style={{
                      backgroundColor: "rgb(220, 0, 78)",
                      width: 137,
                    }}
                    variant="contained"
                    color="secondary"
                    startIcon={<ChatIcon />}
                  >
                    Chat Ngay
                  </Button>
                </Box>,
              ]}
            />
          </Grid>
          <Grid
            item
            className={classes.cardWrapperHighlighted}
            xs={12}
            sm={12}
            md={9}
            lg={6}
            data-aos="zoom-in-up"
            data-aos-delay="100"
          >
            <PriceCard
              highlighted
              title="Những câu hỏi thường gặp"
              pricing={
                <span>
                  <Typography>
                    Bạn có câu hỏi, Chúng tôi có câu trả lời.
                  </Typography>
                  <Typography>
                    Nhấn vào đây để được hỗ trợ về các câu hỏi thường gặp.
                  </Typography>
                </span>
              }
              features={[
                <Box>
                  <Button
                    style={{
                      backgroundColor: "rgb(220, 0, 78)",
                      width: 137,
                    }}
                    variant="contained"
                    color="secondary"
                    startIcon={<LiveHelpIcon />}
                  >
                    Xem Ngay
                  </Button>

                  <Hidden xsDown>
                    <img
                      alt=""
                      src={`${process.env.PUBLIC_URL}/images/home/icon_question.png`}
                      style={{ position: "absolute", right: 25, top: 93 }}
                    ></img>
                  </Hidden>
                </Box>,
              ]}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

UserCare.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(withWidth()(UserCare));
