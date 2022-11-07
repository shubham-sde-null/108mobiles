import { Typography, Box } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { mainFeatures } from "../Contexts/Categories";

const useStyles = makeStyles(() => ({
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
}));
function PopularFeatures() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.featuresCont}>
        <Typography
          sx={{
            fontSize: "22px",
            color: "black",
            fontWeight: "bold",
            padding: "15px",
            paddingLeft: "30px",
          }}
        >
          Mobiles By Popular Features
        </Typography>
        <Box className={classes.featuresContInner}>
          {mainFeatures.map((item) => (
            <Box className={classes.featureHolder}>
              <Typography variant="body"> {item.icon}</Typography>

              <Typography
                variant="body"
                sx={{ fontSize: "18px", color: "#222f3e", fontWeight: "500" }}
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
