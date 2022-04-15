import React from 'react';
import styled from 'styled-components'

const Header = ({author, image}) => {
    return(
        <PostHeader>
            <Profile>
                <ProfileImage src={image} alt="profile-image"/>
                <ProfileName>
                    {author}
                </ProfileName>
            </Profile>
        </PostHeader>
    );
}

export default Header;


const PostHeader = styled.header`
    padding: 14px 16px;
`

const Profile = styled.div`
    display: flex;
    align-items: center;
`
const ProfileImage = styled.img`
    border-radius: 100%;
    width: 32px;
    height: 32px;
    object-fit: cover;
`
const ProfileName = styled.div`
    margin-left: 10px;
    font-size: 14px;
    font-weight: 500;
`

