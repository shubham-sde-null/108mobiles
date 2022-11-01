import React from "react";
import AppBar from "@mui/material/AppBar";
import DrawerComp from "./DrawerComp";
import { categories } from "../Contexts/Categories";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import {
  Grid,
  Toolbar,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme) => ({
  Logo: {
    // border: "1px solid red",
    // fontSize: "25px",
    // width: "100%",
    // height: "100%",
    // [theme.breakpoints.down("sm")]: {
    //   color: "red",
    // },
  },
  Logos: {
    fontSize: "17px",
    // display: "block",
    textAlign: "center",
    // border: "1px solid red",
    // width: "100%",
    margin: "auto",
  },
  Login: {
    fontSize: "30px",
    // border: "1px solid red",
  },
  Logins: {
    fontSize: "15px",
  },
  GridContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // border: "1px solid yellow",
    height: "50px",
  },
  GridUtility: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    // border: "1px solid hotpink",
  },
  searchBar: {
    width: "100%",
    height: "60%",
    borderRadius: "3px",
    outline: "none",
    border: "none",
    paddingLeft: "10px",
  },
  searchBarCont: {
    display: "flex",
    width: "80%",
    alignItems: "center",
    height: "100%",
  },
  searchBarContH: {
    visibility: "hidden",
  },
  gridSearch: {
    // border: "1px solid black",
    height: "100%",
  },
  smallScreen: {
    display: "flex",
    // border: "1px solid red",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));
function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <AppBar>
      <Toolbar>
        {isMatch ? (
          <div className={classes.smallScreen}>
            <DrawerComp categories={categories} />
            <Typography
              className={`${isMatch ? `${classes.Logos}` : `${classes.Logo}`}`}
            >
              108Mobiles
            </Typography>
            <IconButton>
              <LoginRoundedIcon sx={{ color: "white" }} />
            </IconButton>
          </div>
        ) : (
          <Grid container className={classes.GridContainer}>
            <Grid item xs={2} className={classes.GridUtility}>
              <Typography className={classes.Logo} style={{ fontSize: "25px" }}>
                108Mobiles
              </Typography>
            </Grid>
            <Grid
              item
              xs={8}
              className={classes.GridUtility}
              width="100%"
              //   border="1px solid green"
            >
              <Box
                className={`${
                  isMatch
                    ? `${classes.searchBarContH}`
                    : `${classes.searchBarCont}`
                }`}
              >
                <input
                  type="text"
                  placeholder="search item here"
                  className={classes.searchBar}
                />

                <SearchIcon sx={{ paddingLeft: "10px" }} fontSize="medium" />
              </Box>
            </Grid>
            <Grid item xs={2} className={classes.GridUtility}>
              <Typography
                className={`${
                  isMatch ? `${classes.Logins}` : `${classes.Login}`
                }`}
                style={{ fontSize: "25px" }}
              >
                Login
              </Typography>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
