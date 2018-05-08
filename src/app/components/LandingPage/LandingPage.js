import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2rem;
  color: darkblue;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 1rem;
  background: yellowgreen;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LandingPage = props => {
  const { dispatch } = props;

  return (
    <Container>
      <Title>You aren't Logged In!</Title>
      <Button onClick={() => dispatch({ type: "LOGIN" })}>LOGIN</Button>
    </Container>
  );
};

export default LandingPage;
