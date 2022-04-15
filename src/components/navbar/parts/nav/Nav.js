import React, {useCallback} from 'react';
import styled from 'styled-components'
import { images } from '../../../../assets/img/Images';
import Icon from './parts/Icon';

const Nav = () => {
let icons = [
    {
        key: 1,
        href: "/",
        src: images.navbar.home,
        alt: ""
    },
    {
        key: 2,
        href: "/messages",
        src: images.navbar.messenger,
        alt: ""
    },
    {
        key: 3,
        href: "/add",
        src: images.navbar.more,
        alt: ""
    },
    {
        key: 4,
        href: "/compass",
        src: images.navbar.compass,
        alt: ""
    },
    {
        key: 5,
        href: "/notifications",
        src: images.navbar.like,
        alt: ""
    },
    {
        key: 6,
        href: "/profile",
        src: images.navbar.user,
        alt: ""
    }
] 

const renderIcons = useCallback((item)=>{
    return(
        <Icon key={item.key} href={item.href} alt={item.alt} src={item.src}/>
    )
}, [])

    return(
        <Container>
            {icons.map(renderIcons)}
        </Container>
    );
}

export default Nav;

const Container = styled.div`
    display: flex;
    >a:not(:first-child){
        margin-left: 22px;
    }
`