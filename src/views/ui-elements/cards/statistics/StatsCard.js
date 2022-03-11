import classnames from 'classnames'
import Avatar from '@components/avatar'
import { TrendingUp, User, Box, DollarSign } from 'react-feather'
import { BiDownload } from 'react-icons/bi'
import { MdOutlineStarRate } from 'react-icons/md'
import { FaRegTrashAlt } from 'react-icons/fa'
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col, Media, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const StatsCard = ({ cols }) => {
  const data = [
    {
      title: '270k',
      subtitle: 'App installs',
      info: '500K Installs till date',
      color: 'light-primary',
      icon: <BiDownload size={24} />
    },
    {
      title: '8.549k',
      subtitle: 'DAU',
      color: 'light-info',
      icon: <User size={24} />
    },
    {
      title: '1.423k',
      subtitle: 'MAU',
      color: 'light-danger',
      icon: <Box size={24} />
    },
    {
      title: '945',
      subtitle: 'Total Uninstall',
      info: '64K UnInstalls till date',
      color: 'light-success',
      icon: <FaRegTrashAlt size={24} />
    },
    {
      title: '10%',
      subtitle: 'Churn Rate',
      color: 'light-warning',
      icon: <MdOutlineStarRate size={35} />
    }
  ]

  const renderData = () => {
    return data.map((item, index) => {
      const margin = Object.keys(cols)
      return (
        <Col
          key={index}
          // {...cols}
          className={classnames({
            [`mb-2 mb-${margin[0]}-0`]: index !== data.length - 1
          })}
        >
          <Media>
            <Avatar color={item.color} icon={item.icon} className='mr-2' />
            <Media className='my-auto' body>
              <h4 className='font-weight-bolder mb-0'>{item.title}</h4>
              <CardText className='font-small-3 mb-0'>{item.subtitle}</CardText>
              <CardText className='font-small-1 mb-0'>{item.info}</CardText>
            </Media>
          </Media>
        </Col>
      )
    })
  }

  return (
    <Card className='card-statistics'>
      <CardHeader>
        {/* <CardTitle tag='h4'>Statistics</CardTitle> */}
        <h3>Statistics</h3>

        <CardText className='card-text font-small-2 mr-25 mb-0'>
          <UncontrolledButtonDropdown>
            <DropdownToggle className='grey-bgcolor br-20 text-dark' color='flat-secondary' caret>
              Today
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href='/' tag='a'>Option 1</DropdownItem>
              <DropdownItem href='/' tag='a'>Option 2</DropdownItem>
              <DropdownItem href='/' tag='a'>Option 3</DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown></CardText>
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default StatsCard
