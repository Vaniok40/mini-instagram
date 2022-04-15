import React from 'react';
import styled from 'styled-components'

const Image = ({image}) => {
    return(
        <div> 
            <PostImage src={image} alt="post-image" />
        </div>
    );
}

export default Image;

const PostImage = styled.img`
    width: 100%;
    object-fit: contain;
`