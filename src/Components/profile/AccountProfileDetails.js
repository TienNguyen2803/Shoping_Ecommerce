import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControlLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React from "react";
const states = [
  {
    value: "alabama",
    label: "Alabama",
  },
  {
    value: "new-york",
    label: "New York",
  },
  {
    value: "san-francisco",
    label: "San Francisco",
  },
];
const useStyles = makeStyles({
  textField: {
    width: "100%",
    display: "block",
    boxSizing: "border-box",
    borderRadius: 4,
    fontSize: 14,
  },
});
const AccountProfileDetails = (props) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    firstName: "Katarina",
    lastName: "Smith",
    email: "demo@devias.io",
    phone: "",
    state: "Alabama",
    country: "USA",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <CardHeader title="Thông tin cá nhân" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="Họ và tên"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              style={{ marginBottom: 20 }}
              item
              container
              direction="row"
              alignContent="center"
              md={6}
              xs={12}
            >
              <Grid item container alignItems="center" xs={2}>
                <Typography>Giới tính</Typography>
              </Grid>
              <Grid item container xs={10}>
                <RadioGroup
                  style={{ marginLeft: 20, flexDirection: "row" }}
                  aria-label="Giới tính"
                >
                  <FormControlLabel
                    value="Name"
                    control={<Radio />}
                    label="Name"
                  />
                  <FormControlLabel value="Nữ" control={<Radio />} label="Nữ" />
                </RadioGroup>
              </Grid>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Mật khẩu"
                name="password"
                onChange={handleChange}
                required
                type="password"
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  className={classes.textField}
                  inputVariant="outlined"
                  fullWidth
                  margin="normal"
                  id="date-picker-dialog"
                  label="Năm sinh"
                  format="MM/dd/yyyy"
                  value={new Date()}
                  onChange={() => {}}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="Địa chỉ"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: 10,
          }}
        >
          <Button color="primary" size="large" variant="contained">
            Lưu
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
