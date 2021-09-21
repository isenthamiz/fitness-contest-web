import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    0% {
        opacity: 0.5;
    }

    100% {
        
        opacity: 1;
    }
`;

const RoundedButton = styled.button`
  background-color: #ad508d;
  border: 2px solid #ad508d;
  border-radius: 15rem;
  color: #fff;
  height: 15rem;
  width: 15rem;
  font-size: 1em;
  margin: 1em;
  padding: 1em;

  &:hover {
    animation: 2s ${fadeIn} ease-in;
    box-shadow: 0.4rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2);
  }
`;

const Button = function (props) {
  return (
    <RoundedButton onClick={props.buttonClick}>{props.children}</RoundedButton>
  );
};

export default Button;
