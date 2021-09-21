import styled, { css } from "styled-components";
import React, { useState } from "react";
import AppContext from "./store/context/app-context";

import Dashboard from "./components/dashboard";
import Cycling from "./components/cycling";
import Header from "./components/header";
import Footer from "./components/footer";
import SideBar from "./components/sidebar";
import Settings from "./components/modals/settings";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 95vh;
  ${(props) =>
    props.open &&
    css`
      width: calc(100%-240px);
      margin-left: 240px;
    `};
`;

function App() {
  const [draweropen, setDrawerOpen] = useState(false);
  const [settingsopen, setSettingsOpen] = useState(false);
  const [accesstoken, setAccessToken] = useState(undefined);
  const [refreshtoken, setRefreshToken] = useState(undefined);
  const [data, setData] = useState([]);

  return (
    <AppContext.Provider
      value={{
        draweropen,
        setDrawerOpen,
        settingsopen,
        setSettingsOpen,
        accesstoken,
        setAccessToken,
        refreshtoken,
        setRefreshToken,
        data,
        setData,
      }}
    >
      <BrowserRouter>
        <SideBar open={draweropen} />
        <Settings open={settingsopen} />
        <Wrapper open={draweropen}>
          <Header />
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/cycling" component={Cycling} />
          </Switch>

          <Footer />
        </Wrapper>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
