import React from 'react';
import { images } from '../../../../assets/img/Images';
import styled from 'styled-components'

const Logo = () => {
    return(
        <a href="/">
            <Image src={images.navbar.logo} alt="" />
        </a>
    );
}

export default Logo

const Image = styled.img`
    height: 29px;
    width: 103px;
`

