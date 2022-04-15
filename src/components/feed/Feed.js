import React, {useEffect, useCallback, useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styled from 'styled-components'
import Post from './parts/post/Post';

const Feed = () => {
    const axios = require('axios').default;
    const baseURL = "https://picsum.photos/v2/list";

    const [data, setData] = useState([])

    const [count, setCount] = useState({
        prev: 0,
        next: 3,
      })
      const [hasMore, setHasMore] = useState(true);
      const [current, setCurrent] = useState(data.slice(count.prev, count.next))
      
      const getMoreData = () => {
        if (current.length === data.length) {
          setHasMore(false);
          return;
        }
        setTimeout(() => {
            setCurrent(current.concat(data.slice(count.prev + 10, count.next + 10)))
          }, 2000)
          setCount((prevState) => ({ prev: prevState.prev + 10, next: prevState.next + 10 }))
    }

    const request = useCallback(async () => {
        await axios.get(baseURL)
        .then((response) => {
            setData([...response.data])
            setCurrent(response.data.slice(count.prev, count.next))
        })
        .catch(error => {
            console.log(error)
        });
    }, [axios])

    useEffect(() => {
        request()
    }, [request]);

    const renderPosts = useCallback((item) => {
        return(
            <Post key={item.id} author={item.author} image={item.download_url}/>
        )
    }, [])

    return(
        <InfiniteScrollWrapper
        dataLength={data.length}
        next={getMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        >
            {current.map(renderPosts)}
        </InfiniteScrollWrapper>
    );
}

export default Feed

const InfiniteScrollWrapper = styled(InfiniteScroll)`
    margin: 25px 0;
    >div:not(:last-child){
        margin-bottom: 26px;
    }
`