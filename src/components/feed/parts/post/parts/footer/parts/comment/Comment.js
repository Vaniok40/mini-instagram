import React, {useState, useCallback} from 'react';
import styled from 'styled-components'

const Comment = ({addComment}) => {
    const [comment, setComment] = useState("")
    
    const changeComment = useCallback((event) => {
        setComment(event.target.value)
    }, [])

    return(
        <CommentContainer>
            <CommentInput onChange={changeComment} value={comment} placeholder="Type a comment..." type="text" />
            <PostCommentButton onClick={() => {addComment(comment); setComment("")}} comment={comment}>Post</PostCommentButton>
        </CommentContainer>    
    );
}

export default Comment

const CommentContainer = styled.div`
    border-top: 1px solid rgb(239,239,239);
    padding: 18px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CommentInput = styled.textarea`
    border: none;
    height: 18px;
    line-height: 18px;
    resize: none;
    width: 100%;
    max-height: 100%;
`

const PostCommentButton = styled.span`
    color: #0095f6;
    opacity: ${({comment}) => comment?"1":"0.5"};
    font-size: 14px;
    &:hover {
        cursor: pointer;
    }
`