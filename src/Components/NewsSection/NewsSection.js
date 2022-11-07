import { Box, Grid, useTheme, useMediaQuery, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@mui/styles";
import React from "react";
import NewsSectionContent from "./NewsSectionContent";
const useStyles = makeStyles(() => ({
  gridHolder: {
    width: "70%",
    margin: "auto",
    marginTop: "10px",
    marginBottom: "10px",
  },
  gridHolderH: {
    width: "100vw",
    margin: "auto",
    marginTop: "7px",
  },
  gridContainer: {
    display: "flex",
    // border: "2px solid black",
    borderRadius: "5px",
    boxShadow:
      "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
    // width: "70%",
    // margin: "auto",
  },
  gridItem: {
    border: "1px solid lightgrey",
    backgroundColor: "white",
    borderRadius: "5px",
  },
  gridItemH: {
    display: "flex",
    width: "100%",
    // border: "1px solid black",
    backgroundColor: "white",
    borderRadius: "5px",
  },
  editor: {
    fontSize: "13px",
    color: "darkgrey",
    fontWeight: "500",
  },
  articleDesc: {
    fontSize: "18px",
  },
  carouseHolder: {},
  carouseHolderH: {
    width: "100vw",
  },
}));
function NewsSection({ data }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  return (
    <Box
      className={`${
        isMatch ? `${classes.gridHolderH}` : `${classes.gridHolder}`
      }`}
    >
      <Typography
        variant="h5"
        sx={{
          fontSize: `${isMatch ? "15px" : "22px"}`,
          paddingLeft: `${isMatch ? "15px" : "30px"}`,
          paddingTop: "12px",
          paddingBottom: "12px",
          fontWeight: "bold",
          backgroundColor: "white",
          // border: "1px solid red",
        }}
      >
        {data[0].category}
      </Typography>
      <Grid container className={classes.gridContainer}>
        <Grid item lg="6" sm="12" className={classes.gridItem}>
          <Box sx={{ width: "98%", margin: "5px" }}>
            <img src={data[0].image} width="100%" alt="poco f1" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {" "}
              <Typography className={classes.editor} variant="body">
                {data[0].editor}
              </Typography>
              <Typography className={classes.articleDesc} variant="body">
                {data[0].title}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          lg="6"
          sm="12"
          className={`${
            isMatch ? `${classes.gridItemH}` : `${classes.gridItem}`
          }`}
        >
          <Carousel
            className={`${
              isMatch ? `${classes.carouseHolderH}` : `${classes.carouseHolder}`
            }`}
          >
            <NewsSectionContent data={data} />
            <NewsSectionContent data={data} />
            <NewsSectionContent data={data} />
          </Carousel>
        </Grid>
      </Grid>
    </Box>
  );
}

export default NewsSection;
