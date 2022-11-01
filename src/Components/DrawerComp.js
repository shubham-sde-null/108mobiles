import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CompareIcon from "@mui/icons-material/Compare";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
function DrawerComp({ categories }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: "#F5F5F1" },
        }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <List>
          {categories.map((item, index) => (
            <ListItemButton
              key={index}
              divider
              onClick={() => {
                setOpen(false);
              }}
            >
              <ListItemIcon sx={{ alignItems: "center" }}>
                <IconButton>
                  {index === 0 ? (
                    <PhoneAndroidIcon />
                  ) : index === 1 ? (
                    <CompareIcon />
                  ) : index === 2 ? (
                    <UpcomingIcon />
                  ) : index === 3 ? (
                    <NewspaperIcon />
                  ) : index === 4 ? (
                    <StarBorderIcon />
                  ) : index === 5 ? (
                    <FilterAltIcon />
                  ) : (
                    <PhoneAndroidIcon />
                  )}
                </IconButton>
                <ListItemText sx={{ color: "#838383", fontWeight: "bold" }}>
                  {item}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white" }}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
}

export default DrawerComp;
