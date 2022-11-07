import { Box, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
  mainBox: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    marging: "5px",
  },
  mainBoxH: {
    display: "flex",
    width: "100vw",
    // border: "1px solid red",
  },
  boxContainer: {
    display: "flex",
    gap: "1",
    border: "1px solid lightgrey",
    borderRadius: "5px",
    padding: "10px",
  },
  boxContainerH: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid lightgrey",
    borderRadius: "5px",
    padding: "10px",
    justifyContent: "flex-start",
    // backgroundColor: "black",
  },
  boxSectionData: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "10px",
  },
  boxSectionDataH: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "2px",
  },
  articleDesc: {
    fontSize: "16px",
  },
  articleDescH: {
    fontSize: "10px",
  },
  editor: {
    fontSize: "11px",
    color: "darkgrey",
    fontWeight: "500",
  },
  editorH: {
    fontSize: "8px",
    color: "darkgrey",
    fontWeight: "500",
    // border: "1px solid red",
  },
}));
//this variable is just used to run map function three times
const newsSectionRunner = ["one", "tw0", "three"];
function NewsSectionContent({ data }) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  return (
    <Box
      className={`${isMatch ? `${classes.mainBoxH}` : `${classes.mainBox}`}`}
    >
      {newsSectionRunner.map(() => (
        <Box
          className={`${
            isMatch ? `${classes.boxContainerH}` : `${classes.boxContainer}`
          }`}
          sx={{ margin: "7px" }}
        >
          <img
            src={data[0].image}
            width={`${isMatch ? "90px" : "142px"}`}
            alt=""
          />
          <Box
            className={`${
              isMatch
                ? `${classes.boxSectionDataH}`
                : `${classes.boxSectionData}`
            }`}
          >
            <Typography
              className={`${
                isMatch ? `${classes.editorH}` : `${classes.editor}`
              }`}
              variant="body"
            >
              {data[0].editor}
            </Typography>
            <Typography
              className={`${
                isMatch ? `${classes.articleDescH}` : `${classes.articleDesc}`
              }`}
              variant="body"
            >
              {data[0].title}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default NewsSectionContent;
