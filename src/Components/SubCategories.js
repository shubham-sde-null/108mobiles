import { Box, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { subCategories } from "../Contexts/Categories";
import { makeStyles } from "@mui/styles";
import Divider from "@mui/material/Divider";
const useStyles = makeStyles((theme) => ({
  subCategoriesCont: {
    width: "100%",
    backgroundColor: "white",
  },
  subCategoriesContH: {
    visibility: "hidden",
  },
  subCategories: {
    marginTop: "60px",
    height: "45px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "70%",
    margin: "auto",
    // border: "1px solid green",
  },
  subCategoryMenu: {
    fontSize: "18px",
    color: "#6F7378",
    fontWeight: "600",
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
      <Box className={classes.subCategories}>
        {subCategories.map((item, index) => (
          <>
            {" "}
            <Box key={index} className={classes.subCategoryMenu} variant="h6">
              {item}
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
