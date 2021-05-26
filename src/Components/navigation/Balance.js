import React from "react";
import PropTypes from "prop-types";
import { InputAdornment, TextField, withStyles } from "@material-ui/core";
import currencyPrettyPrint from "../../shared/functions/currencyPrettyPrint";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
const styles = {
  input: { padding: "0px 9px", cursor: "pointer" },
  outlinedInput: {
    minWidth: 120,
    height: 60,
    cursor: "pointer",
    borderRadius: 5,
    border: "1px solid #000",
    "& .MuiInputBase-root.Mui-disabled": {
      color: "initial",
      cursor: "pointer",
    },
    "& .MuiInputBase-input.Mui-disabled": {
      cursor: "pointer",
    },
    "&:hover": {
      opacity: 0.7,
      border: "1px solid red",
    },
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
  },
};

function Balance(props) {
  const { balance, classes, openAddBalanceDialog } = props;
  return (
    <div className={classes.wrapper}>
      <TextField
        disabled
        variant="outlined"
        value={balance === null ? "" : currencyPrettyPrint(balance)}
        className={classes.outlinedInput}
        readOnly
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountBalanceWalletIcon />
            </InputAdornment>
          ),
        }}
        onClick={openAddBalanceDialog}
      />
    </div>
  );
}

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Balance);
