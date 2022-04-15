import React from 'react';
import Navbar from './navbar/Navbar';
import styled from 'styled-components'
import Feed from './feed/Feed';
import Stories from './stories/Stories';
import Sidebar from './sidebar/Sidebar';

const Main = () => {
    return(
        <div>
            <Navbar/>
            <Body>
                <BodyContent>
                    <div>
                        <Stories/>
                        <Feed/>
                    </div>
                    <Sidebar/>
                </BodyContent>
            </Body>
        </div>
    );
}

export default Main

const Body = styled.section`
    background: #fafafa;
    width: 100%;
    height: 100%;
`

const BodyContent = styled.div`
    width: 975px;
    margin: 0 auto;
    padding-top: 84px;
    display: grid;
    grid-template-columns: 65% 1fr;
    grid-column-gap: 27px;
`
