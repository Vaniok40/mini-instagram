import React from "react"
import styled from 'styled-components'
import {images} from "../../../../assets/img/Images"

const MainProfile = () =>{
  return (
    <Container>
        <MainProfileImage src={images.stories.storyPicture} alt="profile-image" />
        <MainProfileName>
            Profile name
        </MainProfileName>
        <SwitchAccount href="#">
            Switch
        </SwitchAccount>
    </Container>
  );
}

export default MainProfile;

const Container = styled.div`
    padding-bottom: 10px;
    padding-top: 18px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const MainProfileImage = styled.img`
    border-radius: 100%;
    width: 56px;
    height: 56px;
`

const MainProfileName = styled.div`
    margin-left: 18px;
`

const SwitchAccount = styled.a`
    color: #0095f6;
    margin-left: 34px;
`