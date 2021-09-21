import React, { useContext } from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppContext from "../store/context/app-context";

const Wrapper = styled.section`
  height: 70px;
  width: 1vw%;
  display: flex;
  flex-direction: row;
  padding: 1em;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background: #555;
  box-shadow: 0 0.3rem rgba(0, 0, 0, 0.2);
`;

const LoginWrapper = styled.section`
  height: 50px;
`;

const LoginButton = styled.button`
  border: 1px solid #8dad50;
  background-color: #555;
  font-size: 1rem;
  width: 100px;
  height: 50px;
  color: #fff;

  &:hover {
    background-color: #8dad50;
  }
`;

const Appname = styled.label`
  font-size: 2rem;
  color: #fff;
`;

const Header = function () {
  const { setDrawerOpen } = useContext(AppContext);

  return (
    <Wrapper>
      <IconButton
        sx={{ background: "#8DAD50", "&:hover": { background: "#AD508D" } }}
        onClick={() => setDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Appname>Fitness Contest</Appname>
      <LoginWrapper>
        <LoginButton>Login</LoginButton>
      </LoginWrapper>
    </Wrapper>
  );
};

export default Header;
