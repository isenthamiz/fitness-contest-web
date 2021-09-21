import React from "react";
import Button from "./button";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import {
  DirectionsRun,
  DirectionsBike,
  Pool,
  NaturePeople,
} from "@mui/icons-material";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
  margin: 0em 10em;
`;

const style = {
  "font-size": "8rem",
};

const Dashboard = function () {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push("/cycling");
  };

  return (
    <Wrapper>
      <Button>
        <DirectionsRun sx={style} />
      </Button>
      <Button buttonClick={handleButtonClick}>
        <DirectionsBike sx={style} />
      </Button>
      <Button>
        <Pool sx={style} />
      </Button>
      <Button>
        <NaturePeople sx={style} />
      </Button>
    </Wrapper>
  );
};

export default Dashboard;
