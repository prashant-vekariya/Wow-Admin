// ** React Imports
import { useState } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components
import Proptypes from 'prop-types'
import classnames from 'classnames'
import { ReactSortable } from 'react-sortablejs'
import { ChevronDown, ChevronUp } from 'react-feather'
import { Collapse, Card, CardHeader, CardBody, CardTitle, Badge } from 'reactstrap'

const AppCollapse = props => {
  // ** Props
  const { data, type, accordion, active, toggle, titleKey, contentKey, className, editq, deleteq } = props

  /**
   ** If accordion is true then return only one active index else return an Array
   */
  const defaultActive = () => {
    if (accordion) {
      return active
    } else {
      return [...active]
    }
  }

  // ** State
  const [openCollapse, setOpenCollapse] = useState(defaultActive())

  // ** Function to handle Collapse Toggle
  const handleCollapseToggle = id => {
    if (accordion) {
      if (id === openCollapse) {
        setOpenCollapse(null)
      } else {
        setOpenCollapse(id)
      }
    } else {
      const arr = openCollapse,
        index = arr.indexOf(id)
      if (arr.includes(id)) {
        arr.splice(index, 1)
        setOpenCollapse([...arr])
      } else {
        arr.push(id)
        setOpenCollapse([...arr])
      }
    }
  }

  const [listArr, setListArr] = useState(data)


  // ** Function to render collapse
  const renderData = () => {
    return listArr.map((item, index) => {
      const title = titleKey ? item[titleKey] : item.question,
        content = contentKey ? item[contentKey] : item.answer

      return (
        <Card
          className={classnames('app-collapse', {
            [item.className]: item.className,
            open: accordion ? openCollapse === index : openCollapse.includes(index) && type === 'shadow'
          })}
          key={index}
        >
          <CardHeader
            className={classnames('align-items-center', {
              collapsed: accordion ? openCollapse !== index : !openCollapse.includes(index)
            })}
            /*eslint-disable */
            {...(toggle === 'hover'
              ? {
                onMouseEnter: () => handleCollapseToggle(index)
              }
              : {
                onClick: () => handleCollapseToggle(index)
              })}
          /*eslint-enable */
          >
            <CardTitle className='collapse-title'>{title}</CardTitle>
            <ChevronDown size={14} />
          </CardHeader>
          <Collapse isOpen={accordion ? openCollapse === index : openCollapse.includes(index)}>
            <CardBody>
              {content}
              <br />
              <br />
              <div>
                <Badge tag={Link}
                  to={`/faq/${item._id}`} color='light-primary'>
                  Edit
                </Badge> &nbsp;
                <Badge color='light-danger cursor-pointer' onClick={() => deleteq(item._id)}>
                  Delete
                </Badge>
              </div>
            </CardBody>
          </Collapse>
        </Card>
      )
    })
  }

  return (
    <div
      className={classnames('collapse-icon', {
        [className]: className,
        'collapse-default': !type,
        'collapse-shadow': type === 'shadow',
        'collapse-border': type === 'border',
        'collapse-margin': type === 'margin'
      })}
    >
      <ReactSortable className='list-group' list={listArr} setList={setListArr}
        animation={500}
        delayOnTouchStart={true}
        delay={5}
        onEnd={(e) => {
          listArr.map((result, i) => {
            const datas = {
              question_id: result._id,
              question: result.question,
              answer: result.question,
              sno: i + 1
            }
            editq(datas)
          })
        }}
      >
        {renderData()}
      </ReactSortable>
    </div>
  )
}

export default AppCollapse

// ** PropTypes
AppCollapse.propTypes = {
  data: Proptypes.array.isRequired,
  accordion: Proptypes.bool,
  type: Proptypes.oneOf(['shadow', 'border', 'margin']),
  active: Proptypes.oneOfType([Proptypes.array, Proptypes.number]),
  titleKey: Proptypes.string,
  contentKey: Proptypes.string,
  className: Proptypes.string
}

// ** Default Props
AppCollapse.defaultProps = {
  active: [],
  toggle: 'click'
}
