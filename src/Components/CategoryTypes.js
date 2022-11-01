import { Paper, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { categoryTypes } from "../Contexts/Categories";
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
    marginTop: "-50px",
    width: "fit-content",
    // border: "1px solid red",
    height: "fit-content",
    margin: "auto",
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
          <Box
            sx={{
              //   border: "1px solid green",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              maxWidth: "70px",
              margin: "10px",
            }}
          >
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
        ))}
      </Box>
    </Paper>
  );
}

export default CategoryTypes;
