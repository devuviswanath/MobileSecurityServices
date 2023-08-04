import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
export default function Welcome() {
  const user = useSelector((state) => state?.auth?.user);
  let userName = user?.fullname;

  return (
    <Container1>
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container1>
  );
}

const Container1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
