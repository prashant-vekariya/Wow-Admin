import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// ** Store & Actions
import { getAllCategory, getCategoryDetail, deleteCategory } from './store/action'
import { useDispatch, useSelector } from 'react-redux'

import Avatar from '@components/avatar'
import dummyImg from '@src/assets/images/backgrounds/dummy-image.jpg'
import { Star } from 'react-feather'
import { MdEdit, MdDelete } from 'react-icons/md'
import CategoryHeader from './CategoryHeader'
import { Row, Col, Card, CardBody, CardImg, Button, Badge } from 'reactstrap'

import '@styles/base/pages/page-knowledge-base.scss'

const Category = () => {

  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.category)

  const [data, setData] = useState(null),
    [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    dispatch(getAllCategory())
  }, [store.allData.length])

  useEffect(() => {
    setData(store.allData)
  }, [store.allData !== data])

  const Content = ({ item }) => (
    <Col className='kb-search-content' key={item.id} md='4' sm='6'>
      <Card>
        <CardImg src={item.backgroundImage ? item.backgroundImage : dummyImg} alt=' ' top className="position-relative" style={{ height: '270px' }} />
        <Button.Ripple className="position-absolute" color='flat-primary'
          onClick={() => dispatch(getCategoryDetail(item._id))}
          tag={Link}
          to={`/category/${item._id}`}>
          <MdEdit size={26} />
        </Button.Ripple>
        <Button.Ripple className="position-absolute" style={{ right: 0 }} color='flat-danger'>
          <MdDelete className='text-danger' size={26} onClick={() => dispatch(deleteCategory(item._id))} />
        </Button.Ripple>
        <CardBody className='text-center'>
          <h4>
            {item.icon ? (<img
              className='user-avatar rounded mr-2 my-25 cursor-pointer'
              src={item.icon}
              alt='user profile avatar'
              height='100%'
              width='100%'
              style={{ maxWidth: '30px', maxHeight: '30px' }}
            />) : (<Avatar className='mr-2' color='light-info' icon={<Star size={14} />} />)
            }
            {/* <Avatar className='mr-2' color='light-info' icon={<Star size={14} />} /> */}
            {item.name}</h4>
          <p className='text-body mt-1 mb-0'>{item.description}</p>
        </CardBody>
      </Card>
    </Col>
  )

  const renderContent = () => {
    return data.map(item => {
      const titleCondition = item.name.toLowerCase().includes(searchTerm.toLowerCase())
      // descCondition = item.desc.toLowerCase().includes(searchTerm.toLowerCase())

      if (searchTerm.length < 1) {
        return <Content key={item._id} item={item} />
      } else if (titleCondition) {
        return <Content key={item._id} item={item} />
      } else {
        return null
      }
      // if (searchTerm.length < 1) {
      //   return <Content key={item.id} item={item} />
      // } else if (titleCondition || descCondition) {
      //   return <Content key={item.id} item={item} />
      // } else {
      //   return null
      // }
    })
  }

  return (
    <Fragment>
      <CategoryHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {data !== null ? (
        <div id='knowledge-base-content'>
          <Row className='kb-search-content-info match-height'>{renderContent()}</Row>
        </div>
      ) : null}
    </Fragment>
  )
}

export default Category
