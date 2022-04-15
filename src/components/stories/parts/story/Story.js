import React, {useState, useCallback} from 'react';
import styled from 'styled-components'
import { images } from '../../../../assets/img/Images';


const Story = () => {
    const [seen, setSeen] = useState(false);

    const changeStateOfSeen = useCallback(() => {
        setSeen(true)
    }, [])

    return(
        <Container onClick={changeStateOfSeen}>
            <PersonImage seen={seen} src={images.stories.storyPicture} alt=""/>
            <PersonName>
                John
            </PersonName>
        </Container>
    );
}

export default Story;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover{
        cursor:pointer;
    }
`

const PersonImage = styled.img`
    width: 56px;
    height: 56px;
    padding: 3px;
    border-radius: 100%;
    border: 2px solid ${({seen}) => seen?"#e4e4e4":"red"}
`    

const PersonName = styled.div`
    font-size: 12px;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
`