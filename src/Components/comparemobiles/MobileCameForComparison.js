import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import Divider from "@mui/material/Divider";
import SingleComparison from "./SingleComparison";
const useStyles = makeStyles(() => ({
  // text fields
  summaryTitle: {
    fontSize: "22px",
    fontWeight: "600",
  },
  summaryTitleH: {
    fontSize: "14px",
    fontWeight: "600",
  },
  MobileCameForComparisonHolder: {
    display: "flex",
    // gap: "10px",
    alignItems: "center",
    // justifyContent: "center",
    // flexDirection: "column",
    // border: "1px solid red",
    marginTop: "10px",
    width: "70%",
    margin: "auto",
    backgroundColor: "white",
    borderRadius: "5px",
    flexWrap: "wrap",
  },
  MobileCameForComparisonHolderH: {
    display: "flex",
    // gap: "10px",
    alignItems: "center",
    // justifyContent: "center",
    // flexDirection: "column",
    padding: "5px",
    border: "0.5px solid lightgrey",
    marginTop: "5px",
    maxWidth: "100%",
    margin: "auto",
    backgroundColor: "white",
    borderRadius: "5px",
    // flexWrap: "wrap",
    // paddingLeft: "15px",
    overflow: "hidden",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  },
  descBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "17%",
    // border: "1px solid orange",
    gap: "10px",
  },
  descBoxH: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    width: "fit-content",
    // width: "17%",
    // border: "1px solid orange",
    gap: "10px",
  },
  boxOnCondition: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
    width: "100%",
    gap: "10px",
  },
  firstCompare: {
    display: "flex",
    marginLeft: "12px",
    width: "19%",
    // border: "2px solid blue",
  },
  firstCompareH: {
    display: "flex",
    marginLeft: "5px",
    // width: "19%",
    width: "20%",
    // border: "2px solid blue",
  },
  secondCompare: {
    display: "flex",
    marginLeft: "12px",
    width: "19%",
    // border: "2px solid blue",
  },

  secondCompareH: {
    display: "flex",
    marginLeft: "5px",
    width: "20%",
    // border: "2px solid blue",
  },
  thirdCompare: {
    display: "flex",
    marginLeft: "12px",
    width: "19%",
    // border: "2px solid blue",
  },
  thirdCompareH: {
    display: "flex",
    marginLeft: "5px",
    width: "20%",
    // border: "2px solid blue",
  },
  fouthCompare: {
    display: "flex",
    marginLeft: "12px",
    width: "19%",
    // border: "2px solid blue",
  },
  fouthCompareH: {
    display: "none",
    // display: "flex",
    // marginLeft: "5px",
    // width: "20%",
    // border: "2px solid blue",
  },
  textField: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    height: "75px",
    // border: "1px solid black",
    // color: "red",
  },
  textFieldH: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "75px",
    // border: "1px solid black",
    // color: "red",
  },
  feature: {
    fontWeight: "500",
    fontSize: "18px",
  },
  featureH: {
    fontWeight: "500",
    fontSize: "14px",
  },
  difference: {
    fontSize: "14px",
    fontWeight: "500",
  },
}));
function MobileCameForComparison({ mobile1, mobile2, mobile3, mobile4 }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const dataNav = useSelector((state) => state.completeMobileData);
  let jsonObject = dataNav.map(JSON.stringify);
  let uniqueSet = new Set(jsonObject);
  let uniqueArray = Array.from(uniqueSet).map(JSON.parse);
  // console.log("the data received on unique page is:", uniqueArray);
  const [firstBox] = uniqueArray.filter((item) => item.mobilename === mobile1);
  // console.log("data in box1 is", firstBox);
  const [secondBox] = uniqueArray.filter((item) => item.mobilename === mobile2);
  // console.log("data in box2 is", secondBox);
  const [thirdBox] = uniqueArray.filter((item) => item.mobilename === mobile3);
  const [fourthBox] = uniqueArray.filter((item) => item.mobilename === mobile4);
  const classes = useStyles();
  return (
    <Box
      className={`${
        isMatch
          ? `${classes.MobileCameForComparisonHolderH}`
          : `${classes.MobileCameForComparisonHolder}`
      }`}
    >
      <Box
        className={`${isMatch ? `${classes.descBoxH}` : `${classes.descBox}`}`}
      >
        <Box
          className={`${
            isMatch ? `${classes.textFieldH}` : `${classes.textField}`
          }`}
        >
          <Typography
            variant="body"
            className={`${
              isMatch ? `${classes.summaryTitleH}` : `${classes.summaryTitle}`
            }`}
          >
            Summary:
          </Typography>
        </Box>
        <Divider
          sx={{
            border: "0.05px solid lightgray",
            width: "100%",
            color: "lightgray",
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
              isMatch ? `${classes.featureH}` : `${classes.feature}`
            }`}
          >
            Performance
          </Typography>
        </Box>
        <Divider
          sx={{
            border: "0.05px solid lightgray",
            width: "100%",
            color: "lightgray",
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
              isMatch ? `${classes.featureH}` : `${classes.feature}`
            }`}
          >
            Display
          </Typography>
        </Box>
        <Divider
          sx={{
            border: "0.05px solid lightgray",
            width: "100%",
            color: "lightgray",
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
              isMatch ? `${classes.featureH}` : `${classes.feature}`
            }`}
          >
            Front Camera
          </Typography>
        </Box>
        <Divider
          sx={{
            border: "0.05px solid lightgray",
            width: "100%",
            color: "lightgray",
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
              isMatch ? `${classes.featureH}` : `${classes.feature}`
            }`}
          >
            Rear Camera
          </Typography>
        </Box>
        <Divider
          sx={{
            border: "0.05px solid lightgray",
            width: "100%",
            color: "lightgray",
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
              isMatch ? `${classes.featureH}` : `${classes.feature}`
            }`}
          >
            Battery
          </Typography>
        </Box>
        <Divider
          sx={{
            border: "0.05px solid lightgray",
            width: "100%",
            color: "lightgray",
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
              isMatch ? `${classes.featureH}` : `${classes.feature}`
            }`}
          >
            Storage
          </Typography>
        </Box>
        <Divider
          sx={{
            border: "0.05px solid lightgray",
            width: "100%",
            color: "lightgray",
          }}
        />
      </Box>
      <Box
        className={`${
          isMatch ? `${classes.firstCompareH}` : `${classes.firstCompare}`
        }`}
      >
        {firstBox ? (
          /* (
          <Box className={classes.boxOnCondition}>
            {" "}
            <Box className={classes.textField}>
              <Typography
                variant="body"
                sx={{ fontWeight: "600", fontSize: "16px" }}
                className={classes.difference}
              >
                {firstBox.mobilename}
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
                {firstBox.chipset}
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
                {firstBox.displaysize}
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
                firstBox.wideangle
              }+${firstBox.macro}+${firstBox.depth}${
                firstBox.telephoto ? `+${firstBox.telephoto}` : ""
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
                {firstBox.frontcamera}
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
                {firstBox.batterycapacity}
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
                {firstBox.ramvariant1}
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
        )  */
          <SingleComparison mobileData={firstBox} />
        ) : (
          ""
        )}
      </Box>
      <Box
        className={`${
          isMatch ? `${classes.secondCompareH}` : `${classes.secondCompare}`
        }`}
      >
        {secondBox ? <SingleComparison mobileData={secondBox} /> : ""}
      </Box>
      <Box
        className={`${
          isMatch ? `${classes.thirdCompareH}` : `${classes.thirdCompare}`
        }`}
      >
        {" "}
        {thirdBox ? <SingleComparison mobileData={thirdBox} /> : ""}
      </Box>
      <Box
        className={`${
          isMatch ? `${classes.fourthCompareH}` : `${classes.fourthCompare}`
        }`}
      >
        {" "}
        {fourthBox ? <SingleComparison mobileData={fourthBox} /> : ""}
      </Box>
    </Box>
  );
}

export default MobileCameForComparison;
