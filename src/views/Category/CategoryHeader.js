import { Search } from 'react-feather'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardText, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Button } from 'reactstrap'

const FaqFilter = ({ searchTerm, setSearchTerm, handleFilter }) => {
  const onChange = e => {
    if (handleFilter) {
      handleFilter(e)
    } else {
      setSearchTerm(e.target.value)
    }
  }

  return (
    <div id='knowledge-base-search'>
      <Card
        className='knowledge-base-bg'
        style={{
          backgroundImage: `url(${require('@src/assets/images/banner/banner.png').default})`
        }}
      >
        <CardBody className='text-center m-0'>
          <h2 className='text-primary'>WOW Categories</h2>
          <CardText className=''>
            Popular searches: <span className='font-weight-bolder'>Dance, Standup Comedy</span>
          </CardText>
          <Form className='kb-search-input' onSubmit={e => e.preventDefault()}>
            <InputGroup className='input-group-merge'>
              <InputGroupAddon addonType='prepend'>
                <InputGroupText>
                  <Search size={14} />
                </InputGroupText>
              </InputGroupAddon>
              <Input value={searchTerm} onChange={e => onChange(e)} placeholder='Find a Category...' />
            </InputGroup>
          </Form>
          <Button.Ripple className='mt-2' color='primary' outline tag={Link} to='/category/new' >
            <span className='d-sm-block'>Add New Category</span>
          </Button.Ripple>
        </CardBody>
      </Card>
    </div>
  )
}

export default FaqFilter
