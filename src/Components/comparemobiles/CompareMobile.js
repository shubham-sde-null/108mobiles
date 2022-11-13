import { Typography, Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import PopularMobileComparison from "./PopularMobileComparison";
import { useSelector } from "react-redux";
import { listStyle2 } from "../../Contexts/listStyle";
import { Link } from "react-router-dom";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MobileCameForComparison from "./MobileCameForComparison";
//implementing the autosugget features

const historyValues = [
  "oneplus 10 pro",
  "samsung galaxy s21 fe",
  "infinix note 12 pro 5g",
  "realme gt neo 2",
  "iphone 14 pro",
  "oneplus 10r 5g",
];
//end of auto suggest features
const useStyles = makeStyles(() => ({
  compareMobileOuterCont: {
    display: "flex",
    flexDirection: "column",
    // border: "1px solid red",
    width: "70%",
    margin: "auto",
    marginTop: "65px",
    backgroundColor: "white",
    borderRadius: "5px",
  },
  searchMobileForCompare: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    // border: "2px solid green",
    height: "60px",
    backgroundColor: "#1e272e",
    borderRadius: "5px",
  },
  searchMobileToAdd: {
    display: "flex",
    alignItems: "center",
    // border: "1px solid black",
    height: "80%",
    backgroundColor: "white",
    borderRadius: "3px",
  },
  inputField: {
    // border: "1px solid #596275",
    borderRadius: "3px",
    border: "none",
    height: "80%",
    padding: "5px",
    paddingLeft: "0px",
    margin: "5px",
    outline: "none",
    maxWidth: "150px",
    fontSize: "16px",
    "&::placeholder": {
      color: "#596275",
      fontSize: "15px",
    },
  },
  searchIcon: {
    height: "80%",
    fontSize: "30px",
    paddingLeft: "5px",
    paddingRight: "5px",
    color: "#596275",
  },
  suggestedCompare: {
    display: "flex",
    // border: "1px solid red",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "8px",
    paddingRight: "25px",
    paddingTop: "10px",
    paddingBottom: "10px",
    // gap: "90px",
    backgroundColor: "#d2dae2",
  },
  suggestedInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    // border: "1px solid black",
    width: "85%",
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    // border: "1px solid red",
    height: "85%",
    paddingTop: "5px",
    paddingBottom: "5px",
  },
  suggestedDataHolder: {
    display: "flex",
    flexDirection: "column",
    // border: "1px solid red",
    backgroundColor: "white",
    width: "210px",
    height: "190px",
    alignItems: "center",
    justifyContent: "center",
    margin: "5px",
  },
  button: {
    // border: "1px solid hotpink",
    width: "85%",
    backgroundColor: "#575fcf",
    color: "white",
    fontWeight: "bold",
    marginTop: "5px",
    "&:hover": {
      backgroundColor: "#3c40c6",
    },
  },
  autoSuggestHolder1: {
    position: "absolute",
    top: "180px",
    left: "425px",
    width: "13.2%",
    minHeight: "30px",
    height: "fit-content",
    border: "1px solid lightgray",
    borderRadius: "5px",
    color: "black",
    backgroundColor: "#ecf0f1",
    // paddingLeft: "7px",
  },
  autoSuggestHolder2: {
    position: "absolute",
    top: "180px",
    left: "634px",
    width: "13.2%",
    minHeight: "30px",
    height: "fit-content",
    border: "1px solid lightgray",
    borderRadius: "5px",
    color: "black",
    backgroundColor: "#ecf0f1",
    // paddingLeft: "7px",
  },
  autoSuggestHolder3: {
    position: "absolute",
    top: "180px",
    left: "843px",
    width: "13.2%",
    minHeight: "30px",
    height: "fit-content",
    border: "1px solid lightgray",
    borderRadius: "5px",
    color: "black",
    backgroundColor: "#ecf0f1",
    // paddingLeft: "7px",
  },
  autoSuggestHolder4: {
    position: "absolute",
    top: "180px",
    left: "1052px",
    width: "13.2%",
    minHeight: "30px",
    height: "fit-content",
    border: "1px solid lightgray",
    borderRadius: "5px",
    color: "black",
    backgroundColor: "#ecf0f1",
    // paddingLeft: "7px",
  },
}));
function CompareMobile() {
  const dataNav = useSelector((state) => state.completeMobileData);
  let jsonObject = dataNav.map(JSON.stringify);
  let uniqueSet = new Set(jsonObject);
  let uniqueArray = Array.from(uniqueSet).map(JSON.parse);
  console.log("the data received on nav page is:", uniqueArray);
  const autoSuggestData = uniqueArray.map((item) => item.mobilename);
  console.log("the name of mobiles", autoSuggestData);
  const [autoSuggest1, setAutoSuggest1] = useState(false);
  const [autoSuggest2, setAutoSuggest2] = useState(false);
  const [autoSuggest3, setAutoSuggest3] = useState(false);
  const [autoSuggest4, setAutoSuggest4] = useState(false);
  const [linkClicked, setLinkClicked] = useState(false);
  const [filteredArray, setFilteredArray] = useState(historyValues);
  const [inputValue, setInputValue] = useState("");
  const [mobile1, setMobile1] = useState("");
  const [mobile2, setMobile2] = useState("");
  const [mobile3, setMobile3] = useState("");
  const [mobile4, setMobile4] = useState("");
  const openAutoSuggest1 = () => {
    setAutoSuggest1(!autoSuggest1);
    setFilteredArray(historyValues);
  };
  const openAutoSuggest2 = () => {
    setAutoSuggest2(!autoSuggest2);
    setFilteredArray(historyValues);
  };
  const openAutoSuggest3 = () => {
    setAutoSuggest3(!autoSuggest3);
    setFilteredArray(historyValues);
  };
  const openAutoSuggest4 = () => {
    setAutoSuggest4(!autoSuggest4);
    setFilteredArray(historyValues);
  };
  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };
  const linkClickedChecker = () => {
    setLinkClicked(!linkClicked);
  };
  // const getTheSelectedMobile = (e) => {
  //   console.log("the mobile i selected is", e.target.value);
  // };
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
  }, [inputValue]);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.compareMobileOuterCont}>
        {/* this is the first part of the box */}
        <Typography
          variant="body"
          sx={{
            fontSize: "22px",
            paddingLeft: "30px",
            paddingTop: "15px",
            paddingBottom: "15px",
            fontWeight: "600",
          }}
        >
          Compare Mobiles
        </Typography>
        {/* this is the second part of the box  */}
        <Box className={classes.searchMobileForCompare}>
          <Typography
            sx={{
              // border: "1px solid red",
              width: "150px",
              color: "white",
              fontWeight: "600",
            }}
          >
            Search Mobiles To Compare
          </Typography>
          <Box className={classes.searchMobileToAdd}>
            <SearchIcon className={classes.searchIcon} />
            <input
              className={classes.inputField}
              placeholder="Search Mobile to add"
              onClick={openAutoSuggest1}
              onKeyUp={inputValueHandler}
              autoComplete="off"
            />
          </Box>
          <Box className={classes.searchMobileToAdd}>
            <SearchIcon className={classes.searchIcon} />
            <input
              className={classes.inputField}
              placeholder="Search Mobile to add"
              onClick={openAutoSuggest2}
              onKeyUp={inputValueHandler}
              autoComplete="off"
            />
          </Box>
          <Box className={classes.searchMobileToAdd}>
            <SearchIcon className={classes.searchIcon} />
            <input
              className={classes.inputField}
              placeholder="Search Mobile to add"
              onClick={openAutoSuggest3}
              onKeyUp={inputValueHandler}
              autoComplete="off"
            />
          </Box>
          <Box className={classes.searchMobileToAdd}>
            <SearchIcon className={classes.searchIcon} />
            <input
              className={classes.inputField}
              placeholder="Search Mobile to add"
              onClick={openAutoSuggest4}
              onKeyUp={inputValueHandler}
              autoComplete="off"
            />
          </Box>
        </Box>
        {/* this is the third part of the box which is the suggest compare  */}
        <Box className={classes.suggestedCompare}>
          <Typography
            sx={{
              maxWidth: "180px",
              fontSize: "18px",
              fontWeight: "bold",
              // border: "1px solid red",
            }}
          >
            Compare Suggested Mobile
          </Typography>
          <Box className={classes.suggestedDataHolder}>
            <Box className={classes.suggestedInner}>
              <img
                src="https://i.postimg.cc/y8WY4BXj/oneplus10rfront.png"
                width="55px"
                alt=""
              />
              <Box className={classes.textContainer}>
                <Typography variant="body" sx={{ fontWeight: "500" }}>
                  Oneplus 10
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#ff3f34",
                  }}
                >
                  <CurrencyRupeeIcon fontSize="small" /> 60,000/-
                </Typography>
              </Box>
            </Box>
            <Button variant="outlined" className={classes.button}>
              +Compare
            </Button>
          </Box>
          <Box className={classes.suggestedDataHolder}>
            <Box className={classes.suggestedInner}>
              <img
                src="https://i.postimg.cc/y8WY4BXj/oneplus10rfront.png"
                width="55px"
                alt=""
              />
              <Box className={classes.textContainer}>
                <Typography variant="body" sx={{ fontWeight: "500" }}>
                  Oneplus 10
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#ff3f34",
                  }}
                >
                  <CurrencyRupeeIcon fontSize="small" /> 60,000/-
                </Typography>
              </Box>
            </Box>
            <Button variant="outlined" className={classes.button}>
              +Compare
            </Button>
          </Box>
          <Box className={classes.suggestedDataHolder}>
            <Box className={classes.suggestedInner}>
              <img
                src="https://i.postimg.cc/y8WY4BXj/oneplus10rfront.png"
                width="55px"
                alt=""
              />
              <Box className={classes.textContainer}>
                <Typography variant="body" sx={{ fontWeight: "500" }}>
                  Oneplus 10
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#ff3f34",
                  }}
                >
                  <CurrencyRupeeIcon fontSize="small" /> 60,000/-
                </Typography>
              </Box>
            </Box>
            <Button variant="outlined" className={classes.button}>
              +Compare
            </Button>
          </Box>
          <Box className={classes.suggestedDataHolder}>
            <Box className={classes.suggestedInner}>
              <img
                src="https://i.postimg.cc/y8WY4BXj/oneplus10rfront.png"
                width="55px"
                alt=""
              />
              <Box className={classes.textContainer}>
                <Typography variant="body" sx={{ fontWeight: "500" }}>
                  Oneplus 10
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#ff3f34",
                  }}
                >
                  <CurrencyRupeeIcon fontSize="small" /> 60,000/-
                </Typography>
              </Box>
            </Box>
            <Button variant="outlined" className={classes.button}>
              +Compare
            </Button>
          </Box>
        </Box>
      </Box>
      {autoSuggest1 && (
        <Box className={classes.autoSuggestHolder1}>
          {filteredArray.map((item) => (
            <Link
              style={listStyle2}
              to={`/comparemobiles`}
              onClick={(e) => {
                linkClickedChecker();
                setMobile1(item);
                openAutoSuggest1();
              }}
            >
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
      {autoSuggest2 && (
        <Box className={classes.autoSuggestHolder2}>
          {filteredArray.map((item) => (
            <Link
              style={listStyle2}
              to={`/comparemobiles`}
              onClick={() => {
                linkClickedChecker();
                setMobile2(item);
                openAutoSuggest2();
              }}
            >
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
      {autoSuggest3 && (
        <Box className={classes.autoSuggestHolder3}>
          {filteredArray.map((item) => (
            <Link
              style={listStyle2}
              to={`/comparemobiles`}
              onClick={() => {
                linkClickedChecker();
                setMobile3(item);
                openAutoSuggest3();
              }}
            >
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
      {autoSuggest4 && (
        <Box className={classes.autoSuggestHolder4}>
          {filteredArray.map((item) => (
            <Link
              style={listStyle2}
              to={`/comparemobiles`}
              onClick={() => {
                linkClickedChecker();
                setMobile4(item);
                openAutoSuggest4();
              }}
            >
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
      {linkClicked ? (
        <MobileCameForComparison
          mobile1={mobile1}
          mobile2={mobile2}
          mobile3={mobile3}
          mobile4={mobile4}
        />
      ) : (
        <PopularMobileComparison />
      )}
      {/* <PopularMobileComparison /> */}
    </React.Fragment>
    // this is the main container
    //   main container has three parts first is heading, second is the search for mobiles and the last one is the suggested compares
  );
}

export default CompareMobile;
