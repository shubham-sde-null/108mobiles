import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Divider from "@mui/material/Divider";
import SdCardIcon from "@mui/icons-material/SdCard";
import SimCardIcon from "@mui/icons-material/SimCard";
import FiveGIcon from "@mui/icons-material/FiveG";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";
import RadioIcon from "@mui/icons-material/Radio";
import CompleteSpecs from "./CompleteSpecs";
import Carousel from "react-material-ui-carousel";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
const useStyles = makeStyles(() => ({
  selectedProductMainBox: {
    display: "flex",
    flexDirection: "column",
    // border: "1px solid red",
    marginTop: "65px",
    width: "70%",
    margin: "auto",
    backgroundColor: "white",
  },
  selectedProductMainBoxH: {
    display: "flex",
    flexDirection: "column",
    // border: "1px solid red",
    marginTop: "65px",
    width: "100%",
    margin: "auto",
    backgroundColor: "white",
  },
  mobileName: {
    fontSize: "20px",
    fontWeight: "600",
    paddingTop: "15px",
    paddingBottom: "15px",
    paddingLeft: "30px",
    border: "1px solid lightgray",
    borderBottom: "none",
  },
  selectedProductData: {
    display: "flex",
  },
  selectedProductImages: {
    // border: "1px solid hotpink",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    // gap: "10px",
    width: "75%",
    "&>img": {
      border: "1px solid lightgray",
      paddingTop: "5px",
      paddingBottom: "5px",
      paddingLeft: "10px",
      paddingRight: "10px",
      "&:hover": {
        border: "1.5px solid orange",
        cursor: "pointer",
      },
    },
  },
  selectedProductDataLeft: {
    display: "flex",
    border: "1px solid lightgray",
    borderRight: "none",
    flexDirection: "column",
    width: "30%",
    alignItems: "center",
    gap: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  selectedProductDataRight: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "15px",
    paddingRight: "15px",
    width: "70%",
    border: "1px solid lightgray",
  },
  specificationBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // border: "3px solid red",
    width: "100%",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "5px",
    paddingRight: "5px",
    // border: "0.2px solid lightgray",
    // borderRadius: "5px",
  },
  specificationBoxSub: {
    // border: "2px solid black",
    flexDirection: "column",
    display: "flex",
  },
  featuresMain: {
    fontSize: "18px",
    fontWeight: "500",
    // border: "1px solid red",
    paddingTop: "5px",
    paddingBottom: "5px",
  },
  features: {
    fontSize: "14px",
    paddingTop: "3px",
  },
  score: {
    marginTop: "15px",
    marginBottom: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#20bf6b",
    color: "white",
    fontWeight: "500",
    width: "50px",
  },
  extraSpecs: {
    display: "flex",
    flexWrap: "wrap",
    minHeight: "150px",
    alignItems: "center",
    // justifyContent: "center",
    // border: "2px solid black",
    paddingLeft: "5px",
  },
  extraSpecsData: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    // border: "1px solid red",
    // height: "50px",
    width: "49.5%",
    color: "grey",
    fontSize: "15px",
  },
  selectedImageCont: {
    position: "absolute",
    left: "50%",
    right: "50%",
    border: "1px solid red",
    width: "200px",
    height: "200px",
  },
  //mobile detail images
  largeScreen: {
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    position: "fixed",
    width: "95vw",
    height: "85vh",
    // border: "1px solid lightgray",
    // border: "1px solid red",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    zIndex: "100",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "#f1f2f6",

    marginTop: "25px",
  },
  mediumScreen: {
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    position: "fixed",
    width: "85vw",
    height: "60vh",
    // border: "1px solid lightgray",
    // border: "2px solid green",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    zIndex: "100",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    backgroundColor: "#f1f2f6",
    // background: "rgba(2, 2, 2, 0.81)",
    marginTop: "25px",
  },
}));

