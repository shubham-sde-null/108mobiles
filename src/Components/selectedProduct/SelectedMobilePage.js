import { Typography, Box } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Divider from "@mui/material/Divider";
const useStyles = makeStyles(() => ({
  selectedProductMainBox: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid red",
    marginTop: "65px",
    width: "70%",
    margin: "auto",
    backgroundColor: "white",
  },
  mobileName: {
    fontSize: "20px",
    fontWeight: "600",
    paddingTop: "15px",
    paddingBottom: "15px",
    paddingLeft: "30px",
    border: "1px solid red",
  },
  selectedProductData: {
    display: "flex",
  },
  selectedProductImages: {
    border: "1px solid hotpink",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    // gap: "10px",
    width: "75%",
    "&>img": {
      border: "1px solid black",
      paddingTop: "5px",
      paddingBottom: "5px",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  },
  selectedProductDataLeft: {
    display: "flex",
    border: "1px solid green",
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
    border: "1px solid yellow",
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
}));
function SelectedMobilePage() {
  const classes = useStyles();
  return (
    <Box className={classes.selectedProductMainBox}>
      <Typography variant="body" className={classes.mobileName}>
        Oneplus 10R
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
              src="https://i.postimg.cc/y8WY4BXj/oneplus10rfront.png"
              width="25px"
              alt=""
            />
            <img
              src="https://i.postimg.cc/y8WY4BXj/oneplus10rfront.png"
              width="25px"
              alt=""
            />
            <img
              src="https://i.postimg.cc/y8WY4BXj/oneplus10rfront.png"
              width="25px"
              alt=""
            />
            <img
              src="https://i.postimg.cc/y8WY4BXj/oneplus10rfront.png"
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
            Rs.50,000
          </Typography>
          <Divider sx={{ width: "700px", color: "gray" }} />
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
              marginTop: "15px",
              marginBottom: "15px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default SelectedMobilePage;
