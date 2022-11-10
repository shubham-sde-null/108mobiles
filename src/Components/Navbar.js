import React, { useState, useEffect } from "react";
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
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
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
  autoSuggestHolder: {
    position: "absolute",
    top: "48px",
    left: "367px",
    width: "49.3%",
    minHeight: "30px",
    height: "fit-content",
    border: "1px solid lightgray",
    borderRadius: "5px",
    color: "black",
    backgroundColor: "white",
    // paddingLeft: "7px",
  },
}));
const historyValues = [
  "oneplus 10R 5G",
  "poco m4 pro 5G",
  "infinix note 12 pro 5g",
  "realme gt neo 2",
  "iphone 14 pro",
];
const defaultValues = [
  "pocof1",
  "xiaomi",
  "onelplus9 pro",
  "poco x3 pro",
  "samsung",
  "infinix",
  "poco f3 gt",
  "oneplus10 pro",
  "infinix note 12 pro",
];
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

  const [autoSuggest, setAutoSuggest] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredArray, setFilteredArray] = useState(historyValues);
  const openAutoSuggest = () => {
    setAutoSuggest(!autoSuggest);
    setFilteredArray(historyValues);
  };
  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };
  useEffect(() => {
    inputValue === ""
      ? setFilteredArray(historyValues)
      : setFilteredArray((_) => {
          const newArry = defaultValues.filter((item) =>
            item.includes(inputValue.toLowerCase())
          );
          return newArry;
        });
  }, [inputValue]);
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
                  onClick={openAutoSuggest}
                  onChange={inputValueHandler}
                  type="text"
                  placeholder="search item here"
                  className={classes.searchBar}
                />

                <SearchIcon sx={{ paddingLeft: "10px" }} fontSize="medium" />
              </Box>
            </Grid>

            {/* this will work when user enter some search in search bar */}
            {autoSuggest && (
              <Box className={classes.autoSuggestHolder}>
                {filteredArray.map((item) => (
                  <Link style={listStyle2} to={`/mobiles/${item}`}>
                    {" "}
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        paddingLeft: "7px",
                        "&:hover": { backgroundColor: "#d1ccc0" },
                      }}
                    >
                      <TrendingUpIcon fontSize="small" />
                      &nbsp;
                      {item}
                    </Typography>
                  </Link>
                ))}
              </Box>
            )}
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