function SelectedMobilePage() {
  const theme = useTheme();
  const isMed = useMediaQuery(theme.breakpoints.down("md"));
  const dataFrm = useSelector((state) => state);
  // console.log("the data inside selector is:", dataFrm);
  const productImages = [
    "https://i.postimg.cc/y8WY4BXj/oneplus10rfront.png",
    "https://i.postimg.cc/mDynYDWC/oneplus10rback.png",
    "https://i.postimg.cc/Gp59xkvn/oneplus10rleft.png",
    "https://i.postimg.cc/3J18ZXHf/oneplus10rright.png",
  ];
  const [imageselected, setImageSelected] = useState(false);
  const openImageHandler = () => {
    setImageSelected(!imageselected);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box
        className={`${
          isMed
            ? `${classes.selectedProductMainBoxH}`
            : `${classes.selectedProductMainBox}`
        }`}
      >
        <Typography variant="body" className={classes.mobileName}>
          Oneplus 10R 5G
        </Typography>
        <Box className={classes.selectedProductData}>
          <Box className={classes.selectedProductDataLeft}>
            <img
              src="https://i.postimg.cc/y8WY4BXj/oneplus10rfront.png"
              width="200px"
              alt=""
            />
            <Box className={classes.selectedProductImages}>
              <img
                onClick={openImageHandler}
                src="https://i.postimg.cc/y8WY4BXj/oneplus10rfront.png"
                width="25px"
                alt=""
              />
              <img
                onClick={openImageHandler}
                src="https://i.postimg.cc/mDynYDWC/oneplus10rback.png"
                width="25px"
                alt=""
              />
              <img
                onClick={openImageHandler}
                src="https://i.postimg.cc/Gp59xkvn/oneplus10rleft.png"
                width="25px"
                alt=""
              />
              <img
                onClick={openImageHandler}
                src="https://i.postimg.cc/3J18ZXHf/oneplus10rright.png"
                width="25px"
                alt=""
              />
            </Box>
          </Box>
          <Box className={classes.selectedProductDataRight}>
            <Box className={classes.score}>
              <Typography variant="body" sx={{ fontSize: "18px" }}>
                93%
              </Typography>
              <Typography variant="body" sx={{ fontSize: "12px" }}>
                Spec
              </Typography>
              <Typography variant="body" sx={{ fontSize: "12px" }}>
                Score
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              Rs.34,000
            </Typography>
            <Divider
              sx={{
                // display: isMed ? "none" : "",
                width: isMed ? "auto" : "700px",
                color: "gray",
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                Key Specs
              </Typography>
              <Typography
                variant="body"
                sx={{
                  color: "#fa8231",
                  fontWeight: "500",
                  textDecoration: "underline",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                See Full Specs
              </Typography>
            </Box>

            <Box className={classes.specificationBox}>
              <Box className={classes.specificationBoxSub}>
                <Typography variant="body" className={classes.featuresMain}>
                  Performance
                </Typography>
                <Typography variant="body" className={classes.features}>
                  Octa Core(2.85GHz,....)
                </Typography>
                <Typography variant="body" className={classes.features}>
                  Mediatek Dimensity ...
                </Typography>
                <Typography variant="body" className={classes.features}>
                  12GB RAM
                </Typography>
              </Box>
              <Divider
                alignItems="vertical"
                sx={{
                  height: "90%",
                  backgroundColor: "gray",
                  border: "0.5px solid gray",
                }}
              />
              <Box className={classes.specificationBoxSub}>
                <Typography variant="body" className={classes.featuresMain}>
                  Display
                </Typography>
                <Typography variant="body" className={classes.features}>
                  6.7Inches(17.02cm)
                </Typography>
                <Typography variant="body" className={classes.features}>
                  394 PPI, Fluid AMOLED
                </Typography>
                <Typography variant="body" className={classes.features}>
                  120 Hz Refresh Rate
                </Typography>
              </Box>
              <Divider
                alignItems="vertical"
                sx={{
                  height: "90%",
                  backgroundColor: "gray",
                  border: "0.5px solid gray",
                }}
              />
              <Box className={classes.specificationBoxSub}>
                <Typography variant="body" className={classes.featuresMain}>
                  Camera
                </Typography>
                <Typography variant="body" className={classes.features}>
                  50MP + 8MP + 2MP
                </Typography>
                <Typography variant="body" className={classes.features}>
                  Dual LED Flash
                </Typography>
                <Typography variant="body" className={classes.features}>
                  16 MP Front Camera
                </Typography>
              </Box>
              <Divider
                alignItems="vertical"
                sx={{
                  height: "90%",
                  backgroundColor: "gray",
                  border: "0.5px solid gray",
                }}
              />
              <Box className={classes.specificationBoxSub}>
                <Typography variant="body" className={classes.featuresMain}>
                  Battery
                </Typography>
                <Typography variant="body" className={classes.features}>
                  4500 mAh
                </Typography>
                <Typography variant="body" className={classes.features}>
                  Super VOOC Charging
                </Typography>
                <Typography variant="body" className={classes.features}>
                  USB Type-C Port
                </Typography>
              </Box>
            </Box>
            <Divider
              sx={{
                width: "100%",
                color: "gray",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <Box className={classes.extraSpecs}>
              <Typography className={classes.extraSpecsData} variant="body">
                <SdCardIcon />
                128GB, <span style={{ color: "red" }}>Non Expandable</span>
              </Typography>
              <Typography className={classes.extraSpecsData} variant="body">
                <SimCardIcon />
                Dual Sim: Nano+Nano
              </Typography>
              <Typography className={classes.extraSpecsData} variant="body">
                <FiveGIcon />
                Supported in India
              </Typography>
              <Typography className={classes.extraSpecsData} variant="body">
                <FingerprintIcon />
                Fingerprint sensor
              </Typography>
              <Typography className={classes.extraSpecsData} variant="body">
                <SmartphoneIcon />
                Gorilla Glass
              </Typography>
              <Typography className={classes.extraSpecsData} variant="body">
                <ElectricalServicesIcon />
                USB OTG Support
              </Typography>
              <Typography className={classes.extraSpecsData} variant="body">
                <RadioIcon />
                <span style={{ color: "red" }}>Fm Radio</span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <CompleteSpecs />
      {imageselected && (
        <Box
          // sx={{
          //   display: "flex",
          //   // alignItems: "center",
          //   // justifyContent: "center",
          //   position: "fixed",
          //   width: "95vw",
          //   height: "85vh",
          //   // border: "1px solid lightgray",
          //   border: "1px solid red",
          //   boxShadow:
          //     "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
          //   zIndex: "100",
          //   left: "50%",
          //   top: "50%",
          //   transform: "translate(-50%,-50%)",
          //   backgroundColor: "#f1f2f6",
          //   marginTop: "25px",
          // }}
          className={`${
            isMed ? `${classes.mediumScreen}` : `${classes.largeScreen}`
          }`}
        >
          <Carousel
            autoPlay={false}
            indicators={false}
            navButtonsAlwaysVisible={true}
            sx={{
              width: "70%",
              height: "fit-content",
              // border: "1px solid hotpink",
              margin: "auto",
              backgroundColor: "white",
              border: "1px solid lightgray",
            }}
          >
            {productImages.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  borderRadius: "5px",
                }}
              >
                <img src={item} width={isMed ? "200px" : "250px"} alt="" />
              </Box>
            ))}
          </Carousel>
          <Box
            onClick={openImageHandler}
            sx={{
              border: "1px solid lightgray",
              height: "fit-content",
              marginRight: "10px",
              marginTop: "10px",
              borderRadius: "3px",
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              padding: "2px",
            }}
          >
            <CloseIcon
              fontSize="medium"
              sx={{
                color: "black",
                padding: "0px",
                "&:hover": {
                  cursor: "pointer",
                  color: "darkred",
                },
              }}
            />
          </Box>
        </Box>
      )}
    </React.Fragment>
  );
}

export default SelectedMobilePage;
