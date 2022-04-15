import React from 'react';
import styled from 'styled-components'
import Footer from './parts/footer/Footer';
import Header from './parts/header/Header';
import Image from './parts/image/Image';

const Post = ({author, image}) => {
    return(
        <PostContainer>
            <Header author={author} image={image}/>
            <Image image={image} />
            <Footer author={author}/>
        </PostContainer>
    );
}

export default Post;

const PostContainer = styled.div`
    border: 1px solid rgba(219,219,219);
    background: #fff;
`
