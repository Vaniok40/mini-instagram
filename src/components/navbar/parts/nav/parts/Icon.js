import React from 'react';
import styled from 'styled-components'

const Icon = ({href, alt, src}) =>{
    return (
        <a href={href}>
            <Image src={src} alt={alt} />
        </a>
    );
}

export default Icon;

const Image = styled.img`
     width: 22px;
`