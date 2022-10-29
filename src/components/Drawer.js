import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DragHandleRoundedIcon from "@mui/icons-material/DragHandleRounded";

const DrawerComponent = ({ links }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Drawer
        PaperProps={{ sx: { backgroundColor: "rgba(76,9,121,1)" } }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          {links.map((link, index) => (
            <ListItemButton onClick={() => setOpen(false)} key={index} divider>
              <ListItemIcon>
                <ListItemText sx={{ color: "white" }}>{link}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "white" }}
        onClick={() => setOpen(!open)}
      >
        <DragHandleRoundedIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
