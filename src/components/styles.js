const styles = {
  form: {
    textAllign: "center"
  },
  Enicar: {
    //login & signup style
    height: "120px",
    width: "350px",
    margin: "15px auto 20px auto"
  },
  pageTitle: { margin: "8px auto 20px 110px" },
  textFiels: { margin: "20px auto 20px auto" },
  button: {
    margin: "20px auto 20px 115px",
    height: "40px",
    width: "110px",
    position: "relative"
  },
  generalErr: {
    color: "red",
    fontSize: "1.0rem",
    margin: "10px auto auto 50px"
  },
  sign: {
    margin: "10px auto auto 50px",
    fontSize: "1.0rem"
  },
  progress: {
    position: "absolute"
  },
  //scream style
  card: {
    display: "flex",
    marginBottom: 5,
    marginTop: 15
  },
  image: {
    minWidth: 100
  },
  content: {},

  paper: {
    marginTop: 15,
    marginLeft: 10
  },
  editbutton: {
    float: "right"
  },

  //profile style
  profile: {
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",
      "& button": {
        position: "absolute",
        top: "80%",
        left: "70%"
      }
    },
    "& .profile-image": {
      width: 200,
      height: 200,
      objectFit: "cover",
      maxWidth: "100%",
      borderRadius: "50%"
    },
    "& .profile-details": {
      textAlign: "center",
      "& span, svg": {
        verticalAlign: "middle"
      },
      "& a": {
        color: "#00bcd4"
      }
    },
    "& hr": {
      border: "none",
      margin: "0 0 10px 0"
    },
    "& svg.button": {
      "&:hover": {
        cursor: "pointer"
      }
    }
  },
  buttons: {
    textAlign: "center",
    "& a": {
      margin: "20px 10px"
    }
  },
  handle: {
    height: 20,

    width: 60,
    margin: "0 auto 7px auto"
  },
  fullLine: {
    height: 15,
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "100%",
    marginBottom: 10
  },
  halfLine: {
    height: 15,
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "50%",
    marginBottom: 10
  }
};

export default styles;
