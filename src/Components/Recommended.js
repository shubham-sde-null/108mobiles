import {
  Box,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import { recommendedItems } from "../Contexts/Categories";
const useStyles = makeStyles(() => ({
  recommendedCont: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    // border: "1px solid red",
    width: "70%",
    margin: "auto",
    marginTop: "7px",
  },
  recommendedContH: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    // border: "1px solid green",
    width: "100%",
    // margin: "auto",
    // margin: "0px",
    // padding: "0px",
    boxSizing: "border-box",
    marginTop: "5px",
  },
  gridItems: {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // border: "1px solid yellow",
  },
  gridContainer: {
    // border: "1px solid black",
    alignItems: "center",
    justifyContent: "center",
  },
  gridItemsBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid lightgrey",
    // marginBottom: "10px",
    // marginLeft: "5px",
    // marginRight: "5px",
    borderRadius: "5px",
    boxShadow:
      "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
  },
}));
function Recommended({ mobileData, title }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  return (
    <Paper
      className={`${
        isMatch ? `${classes.recommendedContH}` : `${classes.recommendedCont}`
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
          // border: "1px solid red",
        }}
      >
        {/* Recently Viewed and Recommended */}
        {title}
      </Typography>
      <Grid container spacing={1} className={classes.gridContainer}>
        {mobileData.map((item) => (
          <Grid item lg={3} md={4} sm={6} className={classes.gridItems}>
            <Box className={classes.gridItemsBox}>
              <img
                src={item.image}
                alt="img"
                width={`${isMatch ? "130px" : "160px"}`}
              />
              <Typography
                sx={{
                  paddingTop: "5px",
                  fontSize: `${isMatch ? "12px" : "16px"}`,
                }}
              >
                {item.name}
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "rgb(255, 90, 0)",
                  fontWeight: "bold",
                  fontSize: `${isMatch ? "14px" : "18px"}`,
                  paddingTop: "5px",
                }}
              >
                <CurrencyRupeeIcon fontSize="small" />
                {item.price}
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "grey",
                  fontWeight: "500",
                  fontSize: `${isMatch ? "12px" : "16px"}`,
                  paddingTop: "5px",
                  paddingBottom: "3px",
                }}
              >
                {item.viewDetails}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default Recommended;
