import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { mainFeatures } from "../Contexts/Categories";

const useStyles = makeStyles(() => ({
  mainHeader: {
    fontSize: "22px",
    color: "black",
    fontWeight: "500",
    padding: "14px",
    paddingLeft: "30px",
  },
  mainHeaderH: {
    fontSize: "16px",
    color: "black",
    fontWeight: "500",
    // padding: "15px",
    paddingLeft: "15px",
    paddingTop: "9px",
    paddingBottom: "9px",
  },

  iconTitle: {
    fontSize: "18px",
    color: "#222f3e",
    fontWeight: "500",
  },
  iconTitleH: {
    fontSize: "12px",
    color: "#222f3e",
    fontWeight: "500",
  },
  featuresCont: {
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "65px",
    width: "70%",
    margin: "auto",
    backgroundColor: "white",
    borderRadius: "5px",
    // border: "1px solid hotpink",
  },
  featuresContH: {
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "55px",
    // width: "100%",
    width: "100%",
    // margin: "0px",
    // margin: "auto",
    backgroundColor: "white",
    borderRadius: "5px",
    // border: "2px solid green",
    paddingBottom: "7px",
  },
  featuresContInner: {
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    // marginTop: "50px",
    gap: "15px",
    margin: "auto",
    backgroundColor: "white",
    borderRadius: "5px",
    // border: "1px solid black",
    width: "100%",
  },
  featuresContInnerH: {
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    // marginTop: "50px",
    gap: "3px",
    margin: "auto",
    backgroundColor: "white",
    borderRadius: "5px",
    // border: "1px solid black",
    width: "100%",
  },
  featureHolder: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    gap: "5px",
    minWidth: "120px",
    width: "fit-content",
    // border: "1px solid red",
    padding: "10px",
  },
  featureHolderH: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "3px",
    // width: "fit-content",
    width: "3rem",
    padding: "5px",
    // margin: "3px",
    // width: "80%",
    // width: "fit-content",
    border: "1px solid lightgrey",
    borderRadius: "3px",
    // padding: "10px",
    textAlign: "center",
    height: "60px",
    paddingBottom: "10px",
    paddingTop: "5px",
  },
}));
function PopularFeatures() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box
        className={`${
          isMatch ? `${classes.featuresContH}` : `${classes.featuresCont}`
        }`}
        // sx={{ display: isMatch ? "none" : "" }}
      >
        <Typography
          variant="body"
          className={`${
            isMatch ? `${classes.mainHeaderH}` : `${classes.mainHeader}`
          }`}
        >
          Mobiles By Popular Features
        </Typography>
        <Box
          className={`${
            isMatch
              ? `${classes.featuresContInnerH}`
              : `${classes.featuresContInner}`
          }`}
        >
          {mainFeatures.map((item) => (
            <Box
              className={`${
                isMatch
                  ? `${classes.featureHolderH}`
                  : `${classes.featureHolder}`
              }`}
            >
              <Typography variant="body"> {item.icon}</Typography>

              <Typography
                variant="body"
                className={`${
                  isMatch ? `${classes.iconTitleH}` : `${classes.iconTitle}`
                }`}
              >
                {item.features}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default PopularFeatures;
