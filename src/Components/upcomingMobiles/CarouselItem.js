import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  carouselItemCont: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // border: "2px solid blue",
  },
  carouselItemContH: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // border: "1px solid purple",
    overflow: "hidden",
    width: "100%",
    margin: "10px",
    // margin: "0 auto",

    overflowX: "scroll",
  },
  boxData: {
    boxShadow:
      "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
    height: "100%",
    width: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: "10px",
    paddingTop: "10px",
    margin: "4px",
    borderRadius: "5px",
    backgroundColor: "white",
    // border: "2px solid orange",
  },
  boxDataH: {
    boxShadow:
      "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
    height: "auto",
    // width: "300px",
    width: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: "10px",
    paddingTop: "10px",
    margin: "4px",
    borderRadius: "5px",
    backgroundColor: "white",
    // border: "2px solid red",
    // marginBottom: "45px",
    // marginTop: "60px",
  },
}));
function CarouselItem({ data }) {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      className={
        isMatch ? `${classes.carouselItemContH}` : `${classes.carouselItemCont}`
      }
    >
      {data.map((item) => {
        return (
          <Box
            className={isMatch ? `${classes.boxDataH}` : `${classes.boxData}`}
          >
            <div
            // style={{
            //   display: "inline-block",
            //   border: "1px solid green",
            //   overflowX: "hidden",
            //   verticalAlign: "top",
            // }}
            >
              <img
                src={item.image}
                alt="img"
                width={`${isMatch ? "140px" : "160px"}`}
              />
            </div>

            <Typography
              sx={{
                paddingTop: "5px",
                fontSize: `${isMatch ? "12px" : "16px"}`,
              }}
            >
              {item.name}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                color: "rgb(255, 90, 0)",
                fontWeight: "bold",
                fontSize: `${isMatch ? "14px" : "18px"}`,
                paddingTop: "5px",
              }}
            >
              <CurrencyRupeeIcon fontSize="small" />
              {item.price}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                color: "grey",
                fontWeight: "500",
                fontSize: `${isMatch ? "12px" : "16px"}`,
                paddingTop: "5px",
                paddingBottom: "3px",
              }}
            >
              {item.viewDetails}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
export default CarouselItem;
