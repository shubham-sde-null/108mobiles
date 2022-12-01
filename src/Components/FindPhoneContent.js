import { Typography, Box } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Divider from "@mui/material/Divider";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
const useStyles = makeStyles(() => ({
  findPhoneContentCont: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
  },
  findPhoneContentContInner: {
    display: "flex",
    // justifyContent: "space-around",
    gap: "20px",
    // border: "1px solid red",
    marginLeft: "15px",
    marginRight: "15px",
  },
}));
function FindPhoneContent({ data }) {
  console.log("data i got is", data);
  const classes = useStyles();
  return (
    <Box className={classes.findPhoneContentCont}>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "600",
          maxWidth: "300px",
          // border: "1px solid green",
          textDecoration: "underline",
          overflow: "hidden",
          //   padding: "10px",
          paddingLeft: "10px",
          paddingBottom: "10px",
        }}
      >
        {data[0].specification}
      </Typography>

      {data.map((item) => (
        <Box>
          <Box className={classes.findPhoneContentContInner}>
            <img src={item.image} width="28px" alt="" />
            <Box>
              <Typography>{item.name}</Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CurrencyRupeeIcon fontSize="small" /> {item.price}
              </Typography>
            </Box>
          </Box>
          <Divider
            sx={{
              width: "98%",
              margin: "auto",
              marginTop: "5px",
              margingBottom: "5px",
              backgroundColor: "grey",
            }}
          />
        </Box>
      ))}
    </Box>
  );
}

export default FindPhoneContent;
