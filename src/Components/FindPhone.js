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
  width: "380px",
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
  rightFindPhone: {
    // border: "1px solid black",
    width: "30%",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    paddingTop: "10px",
    paddingBottom: "15px",
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
  },
  priceFilter: {
    display: "flex",
    gap: "10px",
  },
  mainHolder: {
    display: "flex",
    gap: "20px",
    // minHeight: "250px",
  },
  firstBox: {
    // border: "1px solid green",
    paddingLeft: "20px",
  },
  byBrandName: {
    display: "flex",
    flexDirection: "column",
    gap: "7px",
    // justifyContent: "center",
  },
  byFeatures: {
    display: "flex",
    flexDirection: "column",
    gap: "7px",
    // justifyContent: "center",
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
    <Box className={classes.findPhoneCont}>
      <Box className={classes.leftFindPhone}>
        {/* heading  */}
        <Typography
          sx={{ fontSize: "22px", fontWeight: "600", paddingLeft: "15px" }}
        >
          Let's Make a Mobile
        </Typography>
        {/* this box holds all the working features and it has three parts first one is find mobile, second one is by brand name and third one is by the name feature*/}
        <Box className={classes.mainHolder}>
          {/* this is the first box */}
          <Box className={classes.firstBox}>
            <Typography sx={{ fontSize: "18px", fontWeight: "500" }}>
              By Price
            </Typography>
            <Slider
              sx={{ width: "380px" }}
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
                fontSize: "15px",
                marginTop: "10px",
                // marginBottom: "10px",
              }}
            >
              Price Around
            </Typography>
            <Box className={classes.priceFilter}>
              <Typography
                sx={{ fontWeight: "600", fontSize: "15px", marginTop: "10px" }}
              >
                Rs:5,000
              </Typography>
              <Typography
                sx={{ fontWeight: "600", fontSize: "15px", marginTop: "10px" }}
              >
                Rs:10,000
              </Typography>
              <Typography
                sx={{ fontWeight: "600", fontSize: "15px", marginTop: "10px" }}
              >
                Rs:15,000
              </Typography>
              <Typography
                sx={{ fontWeight: "600", fontSize: "15px", marginTop: "10px" }}
              >
                Rs:20,000
              </Typography>
              <Typography
                sx={{ fontWeight: "600", fontSize: "15px", marginTop: "10px" }}
              >
                Rs:25,000
              </Typography>
            </Box>
          </Box>
          <Divider
            alignItems="vertical"
            sx={{
              height: "200px",
              backgroundColor: "grey",
              border: "0.5px solid grey",
            }}
          />
          {/* this is the second box / */}
          <Box className={classes.byBrandName}>
            <Typography sx={{ fontSize: "18px", fontWeight: "500" }}>
              By Brand
            </Typography>
            <Divider
              sx={{
                width: "80px",
                backgroundColor: "grey",
              }}
            />
            <Box className={classes.byBrandNameBox}>
              <Typography>Xiaomi </Typography>
              <Divider
                sx={{
                  width: "80px",
                  backgroundColor: "grey",
                }}
              />
              <Typography>Samsung</Typography>
              <Divider
                sx={{
                  width: "80px",
                  backgroundColor: "grey",
                }}
              />
              <Typography>Oneplus</Typography>
              <Divider
                sx={{
                  width: "80px",
                  backgroundColor: "grey",
                }}
              />
              <Typography>Poco</Typography>
              <Divider
                sx={{
                  width: "80px",
                  backgroundColor: "grey",
                }}
              />
              <Typography>Vivo</Typography>
            </Box>
          </Box>
          {/* <Divider alignItems="vertical" /> */}
          <Divider
            alignItems="vertical"
            sx={{
              height: "200px",
              backgroundColor: "grey",
              border: "0.5px solid grey",
            }}
          />
          {/* this is the third box  */}
          <Box className={classes.byFeatures}>
            <Typography sx={{ fontSize: "18px", fontWeight: "500" }}>
              By Features
            </Typography>
            <Divider
              sx={{
                width: "80px",
                backgroundColor: "grey",
              }}
            />
            <Box className={classes.byFeaturesBox}>
              <Typography>5G Connectivity </Typography>
              <Divider
                sx={{
                  width: "80px",
                  backgroundColor: "grey",
                }}
              />
              <Typography>8 GB RAM</Typography>
              <Divider
                sx={{
                  width: "80px",
                  backgroundColor: "grey",
                }}
              />
              <Typography>5000 mah+ Battery</Typography>
              <Divider
                sx={{
                  width: "80px",
                  backgroundColor: "grey",
                }}
              />
              <Typography>64 Mp+ Camera</Typography>
              <Divider
                sx={{
                  width: "80px",
                  backgroundColor: "grey",
                }}
              />
              <Typography>Android 12.0</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* this box is used to show some device for users  */}
      <Box className={classes.rightFindPhone}>
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
