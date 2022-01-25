import React, {useState}  from "react";
import styled from "styled-components";
import RegisterPage from "./layouts/register";
import './app.css'


function App() {
  return (
    <AppWrapper>
        <RegisterPage/>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
    width: 100%;
    height: 100vh;
`
