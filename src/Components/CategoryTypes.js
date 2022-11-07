import { Paper, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { categoryTypes } from "../Contexts/Categories";
import { Link } from "react-router-dom";
import { listStyle2 } from "../Contexts/listStyle";
// import { fontSize } from "@mui/system";
const useStyles = makeStyles(() => ({
  categoryTypes: {
    marginTop: "10px",
    width: "70%",
    margin: "auto",
    // border: "1px solid red",
    height: "290px",
  },
  categoryTypesH: {
    marginTop: "-7px",
    width: "fit-content",
    // border: "1px solid red",
    height: "fit-content",
    // margin: "auto",

    //adding new
    margin: "0px",
    padding: "0px",
    boxSizing: "border-box",
  },
  categoryTypesCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    border: "1px solid lightgray",
    marginLeft: "25px",
    marginRight: "25px",
    marginTop: "15px",
    // paddingBottom: "15px",
    height: "fit-content",
  },
  categoryTypesContH: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    border: "1px solid lightgray",
    // marginLeft: "5px",
    // marginRight: "5px",
    // marginTop: "2px",
    // paddingBottom: "5px",
    // margin: "auto",
  },
  singleCategoryCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "90px",
    margin: "10px",
    "&:hover": {
      color: "#ee5253",
      cursor: "pointer",
    },
  },
}));
function CategoryTypes() {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Paper
      className={`${
        isMatch ? `${classes.categoryTypesH}` : `${classes.categoryTypes}`
      }`}
    >
      <Typography
        variant="h5"
        paddingTop="10px"
        sx={{
          fontSize: isMatch ? "18px" : "23px",
          //   border: "1px solid red",
          paddingLeft: isMatch ? "12px" : "26px",
          fontWeight: "bold",
        }}
      >
        Top Categories
      </Typography>
      <Box
        className={`${
          isMatch
            ? `${classes.categoryTypesContH}`
            : `${classes.categoryTypesCont}`
        }`}
      >
        {categoryTypes.map((item) => (
          <Link
            style={listStyle2}
            to={
              item.type === "Android"
                ? "/mobiles"
                : item.type === "Tablet"
                ? "/tablet"
                : item.type === "Laptop"
                ? "/laptop"
                : item.type === "Smart Watches"
                ? "/watches"
                : item.type === "Headphones"
                ? "/headphones"
                : "/"
            }
          >
            <Box className={classes.singleCategoryCont}>
              <img
                src={item.image}
                width={isMatch ? "" : "100vw"}
                height={isMatch ? "60vw" : "150vw"}
                alt=""
              />
              <Typography
                align="center"
                fontWeight="bold"
                sx={{ fontSize: isMatch ? "12px" : "16px" }}
              >
                {item.type}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </Paper>
  );
}

export default CategoryTypes;
