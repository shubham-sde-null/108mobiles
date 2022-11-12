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
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { mobileData } from "../redux/action";
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
  "oneplus 10 Pro",
  "poco m4 pro 5G",
  "infinix note 12 pro 5g",
  "realme gt neo 2",
  "iphone 14 pro",
];
// const defaultValues = [
//   "pocof1",
//   "xiaomi",
//   "onelplus9 pro",
//   "poco x3 pro",
//   "samsung",
//   "infinix",
//   "poco f3 gt",
//   "oneplus10 pro",
//   "infinix note 12 pro",
// ];
function Navbar() {
  const dataNav = useSelector((state) => state.completeMobileData);
  let jsonObject = dataNav.map(JSON.stringify);
  let uniqueSet = new Set(jsonObject);
  let uniqueArray = Array.from(uniqueSet).map(JSON.parse);
  console.log("the data received on nav page is:", uniqueArray);
  const autoSuggestData = uniqueArray.map((item) => item.mobilename);
  console.log("the name of mobiles", autoSuggestData);
  // console.log("the data received on nav page is:", dataNav);
  // const dispatch = useDispatch();

  // const [mobileNames, setMobileNames] = useState([]);
  // useMemo(() => {
  // async function getData() {
  //   const data = await fetch("http://localhost:5000/mobiledata")
  //     .then((data) => data.json())
  //     .then((result) => result.map((item) => item.mobilename));
  //   // console.log("the data is:", data);
  //   setMobileNames([...data]);
  // }
  // async function getData() {
  //   const data = await fetch("http://localhost:5000/mobiledata").then(
  //     (data) => data.json()
  //   );
  //   console.log("the data from the redux is:", data);
  //   dispatch(
  //     mobileData(
  //       data[0].mobilename,
  //       data[0].displaysize,
  //       data[0].displaytype,
  //       data[0].resolution,
  //       data[0].screentobodyratio,
  //       data[0].ppi,
  //       data[0].refreshrate,
  //       data[0].hdr,
  //       data[0].screenprotection,
  //       data[0].dustwaterresistance,
  //       data[0].brightness,
  //       data[0].os,
  //       data[0].chipset,
  //       data[0].processorcore,
  //       data[0].gpu,
  //       data[0].wideangle,
  //       data[0].ultrawide,
  //       data[0].depth,
  //       data[0].macro,
  //       data[0].telephoto,
  //       data[0].frontcamera,
  //       data[0].ramvariant1,
  //       data[0].ramvariant2,
  //       data[0].ramvariant3,
  //       data[0].ramvariant4,
  //       data[0].storagetype,
  //       data[0].memorycardoption,
  //       data[0].expandableoption,
  //       data[0].batterycapacity,
  //       data[0].batteryspeed,
  //       data[0].fingerprint,
  //       data[0].facelock,
  //       data[0].bluetooth,
  //       data[0].port,
  //       data[0].nfc,
  //       data[0].fiveg,
  //       data[0].stereo,
  //       data[0].jack,
  //       data[0].frontimage,
  //       data[0].backimage,
  //       data[0].leftimage,
  //       data[0].rightimage
  //     )
  //   );

  // data.map((item)=>({

  // }))
  //   }
  //   getData();
  // }, []);

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
          // const newArray = mobileNames
          //   .map((item) => item.mobileNames)
          //   .filter((item) => item.includes(inputValue.toLowerCase()));
          // return newArray;
          const newArry = autoSuggestData.filter((item) =>
            item.includes(inputValue.toLowerCase())
          );
          return newArry;
        });
  }, [inputValue, autoSuggestData]);
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
                  onMouseEnter={openAutoSuggest}
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
