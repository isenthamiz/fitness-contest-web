import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Cookies from "universal-cookie";
import AppContext from "../../store/context/app-context";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
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
};

const Button = styled.button`
  background: #ad508d;
  color: whitesmoke;
  font-size: 1em;
  margin: 1em;
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

const Settings = (props) => {
  const [loading, setLoading] = useState(false);
  const { setSettingsOpen, accesstoken, setAccessToken, setData } =
    useContext(AppContext);

  const handleClose = () => {
    setSettingsOpen(false);
  };

  useEffect(() => {
    console.log("ok");
    setAccessToken(new Cookies().get("access_token"));
  }, []);

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

    console.log(new Cookies().get("access_token"));
    setAccessToken(new Cookies().get("access_token"));
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {loading ? (
            <h3>Data is Loading ... </h3>
          ) : (
            <h3>Press Load Data Button to Load new Data</h3>
          )}
          <Button onClick={redirect} disabled={accesstoken ? true : false}>
            Authorize
          </Button>
          <Button onClick={load_data}>Load Data</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Settings;
