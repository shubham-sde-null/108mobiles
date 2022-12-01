import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Carousel from "react-material-ui-carousel";
import FindPhoneContent from "./FindPhoneContent";

const MyBtnStyle = styled(Button)({
  color: "white",
  width: "97%",
  // margin: "auto",
  marginLeft: "7px",
  backgroundColor: "#5f27cd",
  fontWeight: "bold",
  textTransform: "none",
  marginTop: "15px",
  //   marginBottom: "15px",
  "&:hover": {
    backgroundColor: "#5f27de",
  },
});

const useStyles = makeStyles(() => ({
  carouseHolder: {
    // border: "1px solid green",
    width: "100%",
  },
  carouseHolderH: {
    width: "100%",
  },
  mainSecondBox: {
    display: "flex",
    flexDirection: "column",
    border: "0.5px solid lightgrey",
    borderRadius: "5px",
    // marginLeft: "5px",
    marginRight: "5px",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  mainSecondBoxH: {
    display: "flex",
    flexDirection: "row",
    border: "0.5px solid lightgrey",
    borderRadius: "3px",
    width: "98%",
    height: "fit-content",
    justifyContent: "space-around",
    alignItems: "center",
    gap: "15px",
    margin: "5px",
    // marginTop: "5px",
    // boxShadow:
    //   "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  },

  findPhoneCont: {
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    width: "70%",
    margin: "auto",
    // backgroundColor: "white",
    marginTop: "10px",
    minHeight: "200px",
    // paddingTop: "15px",
    // paddingBottom: "15px",
    // border: "1px solid green",
  },
  findPhoneContH: {
    marginTop: "7px",
    width: "100%",
    // margin: "0px",
    display: "flex",
    flexDirection: "column",
    // border: "3px solid red",
    overflow: "hidden",
  },
  leftFindPhone: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    // border: "1px solid red",
    width: "70%",
    backgroundColor: "white",
    borderRadius: "5px",
    marginRight: "7px",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    paddingTop: "10px",
    paddingBottom: "15px",
    // border: "1px solid red",
    height: "100%",
  },
  leftFindPhoneH: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    // border: "1px solid red",
    width: "100%",
    backgroundColor: "white",
    borderRadius: "5px",
    marginRight: "7px",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    paddingTop: "10px",
    paddingBottom: "15px",
    // border: "1px solid red",
    height: "100%",
  },
  rightFindPhone: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    width: "100%",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    paddingTop: "10px",
    paddingBottom: "15px",
  },
  rightFindPhoneH: {
    // border: "1px solid black",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    paddingTop: "10px",
    paddingBottom: "15px",
    marginTop: "7px",
  },
  slider: {
    // width: "400px",
    // border: "1px solid green",
  },
  priceRange: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "space-between",
    gap: "25px",
    width: "400px",
    marginLeft: "7px",
  },
  priceFilter: {
    display: "flex",
    gap: "10px",
  },
  priceTitle: {
    fontSize: "15px",
    fontWeight: "500",
    marginTop: "10px",
    border: "1px solid lightgrey",
    padding: "5px",
    borderRadius: "15px",
    "&:hover": {
      backgroundColor: "#333533",
      color: "white",
      cursor: "pointer",
    },
  },
  priceTitleH: {
    fontSize: "10px",
    fontWeight: "500",
    marginTop: "10px",
    border: "1px solid lightgrey",
    padding: "5px",
    borderRadius: "15px",
    "&:hover": {
      backgroundColor: "#333533",
      color: "white",
      cursor: "pointer",
    },
  },
  mainHolder: {
    display: "flex",
    // gap: "20px",
    // minHeight: "250px",
    // border: "1px solid red",
  },
  mainHolderH: {
    display: "flex",
    flexDirection: "column",
  },
  firstBox: {
    border: "0.5px solid lightgrey",
    // paddingLeft: "20px",
    margin: "10px",
    borderRadius: "5px",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  },
  firstBoxH: {
    border: "0.5px solid lightgrey",
    padding: "5px",
    margin: "5px",
    borderRadius: "3px",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    // paddingLeft: "20px",
  },
  byBrandName: {
    display: "flex",
    flexDirection: "column",
    gap: "7px",
    justifyContent: "center",
    alignItems: "center",
  },
  byFeatures: {
    display: "flex",
    flexDirection: "column",
    gap: "7px",
    justifyContent: "center",
    alignItems: "center",
  },
  featuresTitle: {
    color: "black",
    fontSize: "14px",
    fontWeight: "500",
    // border: "1px solid lightgrey",
  },
  byBrandNameBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1px",
    // border: "3px solid black",
  },
  byFeaturesBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // border: "3px solid black",
  },
}));

