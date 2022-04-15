import React from 'react';
import styled from 'styled-components'
import Logo from './parts/logo/Logo';
import Nav from './parts/nav/Nav';
import Search from './parts/search/Search';

const Navbar = () => {
    return(
        <Container>
            <ContentContainer>
                <Logo/>
                <Search/>
                <Nav/>
            </ContentContainer>
        </Container>
    );
}

export default Navbar

const Container = styled.header`
  height: 54px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
  border-bottom: 1px solid rgba(219,219,219);
  background: #fff;
`

const ContentContainer = styled.div`
  width: 975px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`