import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Card,
} from "@material-ui/core";
import MarkunreadMailboxRoundedIcon from "@material-ui/icons/MarkunreadMailboxRounded";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import AccountBalanceWalletRoundedIcon from "@material-ui/icons/AccountBalanceWalletRounded";
import RedeemRoundedIcon from "@material-ui/icons/RedeemRounded";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    width: "100%",
    marginTop: 30,
  },
}));

function SideBar(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <List className={classes.root}>
        <ListItem button>
          <ListItemIcon>
            <PeopleRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Thông tin cá nhân"></ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <MarkunreadMailboxRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Mã của tôi"></ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <RedeemRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Ưu đãi"></ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AccountBalanceWalletRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Ví"></ListItemText>
        </ListItem>
      </List>
    </Card>
  );
}

export default SideBar;
