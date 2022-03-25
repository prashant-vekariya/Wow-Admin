import React, { useState, useEffect } from 'react'

import Clip from './Clip'

// ** Store & Actions
import { deleteReportedContent, getReportedContentList } from './store/action'
import { useDispatch, useSelector } from 'react-redux'
import InfiniteScroll from "react-infinite-scroll-component"
import { Table, Badge, Card, Input, Row, Col, Label, CustomInput } from 'reactstrap'

const ReportedContent = () => {

    // ** Store Vars
    const dispatch = useDispatch()
    const store = useSelector(state => state.reported)

    const [clips, setClips] = useState([]),
        [page, setpage] = useState(1),
        [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        dispatch(getReportedContentList(page))
    }, [page, store.allReportedContent.length])

    useEffect(() => {
        if (store.allReportedContent && store.total !== clips.length) {
            setClips(store.allReportedContent)
        }
        if (clips.length <= 15) {
            setHasMore(false)
        }
    }, [store.allReportedContent.length])

    const fetchMoreData = () => {
        if (page === store.pages || clips.length <= 15) {
            setHasMore(false)
        } else {
            setpage(parseInt(page + 1))
        }
    }

    return (
        <InfiniteScroll
            dataLength={clips.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4 style={{ textAlign: "center" }}><div className='loading'>
                <div className='effect-1 effects'></div>
                <div className='effect-2 effects'></div>
                <div className='effect-3 effects'></div>
            </div></h4>}
            scrollableTarget="scrollableDiv"
            style={{ overflowX: 'hidden' }}
        >
            <Row className='match-height'>
                {clips.map(data => <Clip data={data} key={data._id} deleter={data => {
                    dispatch(deleteReportedContent(data))
                    dispatch(getReportedContentList(page))
                }} />)}
            </Row>
        </InfiniteScroll>
    )
}


export default ReportedContent