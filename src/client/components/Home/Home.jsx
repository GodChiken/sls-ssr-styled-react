import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2rem;
  color: darkblue;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 1rem;
  background: skyblue;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Home = props => {
  const { dispatch } = props;

  return (
    <Container>
      <Title>You are Logged In! Welcome!</Title>
      <Button onClick={() => dispatch({ type: "LOGOUT" })}>LOGOUT</Button>
    </Container>
  );
};

Home.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default Home;
