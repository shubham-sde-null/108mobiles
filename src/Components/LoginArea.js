import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { listStyle2 } from "../Contexts/listStyle";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

import CloseIcon from "@mui/icons-material/Close";
const MyBtn = styled(Button)({
  // border: "1px solid hotpink",
  width: "85%",
  backgroundColor: "#ff3f34",
  color: "white",
  fontWeight: "bold",
  marginTop: "20px",
  marginBottom: "10px",
  "&:hover": {
    backgroundColor: "#f53b57",
  },
});
const useStyles = makeStyles(() => ({
  loginContainer: {
    position: "absolute",
    left: "0%",
    top: "0%",
    display: "flex",
    // border: "3px solid red",
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "100vw",
    height: "100vh",
    // background: "transparent",
    zIndex: "100",
  },
  loginHolder: {
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%,-50%)",
    width: "380px",
    height: "380px",
    backgroundColor: "#ffffff",
    background: "transparent",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "50px",
    // gap: "40px",
    // marginTop: "50px",
    // border: "1px solid red",
  },
  closeButton: {
    top: "23%",
    left: "63%",
    position: "absolute",
    transform: "translate(-23%,-63%)",
    width: "50px",
    height: "40px",
    // backgroundColor: "#ffffff",
    // background: "transparent",
    borderRadius: "5px",
    display: "flex",

    alignItems: "center",
    justifyContent: "center",
    // paddingTop: "50px",
    // gap: "40px",
    // marginTop: "50px",
    // border: "1px solid green",
    "&:hover": {
      cursor: "pointer",
    },
  },
  closeButtonH: {
    top: "30%",
    left: "76%",
    position: "absolute",
    transform: "translate(-23%,-63%)",
    width: "50px",
    height: "40px",
    // backgroundColor: "#ffffff",
    // background: "transparent",
    borderRadius: "5px",
    display: "flex",

    alignItems: "center",
    justifyContent: "center",
    // paddingTop: "50px",
    // gap: "40px",
    // marginTop: "50px",
    // border: "1px solid green",
    "&:hover": {
      cursor: "pointer",
    },
  },
  inputField: {
    marginTop: "20px",
    fontSize: "16px",
    width: "85%",
    height: "30px",
    outline: "none",
    border: "0.01px solid lightgray",
    borderRadius: "5px",
    paddingLeft: "5px",
    "&::placeholder": {
      fontSize: "16px",
    },
  },
  loginCredentials: {},
}));
function LoginArea({ closeLoginArea, closeSignUpArea }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
  return (
    <Box className={classes.loginContainer}>
      <Box className={classes.loginHolder}>
        <Typography
          variant="body"
          sx={{ fontSize: "24px", color: "black", fontWeight: "600" }}
        >
          108 Mobiles Login
        </Typography>

        <input className={classes.inputField} placeholder="email address" />
        <input className={classes.inputField} placeholder="password" />
        <MyBtn className={classes.btn}>Login</MyBtn>
        <Typography sx={{ color: "black", marginTop: "10px" }}>
          Don't have an account?&nbsp;
          <Link
            style={listStyle2}
            onClick={() => {
              closeLoginArea();
              closeSignUpArea();
            }}
          >
            Sign Up
          </Link>
        </Typography>
        <Typography
          variant="body"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
            marginTop: "15px",
          }}
        >
          Sign In With &nbsp; <FacebookIcon color="primary" />
          <GoogleIcon color="warning" />
        </Typography>
      </Box>
      <Box
        className={`${
          isMatch ? `${classes.closeButtonH}` : `${classes.closeButton}`
        }`}
      >
        <Typography variant="body" sx={{ color: "red" }}>
          <CloseIcon
            fontSize="large"
            sx={{
              color: "white",
              "&:hover": { color: "black", border: "0.5px solid white" },
            }}
            onClick={closeLoginArea}
          />
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginArea;
