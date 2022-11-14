import { Box, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import Divider from "@mui/material/Divider";
import SingleComparison from "./SingleComparison";
const useStyles = makeStyles(() => ({
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
  descBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "17%",
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
  secondCompare: {
    marginLeft: "11px",
    // border: "1px solid green",

    width: "19%",
  },
  thirdCompare: {
    marginLeft: "11px",
    width: "19%",
    // border: "1px solid hotpink",
  },
  fouthCompare: {
    marginLeft: "11px",
    width: "19%",
    // border: "1px solid yellow",
  },
  textField: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    height: "75px",
    // border: "1px solid black",
    // color: "red",
  },
  feature: {
    fontWeight: "500",
    fontSize: "18px",
  },
  difference: {
    fontSize: "14px",
    fontWeight: "500",
  },
}));
function MobileCameForComparison({ mobile1, mobile2, mobile3, mobile4 }) {
  const dataNav = useSelector((state) => state.completeMobileData);
  let jsonObject = dataNav.map(JSON.stringify);
  let uniqueSet = new Set(jsonObject);
  let uniqueArray = Array.from(uniqueSet).map(JSON.parse);
  console.log("the data received on unique page is:", uniqueArray);
  const [firstBox] = uniqueArray.filter((item) => item.mobilename === mobile1);
  console.log("data in box1 is", firstBox);
  const [secondBox] = uniqueArray.filter((item) => item.mobilename === mobile2);
  console.log("data in box2 is", secondBox);
  const [thirdBox] = uniqueArray.filter((item) => item.mobilename === mobile3);
  const [fourthBox] = uniqueArray.filter((item) => item.mobilename === mobile4);
  const classes = useStyles();
  return (
    <Box className={classes.MobileCameForComparisonHolder}>
      <Box className={classes.descBox}>
        <Box className={classes.textField}>
          <Typography
            variant="body"
            sx={{ fontSize: "22px", fontWeight: "600" }}
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

        <Box className={classes.textField}>
          <Typography variant="body" className={classes.feature}>
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
        <Box className={classes.textField}>
          <Typography variant="body" className={classes.feature}>
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
        <Box className={classes.textField}>
          <Typography variant="body" className={classes.feature}>
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
        <Box className={classes.textField}>
          <Typography variant="body" className={classes.feature}>
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
        <Box className={classes.textField}>
          <Typography variant="body" className={classes.feature}>
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
        <Box className={classes.textField}>
          <Typography variant="body" className={classes.feature}>
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
      <Box className={classes.firstCompare}>
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
      <Box className={classes.secondCompare}>
        {secondBox ? <SingleComparison mobileData={secondBox} /> : ""}
      </Box>
      <Box className={classes.thirdCompare}>
        {" "}
        {thirdBox ? <SingleComparison mobileData={thirdBox} /> : ""}
      </Box>
      <Box className={classes.fouthCompare}>
        {" "}
        {fourthBox ? <SingleComparison mobileData={fourthBox} /> : ""}
      </Box>
    </Box>
  );
}

export default MobileCameForComparison;
