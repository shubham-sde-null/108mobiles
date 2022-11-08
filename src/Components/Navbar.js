import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import DrawerComp from "./DrawerComp";
import { categories } from "../Contexts/Categories";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";
import { listStyle, listStyle2 } from "../Contexts/listStyle";
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
    // border: "1px solid red",
    boxSizing: "border-box",
  },
}));
function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <AppBar sx={{ backgroundColor: "#2c2c54" }}>
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
              <Link style={listStyle} to="/">
                {" "}
                <Typography
                  className={classes.Logo}
                  style={{ fontSize: "25px" }}
                >
                  108Mobiles
                </Typography>
              </Link>
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
                <Button
                  sx={{
                    color: "white",
                    fontWeight: "500",
                    fontSize: "22px",
                    textTransform: "none",
                  }}
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  {/* Login  */}
                  <LoginIcon fontSize="large" />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <Link style={listStyle2} to="/login">
                    <MenuItem onClick={handleClose}>Login</MenuItem>
                  </Link>
                  <Link style={listStyle2} to="/signup">
                    {" "}
                    <MenuItem onClick={handleClose}>Sign Up</MenuItem>
                  </Link>

                  {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                </Menu>
                {/* Login */}
              </Typography>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
