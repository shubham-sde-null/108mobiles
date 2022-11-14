import React from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Divider from "@mui/material/Divider";
const useStyles = makeStyles(() => ({
  boxOnCondition: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: "10px",
  },
  textField: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    height: "75px",
    // border: "1px solid black",
    // color: "red",
    backgroundColor: "#D980FA",
    paddingLeft: "7px",
  },
  difference: {
    fontSize: "14px",
    fontWeight: "500",
  },
}));
function SingleComparison({ mobileData }) {
  const classes = useStyles();
  return (
    <Box className={classes.boxOnCondition}>
      {" "}
      <Box className={classes.textField}>
        <Typography
          variant="body"
          sx={{ fontWeight: "600", fontSize: "16px" }}
          className={classes.difference}
        >
          {mobileData.mobilename}
        </Typography>
      </Box>
      <Divider
        sx={{
          border: "0.2px solid lightgray",
          color: "gray",
          width: "100%",
        }}
      />
      <Box className={classes.textField}>
        <Typography variant="body" className={classes.difference}>
          {mobileData.chipset}
        </Typography>
      </Box>
      <Divider
        sx={{
          border: "0.2px solid lightgray",
          color: "gray",
          width: "100%",
        }}
      />
      <Box className={classes.textField}>
        <Typography variant="body" className={classes.difference}>
          {mobileData.displaysize}
        </Typography>
      </Box>
      <Divider
        sx={{
          border: "0.2px solid lightgray",
          color: "gray",
          width: "100%",
        }}
      />
      <Box className={classes.textField}>
        <Typography variant="body" className={classes.difference}>{`${
          mobileData.wideangle
        }${mobileData.ultrawide ? `+${mobileData.ultrawide}` : ""}${
          mobileData.macro ? `+${mobileData.macro}` : ""
        }${mobileData.depth ? `+${mobileData.depth}` : ""}${
          mobileData.telephoto ? `+${mobileData.telephoto}` : ""
        }`}</Typography>
      </Box>
      <Divider
        sx={{
          border: "0.2px solid lightgray",
          color: "gray",
          width: "100%",
        }}
      />
      <Box className={classes.textField}>
        <Typography variant="body" className={classes.difference}>
          {mobileData.frontcamera}
        </Typography>
      </Box>
      <Divider
        sx={{
          border: "0.2px solid lightgray",
          color: "gray",
          width: "100%",
        }}
      />
      <Box className={classes.textField}>
        <Typography variant="body" className={classes.difference}>
          {mobileData.batterycapacity}
        </Typography>
      </Box>
      <Divider
        sx={{
          border: "0.2px solid lightgray",
          color: "gray",
          width: "100%",
        }}
      />
      <Box className={classes.textField}>
        <Typography variant="body" className={classes.difference}>
          {mobileData.ramvariant1}
        </Typography>
      </Box>
      <Divider
        sx={{
          border: "0.2px solid lightgray",
          color: "gray",
          width: "100%",
        }}
      />
    </Box>
  );
}

export default SingleComparison;
