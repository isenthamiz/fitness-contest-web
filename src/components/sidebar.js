import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Settings, Home } from "@mui/icons-material";
import { DirectionsRun, DirectionsBike } from "@mui/icons-material";

import AppContext from "../store/context/app-context";

const DrawerHeader = styled.section`
  display: flex;
  padding: 0.5rem;
  flex-direction: row;
  justify-content: flex-end;
`;

const SideBar = function (props) {
  const history = useHistory();

  const { setDrawerOpen, setSettingsOpen } = useContext(AppContext);

  return (
    <Drawer
      sx={{
        width: "240px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          background: "#8DAD50",
          width: "240px",
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={props.open}
    >
      <DrawerHeader>
        <IconButton onClick={() => setDrawerOpen(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem
          button
          key="home"
          onClick={() => {
            setDrawerOpen(false);
            history.push("/");
          }}
        >
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem
          button
          key="running"
          onClick={() => {
            setDrawerOpen(false);
          }}
        >
          <ListItemIcon>
            <DirectionsRun />
          </ListItemIcon>
          <ListItemText primary="Running" />
        </ListItem>

        <ListItem
          button
          key="cycling"
          onClick={() => {
            setDrawerOpen(false);
          }}
        >
          <ListItemIcon>
            <DirectionsBike />
          </ListItemIcon>
          <ListItemText primary="Cycling" />
        </ListItem>

        <ListItem
          button
          key="settings"
          onClick={() => {
            setSettingsOpen(true);
            setDrawerOpen(false);
          }}
        >
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;
