import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
const useStyles = makeStyles(() => ({
  footerContainer: {
    backgroundColor: "#1e272e",
    color: "white",
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",

    alignItems: "center",
    flexDirection: "column",
    gap: "10px",
  },
  footerContainerH: {
    backgroundColor: "#1e272e",
    color: "white",
    marginTop: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "5px",
  },
  footerContainerM: {
    backgroundColor: "#1e272e",
    color: "white",
    marginTop: "3px",
    display: "flex",
    justifyContent: "center",
    // border: "2px solid red",
    alignItems: "center",
    flexDirection: "column",
    gap: "10px",
  },
  footermenu: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
    fontSize: "17px",
  },
  footermenuH: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    fontSize: "12px",
  },
  socialMedia: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  socialMediaH: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
  },
  socialUtility: {
    fontSize: "18px",
    fontWeight: "500",

    "&:hover": {
      color: "#ED4C67",
    },
  },
  socialUtilityH: {
    fontSize: "14px",
    fontWeight: "500",
    "&:hover": {
      color: "#ED4C67",
    },
  },
  copyrightB: {
    fontSize: "18px",
  },
  copyrightS: {
    fontSize: "10px",
  },
}));
function Footer() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const isMed = useMediaQuery(theme.breakpoints.down("md"));
  const classes = useStyles();
  return (
    <Box
      className={`${
        isMatch
          ? `${classes.footerContainerH}`
          : isMed
          ? `${classes.footerContainerM}`
          : `${classes.footerContainer}`
      }`}
    >
      <Box
        sx={{
          color: "#ED4C67",
          fontSize: isMatch ? "16px" : "22px",
          fontWeight: "bold",
          padding: "10px",
        }}
      >
        Welcome to the world of smartphones
      </Box>
      <Box
        className={`${
          isMatch ? `${classes.socialMediaH}` : `${classes.socialMedia}`
        }`}
      >
        <Typography
          variant="body"
          className={`${
            isMatch ? `${classes.socialUtilityH}` : `${classes.socialUtility}`
          }`}
        >
          Reach Us At :
        </Typography>
        <TwitterIcon
          fontSize={isMatch ? "medium" : "large"}
          className={classes.socialUtility}
        />
        <YouTubeIcon
          fontSize={isMatch ? "medium" : "large"}
          className={classes.socialUtility}
        />
        <FacebookIcon
          fontSize={isMatch ? "medium" : "large"}
          className={classes.socialUtility}
        />
        <InstagramIcon
          fontSize={isMatch ? "medium" : "large"}
          className={classes.socialUtility}
        />
      </Box>
      <Typography
        variant="body"
        sx={{
          //   color: "#0652DD",
          fontSize: isMatch ? "0.7rem" : "1.2rem",
          fontWeight: "400",
          padding: isMatch ? "5px" : "10px",
        }}
      >
        {" "}
        we are here to help you out to make better choice while making a
        electronic purchase
      </Typography>

      <Box
        className={`${
          isMatch ? `${classes.footermenuH}` : `${classes.footermenu}`
        }`}
      >
        <Box>
          {" "}
          <Typography
            variant="body"
            sx={{ fontSize: isMatch ? "0.6rem" : "1.2rem" }}
          >
            Home
          </Typography>
        </Box>
        <Box>
          {" "}
          <Typography
            variant="body"
            sx={{ fontSize: isMatch ? "0.6rem" : "1.2rem" }}
          >
            About Us
          </Typography>
        </Box>
        <Box>
          {" "}
          <Typography
            variant="body"
            sx={{ fontSize: isMatch ? "0.6rem" : "1.2rem" }}
          >
            Contact Us
          </Typography>
        </Box>
        <Box>
          {" "}
          <Typography
            variant="body"
            sx={{ fontSize: isMatch ? "0.6rem" : "1.2rem" }}
          >
            Feedback
          </Typography>
        </Box>
        <Box>
          {" "}
          <Typography
            variant="body"
            sx={{ fontSize: isMatch ? "0.6rem" : "1.2rem" }}
          >
            Terms and Condition
          </Typography>
        </Box>
      </Box>
      <p
        className={`${
          isMatch ? `${classes.copyrightS}` : `${classes.copyrightB}`
        }`}
      >
        &copy;&nbsp;108Mobiles Web Private Limited. All Rights Reserved.
      </p>
    </Box>
  );
}

export default Footer;