function FindPhone({ data }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const [price, setPrice] = useState([500, 5000]);
  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };
  function valuetext(value) {
    return `${value}°C`;
  }
  const classes = useStyles();
  return (
    <Box
      className={`${
        isMatch ? `${classes.findPhoneContH}` : `${classes.findPhoneCont}`
      }`}
      // sx={{ display: isMatch ? "none" : "" }}
    >
      <Box
        className={`${
          isMatch ? `${classes.leftFindPhoneH}` : `${classes.leftFindPhone}`
        }`}
      >
        {/* heading  */}
        <Typography
          sx={{ fontSize: "22px", fontWeight: "600", paddingLeft: "15px" }}
        >
          Let's Make a Mobile
        </Typography>
        {/* this box holds all the working features and it has three parts first one is find mobile, second one is by brand name and third one is by the name feature*/}
        <Box
          className={`${
            isMatch ? `${classes.mainHolderH}` : `${classes.mainHolder}`
          }`}
        >
          {/* this is the first box */}
          <Box
            className={`${
              isMatch ? `${classes.firstBoxH}` : `${classes.firstBox}`
            }`}
          >
            <Typography
              sx={{ fontSize: "18px", fontWeight: "500", marginLeft: "7px" }}
            >
              By Price
            </Typography>
            <Slider
              sx={{ width: "95%", marginLeft: "15px" }}
              className={classes.slider}
              getAriaLabel={() => "Price range"}
              value={price}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={500}
              max={35000}
            />
            {/* this box is used for price range text  */}
            <Box className={classes.priceRange}>
              <Typography>
                Rs{" "}
                <input
                  type="text"
                  style={{ width: "100px" }}
                  placeholder={price[0]}
                />
              </Typography>
              <Typography>to</Typography>
              <Typography>
                Rs{" "}
                <input
                  type="text"
                  style={{ width: "100px" }}
                  placeholder={price[1]}
                />
              </Typography>
            </Box>
            {/* in this box I have used the custom styling  */}
            <MyBtnStyle variant="contained">Find Device</MyBtnStyle>
            {/* here I am showing the quick search paths based on price range   */}
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: isMatch ? "14px" : "16px",
                marginTop: "10px",
                marginBottom: isMatch ? "7px" : "14px",
                marginLeft: "7px",
              }}
            >
              Price Around
            </Typography>
            <Box className={classes.priceFilter}>
              <Typography
                variant="body"
                className={`${
                  isMatch ? `${classes.priceTitleH}` : `${classes.priceTitle}`
                }`}
              >
                Rs:5,000
              </Typography>
              <Typography
                variant="body"
                className={`${
                  isMatch ? `${classes.priceTitleH}` : `${classes.priceTitle}`
                }`}
              >
                Rs:10,000
              </Typography>
              <Typography
                variant="body"
                className={`${
                  isMatch ? `${classes.priceTitleH}` : `${classes.priceTitle}`
                }`}
              >
                Rs:15,000
              </Typography>
              <Typography
                variant="body"
                className={`${
                  isMatch ? `${classes.priceTitleH}` : `${classes.priceTitle}`
                }`}
              >
                Rs:20,000
              </Typography>
              <Typography
                variant="body"
                className={`${
                  isMatch ? `${classes.priceTitleH}` : `${classes.priceTitle}`
                }`}
              >
                Rs:25,000
              </Typography>
            </Box>
          </Box>
          {/* <Divider
            alignItems="vertical"
            sx={{
              height: "200px",
              backgroundColor: "grey",
              border: "0.5px solid red",
            }}
          /> */}
          {/* this is the second box / */}
          <Box
            className={`${
              isMatch ? `${classes.mainSecondBoxH}` : `${classes.mainSecondBox}`
            }`}
          >
            {/* <Box className={classes.byBrandName}> */}
            {/* <Typography
                sx={{
                  textDecoration: "underline",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                By Brand
              </Typography> */}

            <Box className={classes.byBrandNameBox}>
              <Typography
                sx={{
                  textDecoration: "underline",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                By Brand
              </Typography>
              <Typography variant="body" className={classes.featuresTitle}>
                Xiaomi{" "}
              </Typography>
              <Divider
                sx={{
                  width: "80px",
                  backgroundColor: "grey",
                }}
              />
              <Typography variant="body" className={classes.featuresTitle}>
                Samsung
              </Typography>
              <Divider
                sx={{
                  width: "80px",
                  backgroundColor: "grey",
                }}
              />
              <Typography variant="body" className={classes.featuresTitle}>
                Oneplus
              </Typography>
              <Divider
                sx={{
                  width: "80px",
                  backgroundColor: "grey",
                }}
              />
              <Typography variant="body" className={classes.featuresTitle}>
                Poco
              </Typography>
              <Divider
                sx={{
                  width: "80px",
                  backgroundColor: "grey",
                }}
              />
              <Typography variant="body" className={classes.featuresTitle}>
                Vivo
              </Typography>
            </Box>
            <Divider
              alignItems="vertical"
              sx={{
                // width: isMatch ? "1px" : "200px",
                width: isMatch ? "0px" : "180px",
                backgroundColor: "grey",
                border: "0.5px solid grey",
                height: isMatch ? "180px" : "0px",
              }}
            />
            {/* <Box className={classes.byFeatures}> */}
            {/* <Typography
                  sx={{
                    textDecoration: "underline",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  By Features
                </Typography> */}

            <Box className={classes.byFeaturesBox}>
              <Typography
                sx={{
                  textDecoration: "underline",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                By Features
              </Typography>
              <Typography variant="body" className={classes.featuresTitle}>
                5G Connectivity{" "}
              </Typography>
              <Divider
                sx={{
                  width: "80px",
                  backgroundColor: "grey",
                }}
              />
              <Typography variant="body" className={classes.featuresTitle}>
                8 GB RAM
              </Typography>
              <Divider
                sx={{
                  width: "80px",
                  backgroundColor: "grey",
                }}
              />
              <Typography variant="body" className={classes.featuresTitle}>
                5000 mah+ Battery
              </Typography>
              <Divider
                sx={{
                  width: "80px",
                  backgroundColor: "grey",
                }}
              />
              <Typography variant="body" className={classes.featuresTitle}>
                64 Mp+ Camera
              </Typography>
              <Divider
                sx={{
                  width: "80px",
                  backgroundColor: "grey",
                }}
              />
              <Typography variant="body" className={classes.featuresTitle}>
                Android 12.0
              </Typography>
            </Box>
            {/* </Box> */}
            {/* </Box> */}
          </Box>

          {/* <Divider alignItems="vertical" /> */}
          {/* <Divider
            alignItems="vertical"
            sx={{
              height: "200px",
              backgroundColor: "grey",
              border: "0.5px solid grey",
            }}
          /> */}
          {/* this is the third box  */}
        </Box>
      </Box>
      {/* this box is used to show some device for users  */}
      <Box
        className={`${
          isMatch ? `${classes.rightFindPhoneH}` : `${classes.rightFindPhone}`
        }`}
      >
        <Carousel
          className={`${
            isMatch ? `${classes.carouseHolderH}` : `${classes.carouseHolder}`
          }`}
        >
          <FindPhoneContent data={data.slice(0, 3)} />
          <FindPhoneContent data={data.slice(3, 6)} />
          <FindPhoneContent data={data.slice(6, 9)} />
        </Carousel>
      </Box>
    </Box>
  );
}

export default FindPhone;
