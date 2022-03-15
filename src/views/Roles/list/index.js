import { Fragment, useState, useEffect } from 'react'
// ** User List Component
import Table from './Table'
// ** Store & Actions
import { getAllData, getData } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'

// ** Styles
import '@styles/react/apps/app-users.scss'

const UsersList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllData())
  }, [])


  return (
    <div className='app-user-list'>
      {/* <Table /> */}
    </div>
  )
}

export default UsersList
