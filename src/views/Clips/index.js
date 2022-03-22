import React, { useState, useEffect } from 'react'
import { Button, Card, CardTitle, CardBody, CardText, CardSubtitle, CardLink, CardImg, Row, Col } from 'reactstrap'
// ** Store & Actions
import { getAllClips } from './store/action'
import { useDispatch, useSelector } from 'react-redux'
import InfiniteScroll from "react-infinite-scroll-component"

import Clip from './Clip'


const VideoClips = () => {

    // ** Store Vars
    const dispatch = useDispatch()
    const store = useSelector(state => state.clips)

    const [clips, setClips] = useState([]),
        [page, setpage] = useState(1),
        [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        dispatch(getAllClips(page))
    }, [page])

    useEffect(() => {
        if (store.allClips && store.totalClips !== clips.length) {
            setClips(store.allClips)
        }
    }, [store.allClips])

    const fetchMoreData = () => {
        if (page === store.pages) {
            setHasMore(false)
        } else {
            setpage(parseInt(page + 1))
        }
    }

    return (
        <>
            {/* <h6 className='text-muted my-2'>Header and footer</h6> */}
            <InfiniteScroll
                dataLength={clips.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4 style={{ textAlign: "center" }}><div className='loading'>
                    <div className='effect-1 effects'></div>
                    <div className='effect-2 effects'></div>
                    <div className='effect-3 effects'></div>
                </div></h4>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>No more Clips..!</b>
                    </p>
                }
            >
                <Row className='match-height'>
                    {clips.map(data => <Clip data={data} key={data._id} />)}
                </Row>
            </InfiniteScroll>
        </>
    )
}

export default VideoClips