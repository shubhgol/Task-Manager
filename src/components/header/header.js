export default {
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  icon: {
    marginTop: "2px",
    marginLeft: "1px"
  },
  header: {
    background: "#311ba7",
    "& a": {
      color: "white",
      fontSize: "16px",
      textAlign: "center",
      padding: "14px 16px",
      textDecoration: "none"
    },
    "& ul": {
      border: "1px solid red",
      listStyleType: "none",
      display: "inherit"
    }
  },
  item: {
    display: "inline-flex",
    position: "relative",
    padding: "5px",
    cursor:'pointer',
    "& a": {}
  }
};
