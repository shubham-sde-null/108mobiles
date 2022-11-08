import { Box, Typography, Button } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { listStyle2 } from "../Contexts/listStyle";
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
    // border: "1px solid red",
    backgroundColor: "rgba(0,0,0,0.1)",
    width: "100vw",
    height: "100vh",
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
function SignUpArea() {
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

        <input className={classes.inputField} placeholder="email address" />
        <input className={classes.inputField} placeholder="password" />
        <MyBtn className={classes.btn}>SignUp</MyBtn>
        <Typography sx={{ color: "black", marginTop: "10px" }}>
          Already have an account?&nbsp;
          <Link style={listStyle2}>Login</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default SignUpArea;
