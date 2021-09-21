import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #fff;
`;

const Caption = styled.p`
    margin: 1rem;
    font-size: 1rem;
    color: #fff;
`;

const Footer = function() {
    return (
        <Wrapper>
            <img src="./stravalogo.png" alt="Strava" width="40" height="40"></img> <Caption>Thanks to Strava.</Caption>
        </Wrapper>
    )
}


export default Footer;