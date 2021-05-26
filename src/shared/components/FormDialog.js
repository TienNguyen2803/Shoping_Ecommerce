import React from "react";
import PropTypes from "prop-types";
import { Dialog, DialogContent, withStyles } from "@material-ui/core";
import DialogTitleWithCloseIcon from "./DialogTitleWithCloseIcon";

const styles = (theme) => ({
  dialogPaper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: theme.spacing(3),
    maxWidth: 420,
  },
  actions: {
    marginTop: theme.spacing(2),
  },
  dialogPaperScrollPaper: {
    maxHeight: "none",
  },
  dialogContent: {
    paddingTop: 0,
    paddingBottom: 0,
  },
});

/**
 * A Wrapper around the Dialog component to create centered
 * Login, Register or other Dialogs.
 */
function FormDialog(props) {
  const { classes, open, onClose, loading, headline, content, hideBackdrop } =
    props;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      disableBackdropClick={loading}
      disableEscapeKeyDown={loading}
      classes={{
        paper: classes.dialogPaper,
        paperScrollPaper: classes.dialogPaperScrollPaper,
      }}
      hideBackdrop={hideBackdrop ? hideBackdrop : false}
    >
      <DialogTitleWithCloseIcon
        title={headline}
        onClose={onClose}
        disabled={loading}
      />
      <DialogContent className={classes.dialogContent}>{content}</DialogContent>
    </Dialog>
  );
}

FormDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  headline: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  content: PropTypes.element.isRequired,
  hideBackdrop: PropTypes.bool.isRequired,
};

export default withStyles(styles, { withTheme: true })(FormDialog);
