import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useHistory } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  withStyles,
  Box,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import FormDialog from "../../shared/components/FormDialog";
import RegisterDialog from "./RegisterDialog";
import ButtonCircularProgress from "../../shared/components/ButtonCircularProgress";
import VisibilityPasswordTextField from "../../shared/components/VisibilityPasswordTextField";
import HighlightedInformation from "../../shared/components/HighlightedInformation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { isEmpty } from "lodash";
const SignupSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});
const styles = (theme) => ({
  forgotPassword: {
    marginTop: theme.spacing(2),
    color: theme.palette.primary.main,
    cursor: "pointer",
    "&:enabled:hover": {
      color: theme.palette.primary.dark,
    },
    "&:enabled:focus": {
      color: theme.palette.primary.dark,
    },
  },
  textErr: {
    textAlign: "center",
  },
  disabledText: {
    cursor: "auto",
    color: theme.palette.text.disabled,
  },
  formControlLabel: {
    marginRight: 0,
  },
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

function LoginDialog(props) {
  let history = useHistory();
  const { onClose, openChangePasswordDialog, classes, status, setStatus } =
    props;
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  //handle submit
  const login = useCallback(
    (data) => {
      setIsLoading(true);
      setStatus(null);
      if (data.email !== "test@gmail.com") {
        setTimeout(() => {
          setStatus("invalidEmail");
          setIsLoading(false);
        }, 1500);
      } else if (data.password !== "Test123123") {
        setTimeout(() => {
          setStatus("invalidPassword");
          setIsLoading(false);
        }, 1500);
      } else {
        setTimeout(() => {
          localStorage.setItem("user", JSON.stringify(data));
          onClose();
          history.push("/profile");
        }, 150);
      }
    },
    [setIsLoading, setStatus]
  );

  //handle submit
  const onSubmit = (data) => {
    login(data);
  };
  const { email, password } = errors;

  return (
    <FormDialog
      loading={isLoading}
      onClose={onClose}
      open
      headline="Đăng nhập"
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

          <Box width="100%" className={classes.actions}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              color="secondary"
              disabled={isLoading}
            >
              Đăng nhập
              {isLoading && <ButtonCircularProgress />}
            </Button>
          </Box>
          <Typography
            align="center"
            className={classNames(
              classes.forgotPassword,
              isLoading ? classes.disabledText : null
            )}
            color="primary"
            onClick={isLoading ? null : openChangePasswordDialog}
            tabIndex={0}
            role="button"
            onKeyDown={(event) => {
              // For screenreaders listen to space and enter events
              if (
                (!isLoading && event.keyCode === 13) ||
                event.keyCode === 32
              ) {
                openChangePasswordDialog();
              }
            }}
          >
            Quên mật khẩu
          </Typography>
          {status === "verificationEmailSend" ? (
            <HighlightedInformation>
              Chúng tôi đã gửi hướng dẫn về cách đặt lại mật khẩu của bạn qua
              địa chỉ email
            </HighlightedInformation>
          ) : status === "invalidEmail" || status === "invalidPassword" ? (
            <HighlightedInformation className={classes.textErr}>
              Tài khoản mật khẩu không đúng.
            </HighlightedInformation>
          ) : (
            <Box></Box>
          )}
        </form>
      }
    />
  );
}

RegisterDialog.propTypes = {
  theme: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  status: PropTypes.string,
  setStatus: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(LoginDialog);
