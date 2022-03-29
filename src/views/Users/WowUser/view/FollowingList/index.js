// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import BreadCrumbs from '@components/breadcrumbs'
import { columns } from './columns'

// ** Store & Actions
import { getWowUserAllFollowingData, getWowUsersFollowingList } from '../../store/action'
import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Card, CardHeader, CardTitle, CardBody, Input, Row, Col, Label, CustomInput, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** Table Header
const CustomHeader = ({ handlePerPage, rowsPerPage, handleFilter, searchTerm }) => {
    return (
        <div className='invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75'>
            <Row>
                <Col xl='6' className='d-flex align-items-center p-0'>
                    <div className='d-flex align-items-center w-100'>
                        <Label for='rows-per-page'>Show</Label>
                        <CustomInput
                            className='form-control mx-50'
                            type='select'
                            id='rows-per-page'
                            value={rowsPerPage}
                            onChange={handlePerPage}
                            style={{
                                width: '5rem',
                                padding: '0 0.8rem',
                                backgroundPosition: 'calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0'
                            }}
                        >
                            <option value='10'>10</option>
                            <option value='25'>25</option>
                            <option value='50'>50</option>
                        </CustomInput>
                        <Label for='rows-per-page'>Entries</Label>
                    </div>
                </Col>
                <Col
                    xl='6'
                    className='d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1'
                >
                    <div className='d-flex align-items-center mb-sm-0 mb-1 mr-1'>
                        <Label className='mb-0' for='search-invoice'>
                            Search:
                        </Label>
                        <Input
                            id='search-invoice'
                            className='ml-50 w-100'
                            type='text'
                            value={searchTerm}
                            onChange={e => handleFilter(e.target.value)}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

const UsersList = () => {

    // ** Store Vars
    const dispatch = useDispatch()
    const store = useSelector(state => state.wowusers),
        { id } = useParams()

    // ** States
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    // ** Get data on mount
    useEffect(() => {
        dispatch(
            getWowUsersFollowingList({
                page: currentPage,
                limit: rowsPerPage,
                id
            })
        )
        dispatch(getWowUserAllFollowingData(id))
    }, [dispatch])

    // ** Function in get data on page change
    const handlePagination = page => {
        dispatch(
            getWowUsersFollowingList({
                page: page.selected + 1,
                limit: rowsPerPage,
                id
            })
        )
        setCurrentPage(page.selected + 1)
    }

    // ** Function in get data on rows per page
    const handlePerPage = e => {
        const value = parseInt(e.currentTarget.value)
        dispatch(
            getWowUsersFollowingList({
                page: currentPage,
                limit: value,
                id
            })
        )
        setRowsPerPage(value)
    }

    // ** Function in get data on search query change
    const handleFilter = val => {
        setSearchTerm(val)
    }

    // ** Custom Pagination
    const CustomPagination = () => {
        const count = Number(Math.ceil(store.totalfollowing / rowsPerPage))

        return (
            <ReactPaginate
                previousLabel={''}
                nextLabel={''}
                pageCount={count || 1}
                activeClassName='active'
                forcePage={currentPage !== 0 ? currentPage - 1 : 0}
                onPageChange={page => handlePagination(page)}
                pageClassName={'page-item'}
                nextLinkClassName={'page-link'}
                nextClassName={'page-item next'}
                previousClassName={'page-item prev'}
                previousLinkClassName={'page-link'}
                pageLinkClassName={'page-link'}
                containerClassName={'pagination react-paginate justify-content-end my-2 pr-1'}
            />
        )
    }

    // ** Table data to render
    const dataToRender = () => {

        if (searchTerm !== '' && store.allfollowinglist !== null) {
            const queryLowered = searchTerm.toLowerCase()
            const filteredData = store.allfollowinglist.filter(user => (
                (user.display_name && user.display_name.toLowerCase().includes(queryLowered)) ||
                (user.email_id && user.email_id.toLowerCase().includes(queryLowered)) ||
                (user.user_name && user.user_name.toLowerCase().includes(queryLowered))))
            return filteredData
        } else if (store.followinglist.length > 0) {
            return store.followinglist
        } else if (store.followinglist.length === 0) {
            return []
        }
    }

    return (
        <Fragment>
            <BreadCrumbs breadCrumbTitle='Wow Users' breadCrumbParent='User Details' breadCrumbActive='User Following' />
            <Card>
                <DataTable
                    noHeader
                    pagination
                    subHeader
                    responsive
                    paginationServer
                    columns={columns}
                    sortIcon={<ChevronDown />}
                    className='react-dataTable'
                    paginationComponent={CustomPagination}
                    data={dataToRender()}
                    subHeaderComponent={
                        <CustomHeader
                            handlePerPage={handlePerPage}
                            rowsPerPage={rowsPerPage}
                            searchTerm={searchTerm}
                            handleFilter={handleFilter}
                        />
                    }
                />
            </Card>

        </Fragment>
    )
}

export default UsersList
