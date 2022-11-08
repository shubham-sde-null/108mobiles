import { Typography, Box, Button } from "@mui/material";
import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import PopularMobileComparison from "./PopularMobileComparison";
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
}));
function CompareMobile() {
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
            />
          </Box>
          <Box className={classes.searchMobileToAdd}>
            <SearchIcon className={classes.searchIcon} />
            <input
              className={classes.inputField}
              placeholder="Search Mobile to add"
            />
          </Box>
          <Box className={classes.searchMobileToAdd}>
            <SearchIcon className={classes.searchIcon} />
            <input
              className={classes.inputField}
              placeholder="Search Mobile to add"
            />
          </Box>
          <Box className={classes.searchMobileToAdd}>
            <SearchIcon className={classes.searchIcon} />
            <input
              className={classes.inputField}
              placeholder="Search Mobile to add"
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
      <PopularMobileComparison />
    </React.Fragment>
    // this is the main container
    //   main container has three parts first is heading, second is the search for mobiles and the last one is the suggested compares
  );
}

export default CompareMobile;
