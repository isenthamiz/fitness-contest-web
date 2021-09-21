import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { ArrowCircleUp, ArrowCircleDown } from "@mui/icons-material";

const style = {
  background: "#ad508d",
  color: "white",
};

const LeadersBoard = ({ data }) => {
  return (
    <div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {data.map((player) => {
          return (
            <div key={player.id}>
              <ListItem
                alignItems="flex-start"
                sx={player.you ? style : undefined}
              >
                <ListItemAvatar>
                  <Avatar alt={player.name} src={player.img_url} />
                </ListItemAvatar>
                <ListItemText
                  primary={player.name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Total Distance
                      </Typography>
                      {player.total_distance}
                    </React.Fragment>
                  }
                />
                {player.direction == "UP" ? (
                  <ArrowCircleUp />
                ) : player.direction == "DOWN" ? (
                  <ArrowCircleDown />
                ) : undefined}
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          );
        })}
      </List>
    </div>
  );
};

export default LeadersBoard;
