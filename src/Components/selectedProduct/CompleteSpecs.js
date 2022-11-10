import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  completeSpecsCont: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    margin: "auto",
    backgroundColor: "white",
    // border: "1px solid green",
  },
  singleSpecsCont: {
    display: "flex",
    // border: "1px solid black",
    // gap: "10px",
  },
  singleSpecsContTitle: {
    display: "flex",
    flexDirection: "column",
    width: "20%",
    alignItems: "center",
    fontSize: "22px",
  },
  singleSpecsContFirst: {
    display: "flex",
    flexDirection: "column",
    width: "20%",
    // border: "1px solid red",
    gap: "10px",
    fontWeight: "600",
  },
  singleSpecsContSecond: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    // border: "1px solid green",
    gap: "10px",
  },
}));
function CompleteSpecs() {
  const classes = useStyles();
  return (
    <Box className={classes.completeSpecsCont}>
      <Typography
        variant="body"
        sx={{
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: "30px",
          fontSize: "20px",
          fontWeight: "600",
        }}
      >
        Oneplus 10R Specifications
      </Typography>
      <Divider
        sx={{
          width: "100%",
          color: "gray",
          border: "0.1px solid lightgray",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      />
      <Box className={classes.singleSpecsCont}>
        <Typography variant="body" className={classes.singleSpecsContTitle}>
          Key Specs
        </Typography>
        <Box className={classes.singleSpecsContFirst}>
          <Typography variant="body">RAM</Typography>
          <Typography variant="body">Processor</Typography>
          <Typography variant="body">Rear Camera</Typography>
          <Typography variant="body">Front Camera</Typography>
          <Typography variant="body">Battery</Typography>
          <Typography variant="body">Display</Typography>
        </Box>
        <Box className={classes.singleSpecsContSecond}>
          <Typography variant="body">8GB</Typography>
          <Typography variant="body"> MediaTek Dimensity 8100 Max</Typography>
          <Typography variant="body">50 MP + 8 MP + 2 MP</Typography>
          <Typography variant="body">16MP</Typography>
          <Typography variant="body">5000mAh</Typography>
          <Typography variant="body">6.7Inches(17.02cm)</Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          width: "100%",
          color: "lightgray",
          border: "0.1px solid lightgray",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      />
      <Box className={classes.singleSpecsCont}>
        <Typography variant="body" className={classes.singleSpecsContTitle}>
          General
        </Typography>
        <Box className={classes.singleSpecsContFirst}>
          <Typography variant="body">Launch Date</Typography>
          <Typography variant="body">Operating System</Typography>
          <Typography variant="body">Custom UI</Typography>
        </Box>
        <Box className={classes.singleSpecsContSecond}>
          <Typography variant="body"> May 4, 2022 (Official)</Typography>
          <Typography variant="body"> Android v12</Typography>
          <Typography variant="body">Oxygen OS</Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          width: "100%",
          color: "gray",
          border: "0.1px solid lightgray",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      />
      <Box className={classes.singleSpecsCont}>
        <Typography variant="body" className={classes.singleSpecsContTitle}>
          Performance
        </Typography>
        <Box className={classes.singleSpecsContFirst}>
          <Typography variant="body">Chipset</Typography>
          <Typography variant="body">CPU</Typography>
          <Typography variant="body">Architecture</Typography>
          <Typography variant="body">Fabrication</Typography>
          <Typography variant="body">Graphics</Typography>
          <Typography variant="body">RAM</Typography>
          <Typography variant="body">RAM Type</Typography>
        </Box>
        <Box className={classes.singleSpecsContSecond}>
          <Typography variant="body"> MediaTek Dimensity 8100 Max</Typography>
          <Typography variant="body">
            {" "}
            Octa core (2.85 GHz, Quad core, Cortex A78 + 2 GHz, Quad core,
            Cortex A55)
          </Typography>
          <Typography variant="body"> 64 bit</Typography>
          <Typography variant="body">5nm</Typography>
          <Typography variant="body"> Mali-G610 MC6</Typography>
          <Typography variant="body">8GB</Typography>
          <Typography variant="body">LPDDR5</Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          width: "100%",
          color: "gray",
          border: "0.1px solid lightgray",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      />
      <Box className={classes.singleSpecsCont}>
        <Typography variant="body" className={classes.singleSpecsContTitle}>
          Display
        </Typography>
        <Box className={classes.singleSpecsContFirst}>
          <Typography variant="body">Display Type</Typography>
          <Typography variant="body">Screen Size</Typography>
          <Typography variant="body">Resolution</Typography>
          <Typography variant="body">Aspect Ratio</Typography>
          <Typography variant="body">Pixel Density</Typography>
          <Typography variant="body">
            Screen to Body Ratio (calculated)
          </Typography>
          <Typography variant="body">Screen Ptotection</Typography>
          <Typography variant="body">Bezel-less display</Typography>
          <Typography variant="body">Touch Screen</Typography>
          <Typography variant="body">Brightness</Typography>
          <Typography variant="body">HDR 10 / HDR+ support</Typography>
          <Typography variant="body">Refresh Rate</Typography>
        </Box>
        <Box className={classes.singleSpecsContSecond}>
          <Typography variant="body"> Fluid AMOLED</Typography>
          <Typography variant="body"> 6.7 inches (17.02 cm)</Typography>
          <Typography variant="body"> 1080 x 2412 pixels</Typography>
          <Typography variant="body">20.1:9</Typography>
          <Typography variant="body"> 394 ppi</Typography>
          <Typography variant="body">87.9 %</Typography>
          {/* <br /> */}
          <Typography></Typography>
          <Typography></Typography>
          <Typography variant="body"> Corning Gorilla Glass</Typography>
          <Typography variant="body"> Yes with punch-hole display</Typography>
          <Typography variant="body">
            {" "}
            Yes, Capacitive Touchscreen, Multi-touch
          </Typography>
          <Typography variant="body"> 950 nits</Typography>
          <Typography variant="body"> Yes, HDR 10+</Typography>
          <Typography variant="body">120 Hz</Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          width: "100%",
          color: "gray",
          border: "0.1px solid lightgray",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      />
      <Box className={classes.singleSpecsCont}>
        <Typography variant="body" className={classes.singleSpecsContTitle}>
          Camera
        </Typography>
        <Box className={classes.singleSpecsContFirst}>
          <Typography
            variant="body"
            sx={{
              fontSize: "16px",
              color: "gray",
              textDecoration: "underline",
            }}
          >
            MAIN CAMERA
          </Typography>
          <Typography variant="body">Camera Setup</Typography>
          <Typography variant="body">Resolution</Typography>
          <br />
          <br />
          <br />
          <Typography></Typography>
          <Typography variant="body">Sensor</Typography>
          <Typography variant="body">Autofocus</Typography>
          <Typography variant="body">OIS</Typography>
          <Typography variant="body">Flash</Typography>
          <Typography variant="body">Image Resolution</Typography>
          <Typography variant="body">Settings</Typography>
          <Typography variant="body">Shooting Modes</Typography>
          <Typography></Typography>
          <Typography></Typography>
          <Typography></Typography>
          <Typography variant="body">Camera Features</Typography>
          <br />
          <br />
          <Typography></Typography>
          <Typography variant="body">Video Recording</Typography>
          <br />
          <Typography
            variant="body"
            sx={{
              fontSize: "16px",
              color: "gray",
              textDecoration: "underline",
            }}
          >
            FRONT CAMERA
          </Typography>
          <Typography variant="body">Camera Setup</Typography>
          <Typography variant="body">Resolution</Typography>
          <br />
          <Typography variant="body">Camera Features</Typography>
          <Typography variant="body">Video Recording</Typography>
        </Box>
        <Box className={classes.singleSpecsContSecond}>
          <br />
          <Typography variant="body"> Triple</Typography>
          <Typography variant="body">
            {" "}
            50 MP f/1.8, Wide Angle, Primary Camera
            <br /> (23.6 mm focal length, 1.56" sensor size, 1µm pixel size)
            <br />
            8 MP f/2.2, Ultra-Wide Angle Camera (15 mm focal length, 4.0" sensor
            size, 1.12µm pixel size)
            <br />2 MP f/2.4, Macro Camera
          </Typography>
          <Typography variant="body"> Exmor-RS CMOS Sensor</Typography>
          <Typography variant="body">
            {" "}
            Yes, Phase Detection autofocus, Continuous autofocus, Laser
            autofocus
          </Typography>
          <Typography variant="body"> Yes</Typography>
          <Typography variant="body"> Yes, Dual LED Flash</Typography>
          <Typography variant="body"> 8150 x 6150 Pixels</Typography>
          <Typography variant="body">
            {" "}
            Exposure compensation, ISO control
          </Typography>
          <Typography variant="body">
            {" "}
            Continuous Shooting
            <br />
            High Dynamic Range mode (HDR)
          </Typography>
          <Typography variant="body">
            {" "}
            Digital Zoom
            <br />
            Auto Flash
            <br />
            Face Detection
            <br />
            Touch to focus
            <br />
          </Typography>
          <Typography variant="body">
            {" "}
            3840x2160 @ 30 fps
            <br />
            1920x1080 @ 30 fps
          </Typography>
          <br />
          <Typography></Typography>
          <Typography variant="body"> Single</Typography>
          <Typography></Typography>
          <Typography variant="body">
            {" "}
            16 MP f/2.4, Wide Angle, Primary Camera
            <br />
            (25.8 mm focal length, 3" sensor size, 1µm pixel size)
          </Typography>
          <Typography></Typography>
          <Typography> Fixed Focus</Typography>
          <Typography> 1920x1080 @ 30 fps</Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          width: "100%",
          color: "gray",
          border: "0.1px solid lightgray",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      />

      <Box className={classes.singleSpecsCont}>
        <Typography variant="body" className={classes.singleSpecsContTitle}>
          Battery
        </Typography>
        <Box className={classes.singleSpecsContFirst}>
          <Typography variant="body">Capacity</Typography>
          <Typography variant="body">Type</Typography>
          <Typography variant="body">Removable</Typography>
          <Typography variant="body">Quick Charging</Typography>
          <Typography variant="body">USB Type-C</Typography>
        </Box>
        <Box className={classes.singleSpecsContSecond}>
          <Typography variant="body"> 5000 mAh</Typography>
          <Typography variant="body"> Li-Polymer</Typography>
          <Typography variant="body">No</Typography>
          <Typography variant="body">
            Yes, Super VOOC, 80W: 100 % in 32 minutes
          </Typography>
          <Typography variant="body"> Yes</Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          width: "100%",
          color: "gray",
          border: "0.1px solid lightgray",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      />
      <Box className={classes.singleSpecsCont}>
        <Typography variant="body" className={classes.singleSpecsContTitle}>
          Storage
        </Typography>
        <Box className={classes.singleSpecsContFirst}>
          <Typography variant="body">Internal Memory</Typography>
          <Typography variant="body">Expandable Memory</Typography>
          <Typography variant="body">Storage Type</Typography>
          <Typography variant="body">USB OTG</Typography>
        </Box>
        <Box className={classes.singleSpecsContSecond}>
          <Typography variant="body"> 128GB</Typography>
          <Typography variant="body"> No</Typography>
          <Typography variant="body">UFS 3.1</Typography>
          <Typography variant="body">Yes</Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          width: "100%",
          color: "gray",
          border: "0.1px solid lightgray",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      />
      <Box className={classes.singleSpecsCont}>
        <Typography variant="body" className={classes.singleSpecsContTitle}>
          Network & Conn
        </Typography>
        <Box className={classes.singleSpecsContFirst}>
          <Typography variant="body">SIM Slot(s)</Typography>
          <Typography variant="body">SIM Size</Typography>
          <Typography variant="body">Netwrok Support</Typography>
          <Typography variant="body">VoLTE</Typography>
          <Typography variant="body">SIM 1</Typography>
          <Typography variant="body">SIM 2</Typography>
          <Typography variant="body">Wi-Fi</Typography>
          <Typography variant="body">Wi-Fi Features</Typography>
          <Typography variant="body">Bluetooth</Typography>
          <Typography variant="body">GPS</Typography>
          <Typography variant="body">NFC</Typography>
          <Typography variant="body">USB Connectivity</Typography>
        </Box>
        <Box className={classes.singleSpecsContSecond}>
          <Typography variant="body"> Dual SIM, GSM+GSM</Typography>
          <Typography variant="body"> SIM1: Nano, SIM2: Nano</Typography>
          <Typography variant="body">
            {" "}
            5G Supported in India, 4G Supported in India, 3G, 2G
          </Typography>
          <Typography variant="body">Yes</Typography>
          <Typography variant="body">
            5G Bands:, 4G Bands:, 3G Bands:,2G Bands:, GPRS:Available,
            EDGE:Available
          </Typography>
          <Typography variant="body">
            4G Bands:, 3G Bands:,2G Bands:, GPRS:Available, EDGE:Available
          </Typography>
          <Typography variant="body">
            Yes, Wi-Fi 802.11, a/ac/ax/b/g/n/n 5GHz, MIMO
          </Typography>
          <Typography variant="body"> Mobile Hotspot</Typography>
          <Typography variant="body"> Yes, v5.2</Typography>
          <Typography variant="body"> Yes with A-GPS, Glonass</Typography>
          <Typography variant="body">Yes</Typography>
          <Typography variant="body">
            {" "}
            Mass storage device, USB charging
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          width: "100%",
          color: "gray",
          border: "0.1px solid lightgray",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      />
      <Box className={classes.singleSpecsCont}>
        <Typography variant="body" className={classes.singleSpecsContTitle}>
          MultiMedia
        </Typography>
        <Box className={classes.singleSpecsContFirst}>
          <Typography variant="body">FM Radio</Typography>
          <Typography variant="body">Loudspeaker</Typography>
          <Typography variant="body">Audio Jack</Typography>
          <Typography variant="body">Audio Features</Typography>
        </Box>
        <Box className={classes.singleSpecsContSecond}>
          <Typography variant="body"> No</Typography>
          <Typography variant="body"> Yes</Typography>
          <Typography variant="body">USB Type-C</Typography>
          <Typography variant="body"> Dolby Atmos</Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          width: "100%",
          color: "gray",
          border: "0.1px solid lightgray",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      />
      <Box className={classes.singleSpecsCont}>
        <Typography variant="body" className={classes.singleSpecsContTitle}>
          Sensors
        </Typography>
        <Box className={classes.singleSpecsContFirst}>
          <Typography variant="body">Fingerprint Sensor</Typography>
          <Typography variant="body">Fingerprint Sensor Position</Typography>
          <Typography variant="body">Fingerprint Sensor Type</Typography>
          <Typography variant="body">Other Sensors</Typography>
        </Box>
        <Box className={classes.singleSpecsContSecond}>
          <Typography variant="body"> Yes</Typography>
          <Typography variant="body"> On-Screen</Typography>
          <Typography></Typography>
          <Typography></Typography>
          <Typography></Typography>
          <Typography variant="body">Optical</Typography>
          <Typography variant="body">
            {" "}
            Light sensor, Proximity sensor, Accelerometer, Compass, Gyroscope
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          width: "100%",
          color: "gray",
          border: "0.1px solid lightgray",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      />
    </Box>
  );
}

export default CompleteSpecs;
