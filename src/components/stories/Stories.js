import React from 'react';
import styled from 'styled-components'
import Story from './parts/story/Story'
import Slider from "react-slick"

const Stories = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
        arrows: true,
        prevArrow: <span className="slick-prev"><svg fill="gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1792 1792"><path d="M1037 1395l102-102q19-19 19-45t-19-45l-307-307 307-307q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-454 454q-19 19-19 45t19 45l454 454q19 19 45 19t45-19zm627-499q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg></span>,
        nextArrow: <span className="slick-next"><svg fill="gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1792 1792"><path d="M845 1395l454-454q19-19 19-45t-19-45l-454-454q-19-19-45-19t-45 19l-102 102q-19 19-19 45t19 45l307 307-307 307q-19 19-19 45t19 45l102 102q19 19 45 19t45-19zm819-499q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/></svg></span>,
    }
    return(
        <Container {...settings}>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
        </Container>
    );
}

export default Stories;

const Container = styled(Slider)`
    border: 1px solid rgba(219,219,219);
    background: #fff;
    padding: 16px;
    overflow: hidden;
    position: relative;
    .slick-track{
        display: flex;
    }
    .slick-prev,.slick-next{
       z-index: 1;
       position: absolute;
       top: calc(50% - 24px / 2); 
       &:hover{
            cursor:pointer;
       }
    }

    .slick-disabled{
        display: none!important;
    }

    .slick-prev{
        left: 24px;
    }
    .slick-next{
        right: 24px;
    }
`