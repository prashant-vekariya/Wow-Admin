import { Fragment, useState, useEffect } from 'react'
import Faqs from './Faqs'
// ** Store & Actions
import { getAllFaq, getCategoryDetail } from './store/action'
import { useDispatch, useSelector } from 'react-redux'

import '@styles/base/pages/page-faq.scss'

const Faq = () => {

  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.faq)

  const [data, setData] = useState([]),
    [searchTerm, setSearchTerm] = useState('')


  useEffect(() => {
    dispatch(getAllFaq())
  }, [dispatch])

  useEffect(() => {
    setData(store.allFaqData)
  }, [store.allFaqData === data])

  return (
    <Fragment>
      {(store.allFaqData === data && data.length > 0) ? <Faqs data={data} searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> : null}
    </Fragment>
  )
}

export default Faq
