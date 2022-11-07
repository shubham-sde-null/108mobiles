import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { brandsLogo } from "../Contexts/Categories";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  brandHolder: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    margin: "auto",
    marginTop: "7px",
    overflowX: "scroll",
    // border: "1px solid red",
    backgroundColor: "white",
  },
  brandHolderH: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    border: "1x solid red",
    backgroundColor: "white",
    overflowX: "scroll",
    marginTop: "7px",
  },
  brandContainer: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid lightgrey",
    borderRadius: "5px",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    // overflowX: "scroll",
    width: "fit-content",
  },
  brandContainerH: {
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid lightgrey",
    borderRadius: "3px",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    // overflowX: "scroll",
    width: "fit-content",
  },

  brandName: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    alignItems: "center",
    gap: "15px",
    border: "1px solid lightgrey",
    borderRadius: "5px",
    width: "150px",
    // height: "100px",
    margin: "10px",
    padding: "10px",
  },
  brandNameH: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    border: "1px solid lightgrey",
    borderRadius: "3px",
    // width: "75px",
    width: "fit-content",
    // height: "100px",
    margin: "3px",
    padding: "3px",
  },
  companyName: {
    fontSize: "18px",
    fontWeight: "600",
  },
  companyNameH: {
    fontSize: "13px",
    fontWeight: "600",
  },
  title: {
    fontSize: "22px",
    fontWeight: "600",
    // border: "1px solid red",
    paddingLeft: "30px",
    paddingTop: "12px",
    paddingBottom: "12px",
  },
  titleH: {
    fontSize: "14px",
    fontWeight: "600",
    // border: "1px solid red",
    paddingLeft: "15px",
    paddingTop: "9px",
    paddingBottom: "9px",
  },
}));
function MobileBrands() {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      className={`${
        isMatch ? `${classes.brandHolderH}` : `${classes.brandHolder}`
      }`}
    >
      <Typography
        variant="body"
        className={`${isMatch ? `${classes.titleH}` : `${classes.title}`}`}
      >
        Featured Mobile Brands
      </Typography>

      {brandsLogo.map((item) => (
        <Box
          className={`${
            isMatch ? `${classes.brandContainerH}` : `${classes.brandContainer}`
          }`}
        >
          <Box
            className={`${
              isMatch ? `${classes.brandNameH}` : `${classes.brandName}`
            }`}
          >
            {" "}
            <img
              src={item.oneplus}
              width={`${isMatch ? "90px" : "160px"}`}
              alt=""
            />
            <Typography
              variant="body"
              className={`${
                isMatch ? `${classes.companyNameH}` : `${classes.companyName}`
              }`}
            >
              OnePlus
            </Typography>
          </Box>
          <Box
            className={`${
              isMatch ? `${classes.brandNameH}` : `${classes.brandName}`
            }`}
          >
            {" "}
            <img
              src={item.samsung}
              width={`${isMatch ? "90px" : "160px"}`}
              alt=""
            />
            <Typography
              variant="body"
              className={`${
                isMatch ? `${classes.companyNameH}` : `${classes.companyName}`
              }`}
            >
              Samsung
            </Typography>
          </Box>
          <Box
            className={`${
              isMatch ? `${classes.brandNameH}` : `${classes.brandName}`
            }`}
          >
            {" "}
            <img
              src={item.apple}
              width={`${isMatch ? "90px" : "160px"}`}
              alt=""
            />
            <Typography
              variant="body"
              className={`${
                isMatch ? `${classes.companyNameH}` : `${classes.companyName}`
              }`}
            >
              iphone
            </Typography>
          </Box>
          <Box
            className={`${
              isMatch ? `${classes.brandNameH}` : `${classes.brandName}`
            }`}
          >
            {" "}
            <img
              src={item.poco}
              width={`${isMatch ? "90px" : "160px"}`}
              alt=""
            />
            <Typography
              variant="body"
              className={`${
                isMatch ? `${classes.companyNameH}` : `${classes.companyName}`
              }`}
            >
              Poco
            </Typography>
          </Box>
          <Box
            className={`${
              isMatch ? `${classes.brandNameH}` : `${classes.brandName}`
            }`}
          >
            {" "}
            <img src={item.mi} width={`${isMatch ? "90px" : "160px"}`} alt="" />
            <Typography
              variant="body"
              className={`${
                isMatch ? `${classes.companyNameH}` : `${classes.companyName}`
              }`}
            >
              Xiaomi
            </Typography>
          </Box>
          <Box
            className={`${
              isMatch ? `${classes.brandNameH}` : `${classes.brandName}`
            }`}
          >
            {" "}
            <img
              src={item.vivo}
              width={`${isMatch ? "90px" : "160px"}`}
              alt=""
            />
            <Typography
              variant="body"
              className={`${
                isMatch ? `${classes.companyNameH}` : `${classes.companyName}`
              }`}
            >
              Vivo
            </Typography>
          </Box>
          <Box
            className={`${
              isMatch ? `${classes.brandNameH}` : `${classes.brandName}`
            }`}
          >
            {" "}
            <img
              src={item.oppo}
              width={`${isMatch ? "90px" : "160px"}`}
              alt=""
            />
            <Typography
              variant="body"
              className={`${
                isMatch ? `${classes.companyNameH}` : `${classes.companyName}`
              }`}
            >
              Oppo
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default MobileBrands;
