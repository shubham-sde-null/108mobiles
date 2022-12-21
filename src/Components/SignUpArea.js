import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { listStyle2 } from "../Contexts/listStyle";
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
  SignUpContainer: {
    position: "absolute",
    left: "0%",
    top: "0%",
    display: "flex",
    // border: "1px solid red",
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "100vw",
    height: "100vh",
    zIndex: "100",
  },
  SignUpHolder: {
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%,-50%)",
    width: "380px",
    height: "380px",
    backgroundColor: "#ffffff",
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
  SignUpCredentials: {},
}));
function SignUpArea({ closeSignUpArea, closeLoginArea }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function signUpDetails() {
    const item = { email, password };
    let result = await fetch("http://localhost:5000/authenticatedata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    if (result) {
      result = await result.json();
      localStorage.setItem("108login", JSON.stringify(result));
      console.log("the sign up result is", result);
    }
    closeSignUpArea();
    closeLoginArea();
  }
  const classes = useStyles();
  return (
    <Box className={classes.SignUpContainer}>
      <Box className={classes.SignUpHolder}>
        <Typography
          variant="body"
          sx={{ fontSize: "24px", color: "black", fontWeight: "600" }}
        >
          108 Mobiles SignUp
        </Typography>

        <input
          className={classes.inputField}
          placeholder="email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className={classes.inputField}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <MyBtn className={classes.btn} onClick={signUpDetails}>
          SignUp
        </MyBtn>
        <Typography sx={{ color: "black", marginTop: "10px" }}>
          Already have an account?&nbsp;
          <Link
            style={listStyle2}
            onClick={() => {
              closeSignUpArea();
              closeLoginArea();
            }}
          >
            Login
          </Link>
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
            onClick={closeSignUpArea}
          />
        </Typography>
      </Box>
    </Box>
  );
}

export default SignUpArea;
