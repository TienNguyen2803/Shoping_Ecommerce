import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  TextField,
  Button,
  Checkbox,
  Typography,
  FormControlLabel,
  withStyles,
  Box,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import FormDialog from "../../shared/components/FormDialog";
import ButtonCircularProgress from "../../shared/components/ButtonCircularProgress";
import VisibilityPasswordTextField from "../../shared/components/VisibilityPasswordTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { isEmpty } from "lodash";
const SignupSchema = yup.object().shape({
  email: yup.string().required(),
  userName: yup.string().required(),
  password: yup.string().required(),
  repeatPassword: yup.string().required(),
});
const styles = (theme) => ({
  link: {
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut,
    }),
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:enabled:hover": {
      color: theme.palette.primary.dark,
    },
    "&:enabled:focus": {
      color: theme.palette.primary.dark,
    },
  },
  actions: {
    marginTop: theme.spacing(2),
  },
});

function RegisterDialog(props) {
  const { onClose, openTermsDialog, classes } = props;
  const [isLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [checked, setChecked] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = (data) => console.log(data);
  const { email, userName, password, repeatPassword } = errors;
  return (
    <FormDialog
      loading={isLoading}
      onClose={onClose}
      open
      headline="Đăng ký"
      hideBackdrop
      hasCloseIcon
      content={
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            name="email"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email"
            autoFocus
            autoComplete="off"
            // type="email"
            error={Boolean(email)}
            helperText={isEmpty(email) ? "" : email.message}
            inputRef={register}
          />

          <TextField
            name="userName"
            variant="outlined"
            margin="normal"
            fullWidth
            label="Họ và tên"
            autoFocus
            autoComplete="off"
            inputRef={register}
            helperText={isEmpty(userName) ? "" : userName.message}
          />

          <VisibilityPasswordTextField
            variant="outlined"
            margin="normal"
            name="password"
            required
            fullWidth
            label="Mật khẩu"
            isVisible={isPasswordVisible}
            inputRef={register}
            onVisibilityChange={setIsPasswordVisible}
            helperText={isEmpty(password) ? "" : password.message}
          />

          <VisibilityPasswordTextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="repeatPassword"
            label="Nhập lại mật khẩu"
            isVisible={isPasswordVisible}
            onVisibilityChange={setIsPasswordVisible}
            inputRef={register}
            helperText={isEmpty(repeatPassword) ? "" : repeatPassword.message}
          />

          <FormControlLabel
            style={{ marginRight: 0 }}
            control={
              <Checkbox
                color="primary"
                value={checked}
                onChange={() => {
                  setChecked(!checked);
                }}
              />
            }
            label={
              <Typography variant="body1">
                Tôi đồng ý{" "}
                <span
                  className={classes.link}
                  onClick={isLoading ? null : openTermsDialog}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(event) => {
                    // For screenreaders listen to space and enter events
                    if (
                      (!isLoading && event.keyCode === 13) ||
                      event.keyCode === 32
                    ) {
                      openTermsDialog();
                    }
                  }}
                >
                  với các điều khoản và dịch vụ
                </span>
              </Typography>
            }
          />
          <Box width="100%" className={classes.actions}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              color="secondary"
              disabled={!checked}
            >
              Đăng ký
              {checked && <ButtonCircularProgress />}
            </Button>
          </Box>
        </form>
      }
    />
  );
}

RegisterDialog.propTypes = {
  theme: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  openTermsDialog: PropTypes.func.isRequired,
  status: PropTypes.string,
  setStatus: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(RegisterDialog);
