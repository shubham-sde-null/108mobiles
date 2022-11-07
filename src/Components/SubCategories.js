import { Box, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { subCategories } from "../Contexts/Categories";
import { makeStyles } from "@mui/styles";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { listStyle2 } from "../Contexts/listStyle";
const useStyles = makeStyles((theme) => ({
  subCategoriesCont: {
    width: "100%",
    backgroundColor: "white",
  },
  subCategoriesContH: {
    width: "100%",
    // maxWidth: "100vw",
    // width: "50px",
    border: "3px solid brown",
    backgroundColor: "purple",
    // visibility: "collapse",
    marginTop: "18px",
    // padding: "0px",
    boxSizing: "border-box",
    visibility: "hidden",
  },
  subCategories: {
    marginTop: "65px",
    height: "45px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "70%",
    margin: "auto",
    // border: "1px solid green",
  },
  subCategoriesH: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height: "100px",
    width: "100vw",
    // border: "2px solid red",
    visibility: "hidden",
  },
  subCategoryMenu: {
    fontSize: "18px",
    // color: "#6F7378",
    color: "black",
    fontWeight: "600",
    "&:hover": {
      color: "#ee5253",
      cursor: "pointer",
    },
  },
  subCategoryMenuH: {
    width: "100vw",
    fontSize: "12px",
  },
}));
function SubCategories() {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      className={`${
        isMatch
          ? `${classes.subCategoriesContH}`
          : `${classes.subCategoriesCont}`
      }`}
    >
      <Box
        className={`${
          isMatch ? `${classes.subCategoriesH}` : `${classes.subCategories}`
        }`}
      >
        {subCategories.map((item, index) => (
          <>
            {" "}
            <Box
              key={index}
              className={`${
                isMatch
                  ? `${classes.subCategoryMenuH}`
                  : `${classes.subCategoryMenu}`
              }`}
              variant="h6"
            >
              {
                <Link
                  style={listStyle2}
                  to={
                    item === "Mobiles"
                      ? "/mobiles"
                      : item === "Compare"
                      ? "/comparemobiles"
                      : item === "News"
                      ? "/news"
                      : item === "Reviews"
                      ? "/reviews"
                      : item === "Video"
                      ? "/videos"
                      : item === "Build Phone"
                      ? "/buildphone"
                      : item === "Contact"
                      ? "/contact"
                      : "/"
                  }
                >
                  {item}
                </Link>
              }
            </Box>
            <Divider
              // sx={{ border: "2px solid red" }}
              orientation="vertical"
              flexItem
            />
          </>
        ))}
      </Box>
    </Box>
  );
}

export default SubCategories;
