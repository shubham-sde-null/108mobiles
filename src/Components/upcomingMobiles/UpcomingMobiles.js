import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./CarouselItem";
import { carouselRunner } from "../../Contexts/Categories";
import { makeStyles } from "@mui/styles";
import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
const useStyles = makeStyles(() => ({
  carouselCont: {
    width: "70%",
    minHeight: "250px",
    // border: "1px solid red",
    margin: "auto",
    marginTop: "7px",
    marginBottom: "7px",
    backgroundColor: "white",
    // boxShadow:
    //   "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
    paddingTop: "10px",
    borderRadius: "5px",
  },
  carouselContM: {
    width: "98%",
    minHeight: "250px",
    // border: "1px solid red",
    margin: "auto",
    marginTop: "7px",
    marginBottom: "7px",
    backgroundColor: "white",
    // boxShadow:
    //   "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
    paddingTop: "10px",
    borderRadius: "5px",
  },
  carouselContH: {
    // display: "flex",
    paddingTop: "10px",
    borderRadius: "5px",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    width: "100vw",
    overflowX: "scroll",
    // border: "5px solid black",
    marginTop: "10px",
    backgroundColor: "white",
  },
  gridContainer: {
    display: "flex",
    // border: "5px solid yellow",
  },
  gridItem: {
    display: "flex",
    // border: "2px solid black",
  },
  titleFullScreen: {
    width: "70%",
    // border: "1px solid red",
    margin: "auto",
    backgroundColor: "white",
    marginTop: "7px",
    marginBottom: "-15px",
    borderRadius: "5px",
  },
  titleSmallScreen: {
    width: "100%",
    // border: "1px solid red",
    margin: "auto",
    backgroundColor: "white",
    marginTop: "7px",
    marginBottom: "-15px",
    borderRadius: "5px",
  },
  titleMediumScreen: {
    width: "98%",
    // border: "1px solid red",
    margin: "auto",
    backgroundColor: "white",
    marginTop: "7px",
    marginBottom: "-15px",
    borderRadius: "5px",
  },
}));
function UpcomigMobiles() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const isMed = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
  return (
    <>
      <Box
        className={`${
          isMatch
            ? `${classes.titleSmallScreen}`
            : isMed
            ? `${classes.titleMediumScreen}`
            : `${classes.titleFullScreen}`
        }`}
        // sx={{ display: isMatch ? "none" : "" }}
        // sx={{
        //   width: "70%",
        //   // border: "1px solid red",
        //   margin: "auto",
        //   backgroundColor: "white",
        //   marginTop: "7px",
        //   marginBottom: "-15px",
        //   borderRadius: "5px",
        // }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: `${isMatch ? "15px" : "22px"}`,
            paddingLeft: `${isMatch ? "15px" : "30px"}`,
            paddingTop: "12px",
            paddingBottom: "12px",
            fontWeight: "bold",
          }}
        >
          Upcoming Mobiles
          {/* Recently Viewed and Recommended */}
        </Typography>
      </Box>

      {isMatch ? (
        <Box
          className={classes.carouselContH}
          // sx={{ display: isMatch ? "none" : "" }}
        >
          {/* <Grid container sx={{ border: "1px solid black" }}>
        <Grid item lg={12} sm={12} md={6}> */}
          {/* <Carousel
            sx={{
              height: "fit-content",
              border: "1px solid green",
              marginBottom: "15px",
              width: "100%",
            }}
          > */}
          <Box container className={classes.gridContainer}>
            <CarouselItem data={carouselRunner.slice(0, 12)} />
          </Box>

          {/* </Carousel> */}
          {/* </Grid>
      </Grid> */}
        </Box>
      ) : isMed ? (
        <Box className={classes.carouselContM}>
          {/* <Grid container sx={{ border: "1px solid black" }}>
        <Grid item lg={12} sm={12} md={6}> */}
          <Carousel
            sx={{
              height: "fit-content",
              // border: "1px solid lightgrey",
              marginBottom: "15px",
              width: "100%",
              borderRadius: "10px",
              // boxShadow:
              //   "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
          >
            <CarouselItem data={carouselRunner.slice(0, 4)} />
            <CarouselItem data={carouselRunner.slice(4, 8)} />
            <CarouselItem data={carouselRunner.slice(8, 12)} />
          </Carousel>
          {/* </Grid>
      </Grid> */}
        </Box>
      ) : (
        <Box className={classes.carouselCont}>
          {/* <Grid container sx={{ border: "1px solid black" }}>
        <Grid item lg={12} sm={12} md={6}> */}
          <Carousel
            sx={{
              height: "fit-content",
              // border: "1px solid lightgrey",
              marginBottom: "15px",
              width: "100%",
              borderRadius: "10px",
              // boxShadow:
              //   "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            }}
          >
            <CarouselItem data={carouselRunner.slice(0, 4)} />
            <CarouselItem data={carouselRunner.slice(4, 8)} />
            <CarouselItem data={carouselRunner.slice(8, 12)} />
          </Carousel>
          {/* </Grid>
      </Grid> */}
        </Box>
      )}
    </>
  );
}
export default UpcomigMobiles;
