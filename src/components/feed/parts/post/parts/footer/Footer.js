import React, {useState, useCallback}from 'react';
import styled from 'styled-components'
import Comment from "./parts/comment/Comment"
import PostInfo from "./parts/postInfo/PostInfo"

const Footer = ({author}) => {
    const [commentList, setCommentList] = useState([])

    const addComment = useCallback((input) => {
        setCommentList([...commentList, input])
    }, [commentList])

    return(
        <PostFooter>
            <PostInfo author={author} commentList={commentList}/>
            <Comment addComment={addComment}/>
        </PostFooter>
    );
}

export default Footer

const PostFooter = styled.div`
    padding-top: 18px;
`