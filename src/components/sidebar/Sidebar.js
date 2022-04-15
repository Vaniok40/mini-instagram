import React from "react"
import styled from 'styled-components'
import MainProfile from "./parts/mainProfile/MainProfile";

const Sidebar = () =>{
  return (
    <Container>
        <MainProfile/>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`

`