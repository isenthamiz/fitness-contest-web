import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Cookies from "universal-cookie";
import AppContext from "../../store/context/app-context";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
const request = require("request");

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#8DAD50",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  "flex-direction": "column",
};

const RowContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CloseRowContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background: #ad508d;
  color: whitesmoke;
  font-size: 1em;
  margin: 1em;
  width: 100px;
  padding: 0.5em 1em;
  border: 2px solid #ad508d;
  border-radius: 3px;
  box-shadow: 0.2rem 0.3rem 0.5rem rgba(0, 0, 0, 0.5);

  ${(props) =>
    props.disabled &&
    css`
      background: rgba(1, 1, 1, 0.5);
      color: gray;
      border: none;
      /* box-shadow: none; */
      pointer-events: none;
    `}

  &:hover {
    background: #555;
    border-color: #555;
  }
`;

const CloseButton = styled(Button)`
  background: #555;
  border-color: #555;

  &:hover {
    background: #df1f1f;
    border-color: #df1f1f;
  }
`;

const Settings = (props) => {
  const [loading, setLoading] = useState(false);
  const { setSettingsOpen, accesstoken, setAccessToken, setData } =
    useContext(AppContext);

  const handleClose = () => {
    setSettingsOpen(false);
  };

  const onFocus = () => {
    console.log("tab is on focus");
    setAccessToken(new Cookies().get("access_token"));
  };

  const redirect = function () {
    window.open("http://localhost:9000/oauth/redirect");
  };

  const load_data = function () {
    setLoading(true);
    request(
      {
        method: "GET",
        uri: "https://www.strava.com/api/v3/athlete/activities",
        headers: {
          Authorization: `Bearer ${accesstoken}`,
        },
      },
      (error, response, body) => {
        if (error) {
          console.log(error);
        }
        setData(JSON.parse(body));
        console.log(JSON.parse(body));
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    window.addEventListener("focus", onFocus);

    return () => {
      window.removeEventListener("focus", onFocus);
    };
  });

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {loading ? <LinearProgress /> : undefined}
          <RowContainer>
            <label>Authorize with Strava Account</label>
            <Button onClick={redirect} disabled={accesstoken ? true : false}>
              Authorize
            </Button>
          </RowContainer>
          <RowContainer>
            <label>Load your data</label>
            <Button onClick={load_data} disabled={accesstoken ? false : true}>
              Load
            </Button>
          </RowContainer>
          <CloseRowContainer>
            <CloseButton onClick={handleClose}>Close</CloseButton>
          </CloseRowContainer>
        </Box>
      </Modal>
    </div>
  );
};

export default Settings;
