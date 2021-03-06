const styles = (theme) => ({
  appBar: {
    height: 100,
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
  },
  brandText: {
    fontSize: 40,
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
  noDecoration: {
    alignSelf: "center",
    textDecoration: "none !important ",
    padding: "0px 10px",
  },

  box_username: {
    border: "1px solid #000",
    borderRadius: 5,
  },
  root: {
    paddingBottom: 150,
  },
});

export default styles;
