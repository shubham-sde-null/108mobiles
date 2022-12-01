import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
const useStyles = makeStyles(() => ({
  mainText: {
    fontSize: "22px",
    fontWeight: "600",
    paddingLeft: "30px",
    paddingTop: "15px",
    paddingBottom: "15px",
  },
  mainTextH: {
    fontSize: "16px",
    fontWeight: "600",
    paddingLeft: "15px",
    paddingTop: "15px",
    paddingBottom: "15px",
    // border: "1px solid green",
  },
  titleLarge: {
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    fontWeight: "500",
    color: "#ff3f34",
  },
  titleSmall: {
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    fontWeight: "500",
    color: "#ff3f34",
    // border: "1px solid red",
  },
  titleLargeN: {
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    fontWeight: "500",
    color: "black",
  },
  titleSmallN: {
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    fontWeight: "500",
    color: "black",
  },
  popularMobContainer: {
    display: "flex",
    flexDirection: "column",
    // border: "1px solid red",
    marginTop: "10px",
    width: "70%",
    margin: "auto",
    backgroundColor: "white",
    borderRadius: "5px",
  },
  popularMobContainerH: {
    display: "flex",
    flexDirection: "column",
    // border: "3px solid black",
    marginTop: "3px",
    width: "100%",
    margin: "auto",
    backgroundColor: "white",
    borderRadius: "5px",
  },
  firstBox: {
    // border: "1px solid orange",
    height: "fit-content",
  },
  secondBox: {
    // border: "1px solid blue",
  },
  thirdBox: {
    display: "flex",
    border: "0.5px solid lightgray",
    // border: "2px solid orange",
    borderRadius: "5px",
    height: "200px",
    marginBottom: "10px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  },
  thirdBoxH: {
    display: "flex",
    flexDirection: "column",
    border: "0.5px solid lightgray",
    // border: "3px solid black",
    borderRadius: "5px",
    height: "fit-content",
    // height: "200px",
    // marginBottom: "20px",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  },
  thirdBoxChild: {
    display: "flex",
    // border: "3px solid hotpink",
    width: "50%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  thirdBoxChildH: {
    display: "flex",
    // border: "3px solid orange",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "5px",
  },
  thirdBoxSub: {
    // border: "2px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    border: "0.5px solid lightgray",
    height: "100%",
  },
  thirdBoxSubH: {
    // border: "3px solid green",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    border: "0.5px solid lightgray",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    // height: "100%",
  },
  thirdBoxSubInner: {
    display: "flex",
    // border: "1px solid lightgray",
    padding: "10px",
    borderRadius: "5px",
    justifyContent: "space-between",
    alignItems: "center",
    width: "75%",
    gap: "15px",
    // paddingLeft: "60px",
    // paddingRight: "60px",
    // marginRight: "60px",
    margin: "auto",
  },
  thirdBoxSubInnerLeft: {
    display: "flex",
    // border: "2px solid red",
    // width: "50%",
  },
  thirdBoxSubInnerRight: {
    display: "flex",
    flexDirection: "row-reverse",
    // border: "2px solid red",
  },
  boxUtility: {
    display: "flex",
    flexDirection: "column",
    // border: "1px solid red",
    justifyContent: "space-between",
    alignItems: "center",
    // dir: "rtl",
  },
  button: {
    // border: "1px solid hotpink",
    width: "35%",
    backgroundColor: "#575fcf",
    color: "white",
    fontWeight: "bold",
    marginTop: "5px",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: "#3c40c6",
    },
  },
}));
const popularRunner = ["one", "two", "three", "four", "five", "six"];
function PopularMobileComparison() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  return (
    <Box
      className={`${
        isMatch
          ? `${classes.popularMobContainerH}`
          : `${classes.popularMobContainer}`
      }`}
      // style={{ display: isMatch ? "none" : "flex" }}
    >
      <Typography
        variant="body"
        className={`${
          isMatch ? `${classes.mainTextH}` : `${classes.mainText}`
        }`}
        // sx={{
        //   fontSize: "22px",
        //   fontWeight: "600",
        //   paddingLeft: "30px",
        //   paddingTop: "15px",
        //   paddingBottom: "15px",
        // }}
      >
        Popular Mobile Comparisons
      </Typography>
      {popularRunner.map(() => (
        <Box className={classes.firstBox}>
          <Box className={classes.secondBox}>
            <Box
              className={`${
                isMatch ? `${classes.thirdBoxH}` : `${classes.thirdBox}`
              }`}
            >
              <Box
                className={`${
                  isMatch
                    ? `${classes.thirdBoxChildH}`
                    : `${classes.thirdBoxChild}`
                }`}
              >
                <Box
                  className={`${
                    isMatch
                      ? `${classes.thirdBoxSubH}`
                      : `${classes.thirdBoxSub}`
                  }`}
                >
                  <Box className={classes.thirdBoxSubInner}>
                    <Box className={classes.thirdBoxSubInnerLeft}>
                      <Box className={classes.boxUtility}>
                        <Typography
                          variant="body"
                          className={`${
                            isMatch
                              ? `${classes.titleSmallN}`
                              : `${classes.titleLargeN}`
                          }`}
                        >
                          Motorola Moto G82
                        </Typography>
                        <Typography
                          variant="body"
                          className={`${
                            isMatch
                              ? `${classes.titleSmall}`
                              : `${classes.titleLarge}`
                          }`}
                          // sx={{
                          //   display: "flex",
                          //   alignItems: "center",
                          //   fontWeight: "500",
                          //   color: "#ff3f34",
                          // }}
                        >
                          {" "}
                          <CurrencyRupeeIcon fontSize="small" /> 30,000
                        </Typography>
                      </Box>
                      <img
                        src="https://i.postimg.cc/mgFfyryv/moto-g82-front460x920.png"
                        width={isMatch ? "40px" : "60px"}
                        alt=""
                      />
                    </Box>
                    <Typography>VS</Typography>
                    <Box className={classes.thirdBoxSubInnerRight}>
                      <Box className={classes.boxUtility}>
                        <Typography
                          variant="body"
                          className={`${
                            isMatch
                              ? `${classes.titleSmallN}`
                              : `${classes.titleLargeN}`
                          }`}
                        >
                          Infinix Note 12 Pro
                        </Typography>
                        <Typography
                          variant="body"
                          className={`${
                            isMatch
                              ? `${classes.titleSmall}`
                              : `${classes.titleLarge}`
                          }`}
                          // sx={{
                          //   display: "flex",
                          //   alignItems: "center",
                          //   fontWeight: "500",
                          //   color: "#ff3f34",
                          // }}
                        >
                          {" "}
                          <CurrencyRupeeIcon fontSize="small" /> 16,000
                        </Typography>
                      </Box>

                      <img
                        src="https://i.postimg.cc/Rhnh7d3f/infinixnote12pro5gfront.png"
                        width={isMatch ? "40px" : "60px"}
                        alt=""
                      />
                    </Box>
                  </Box>

                  <Button className={classes.button}>Compare</Button>
                </Box>
              </Box>
              <Box
                className={`${
                  isMatch
                    ? `${classes.thirdBoxChildH}`
                    : `${classes.thirdBoxChild}`
                }`}
              >
                <Box className={classes.thirdBoxSub}>
                  <Box className={classes.thirdBoxSubInner}>
                    <Box className={classes.thirdBoxSubInnerLeft}>
                      <Box className={classes.boxUtility}>
                        <Typography
                          variant="body"
                          className={`${
                            isMatch
                              ? `${classes.titleSmallN}`
                              : `${classes.titleLargeN}`
                          }`}
                        >
                          Motorola Moto G82
                        </Typography>
                        <Typography
                          variant="body"
                          className={`${
                            isMatch
                              ? `${classes.titleSmall}`
                              : `${classes.titleLarge}`
                          }`}
                        >
                          {" "}
                          <CurrencyRupeeIcon fontSize="small" /> 30,000
                        </Typography>
                      </Box>
                      <img
                        src="https://i.postimg.cc/mgFfyryv/moto-g82-front460x920.png"
                        width={isMatch ? "40px" : "60px"}
                        alt=""
                      />
                    </Box>
                    <Typography>VS</Typography>
                    <Box className={classes.thirdBoxSubInnerRight}>
                      <Box className={classes.boxUtility}>
                        <Typography
                          variant="body"
                          className={`${
                            isMatch
                              ? `${classes.titleSmallN}`
                              : `${classes.titleLargeN}`
                          }`}
                        >
                          Infinix Note 12 Pro
                        </Typography>
                        <Typography
                          variant="body"
                          className={`${
                            isMatch
                              ? `${classes.titleSmall}`
                              : `${classes.titleLarge}`
                          }`}
                        >
                          {" "}
                          <CurrencyRupeeIcon fontSize="small" /> 16,000
                        </Typography>
                      </Box>

                      <img
                        src="https://i.postimg.cc/Rhnh7d3f/infinixnote12pro5gfront.png"
                        width={isMatch ? "40px" : "60px"}
                        alt=""
                      />
                    </Box>
                  </Box>

                  <Button className={classes.button}>Compare</Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default PopularMobileComparison;
