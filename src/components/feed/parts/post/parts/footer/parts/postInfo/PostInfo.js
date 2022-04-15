import React, {useState, useCallback} from 'react';
import styled from 'styled-components'

const PostInfo = ({author , commentList}) => {
    const [commentsCollapseState, setCommentsCollapseState] = useState(false)

    const renderComments = useCallback((item, index) => {
        return(
                <OneComment key={index}>
                    <b>{author}:</b>&nbsp;{item}
                </OneComment>
        )
    }, [author])

    const collapseComments = useCallback(() => {
        setCommentsCollapseState(true)
    }, [])

    return(
        <InfoContainer>
            {commentList.length < 3 || commentsCollapseState ?(commentList.map(renderComments).reverse()):(<ShowAllComments onClick={collapseComments}>Show all comments</ShowAllComments>)}
        </InfoContainer>
    );
}

export default PostInfo

const InfoContainer = styled.div`
    padding: 0 16px 16px;
    >div:not(:last-child){
        margin-bottom: 5px;
    }
`

const OneComment = styled.div`
    font-size: 14px;
`

const ShowAllComments = styled.div`
    color: #8e8e8e;
    font-size: 14px;
    &:hover{
        cursor: pointer;
    }
`