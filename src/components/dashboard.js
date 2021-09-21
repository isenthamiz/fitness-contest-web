import React from "react";
import Button from "./button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
  margin: 0em 10em;
`;

const Dashboard = function () {
  return (
    <Wrapper>
      <Button>
        <Link to="/running">Running</Link>
      </Button>
      <Button>
        <Link to="/cycling">Cycling</Link>
      </Button>
      <Button>Swmming</Button>
      <Button>Trecking</Button>
    </Wrapper>
  );
};

export default Dashboard;
