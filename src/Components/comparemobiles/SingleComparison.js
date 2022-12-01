import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Divider from "@mui/material/Divider";
const useStyles = makeStyles(() => ({
  titleLarge: {
    fontWeight: "600",
    fontSize: "16px",
  },
  titleSmall: {
    fontWeight: "600",
    fontSize: "12px",
  },
  boxOnCondition: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: "10px",
  },
  boxOnConditionH: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: "10px",
    // border: "2px solid green",
    // overflow: "hidden",
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
  textFieldH: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "start",
    height: "75px",
    // border: "1px solid black",
    // color: "red",
    backgroundColor: "#D980FA",
    paddingLeft: "3px",
  },
  difference: {
    fontSize: "14px",
    fontWeight: "500",
  },
}));
function SingleComparison({ mobileData }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  return (
    <Box
      className={`${
        isMatch ? `${classes.boxOnConditionH}` : `${classes.boxOnCondition}`
      }`}
    >
      {" "}
      <Box
        className={`${
          isMatch ? `${classes.textFieldH}` : `${classes.textField}`
        }`}
      >
        <Typography
          variant="body"
          className={`${
            isMatch ? `${classes.titleSmall}` : `${classes.titleLarge}`
          }`}
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
      <Box
        className={`${
          isMatch ? `${classes.textFieldH}` : `${classes.textField}`
        }`}
      >
        <Typography
          variant="body"
          className={`${
            isMatch ? `${classes.titleSmall}` : `${classes.titleLarge}`
          }`}
        >
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
      <Box
        className={`${
          isMatch ? `${classes.textFieldH}` : `${classes.textField}`
        }`}
      >
        <Typography
          variant="body"
          className={`${
            isMatch ? `${classes.titleSmall}` : `${classes.titleLarge}`
          }`}
        >
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
      <Box
        className={`${
          isMatch ? `${classes.textFieldH}` : `${classes.textField}`
        }`}
      >
        <Typography
          variant="body"
          className={`${
            isMatch ? `${classes.titleSmall}` : `${classes.titleLarge}`
          }`}
        >{`${mobileData.wideangle}${
          mobileData.ultrawide ? `+${mobileData.ultrawide}` : ""
        }${mobileData.macro ? `+${mobileData.macro}` : ""}${
          mobileData.depth ? `+${mobileData.depth}` : ""
        }${
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
      <Box
        className={`${
          isMatch ? `${classes.textFieldH}` : `${classes.textField}`
        }`}
      >
        <Typography
          variant="body"
          className={`${
            isMatch ? `${classes.titleSmall}` : `${classes.titleLarge}`
          }`}
        >
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
      <Box
        className={`${
          isMatch ? `${classes.textFieldH}` : `${classes.textField}`
        }`}
      >
        <Typography
          variant="body"
          className={`${
            isMatch ? `${classes.titleSmall}` : `${classes.titleLarge}`
          }`}
        >
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
      <Box
        className={`${
          isMatch ? `${classes.textFieldH}` : `${classes.textField}`
        }`}
      >
        <Typography
          variant="body"
          className={`${
            isMatch ? `${classes.titleSmall}` : `${classes.titleLarge}`
          }`}
        >
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
