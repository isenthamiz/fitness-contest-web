import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AppContext from "../store/context/app-context";

import HistoryTable from "./history-table";
import LeadersBoard from "./leaders-board";

const board_data = [
  {
    id: 1,
    name: "Clark Kent",
    img_url: "/static/images/avatar/1.jpg",
    total_distance: "500km",
  },
  {
    id: 2,
    name: "Bruce Wayne",
    img_url: "/static/images/avatar/2.jpg",
    total_distance: "50km",
    direction: "DOWN",
  },
  {
    id: 3,
    name: "Senthamiz Kumaran",
    img_url: "/static/images/avatar/3.jpg",
    total_distance: "49km",
    you: true,
    direction: "UP",
  },
  {
    id: 4,
    name: "Yagnesh Kumar",
    img_url: "/static/images/avatar/4.jpg",
    total_distance: "40km",
  },
  {
    id: 5,
    name: "Annamalai Ponnaiyah",
    img_url: "/static/images/avatar/5.jpg",
    total_distance: "30km",
    direction: "DOWN",
  },
];

const Wrapper = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TableContainer = styled.section`
  width: 70%;
  margin: 1rem;
`;

const BoardContainer = styled.section`
  width: 20%;
  margin: 1rem;
`;

const Cycling = () => {
  const { data } = useContext(AppContext);

  return (
    <Wrapper>
      <TableContainer>
        <HistoryTable data={data} />
      </TableContainer>
      <BoardContainer>
        <LeadersBoard data={board_data} />
      </BoardContainer>
    </Wrapper>
  );
};

export default Cycling;
