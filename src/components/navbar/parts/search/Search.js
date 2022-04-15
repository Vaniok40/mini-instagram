import React from 'react';
import styled from 'styled-components'


const Search = () => {
    return(
        <Find type="text" placeholder="Search"/>
    );
}

export default Search

const Find = styled.input`
    font-size: 16px;
    background: rgba(250,250,250,1);
    border: solid 1px rgba(219,219,219,1);
    border-radius: 3px;
    padding: 3px 12px;
    &:focus{
        outline: none;
    }
`