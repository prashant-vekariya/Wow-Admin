import { Fragment, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Row,
  Col,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const CardNavigation = () => {
  const [activePill, setPillActive] = useState('1')
  const [activeTab, setTabActive] = useState('1')

  const togglePills = tab => {
    if (activePill !== tab) {
      setPillActive(tab)
    }
  }

  const center = [51.5074, 0.1278],
    zoom = 13

  const toggleTabs = tab => {
    if (activeTab !== tab) {
      setTabActive(tab)
    }
  }
  return (
    <Fragment>
      <h3 className='mb-2'>WOW Page Info</h3>
      <Row>
        <Col md='12'>
          <Card className='text-center'>
            <CardHeader>
              <Nav pills>
                <NavItem>
                  <NavLink
                    active={activePill === '1'}
                    onClick={() => {
                      togglePills('1')
                    }}
                  >
                    Privacy Policy
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    active={activePill === '2'}
                    onClick={() => {
                      togglePills('2')
                    }}
                  >
                    Terms & Conditions
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active={activePill === '3'}
                    onClick={() => {
                      togglePills('3')
                    }}>About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active={activePill === '4'}
                    onClick={() => {
                      togglePills('4')
                    }}>Contact Us</NavLink>
                </NavItem>
              </Nav>
            </CardHeader>
            <CardBody>
              <TabContent activeTab={activePill}>
                <TabPane tabId='1'>
                  <CardTitle tag='h4'>Special title treatment</CardTitle>
                  <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aperiam error nam. Consequuntur ab delectus quasi dolore accusamus id iste nihil, aliquam deleniti quod velit recusandae commodi excepturi doloremque corporis? Magni sint ipsa optio quo omnis ullam blanditiis qui doloribus animi voluptatum deleniti cupiditate voluptas expedita, tenetur minima beatae reprehenderit, velit laboriosam itaque placeat facilis? Dolorum qui eum molestias dolore, asperiores nam, nesciunt repellendus rem itaque eos quo minima sequi recusandae id tenetur. Eius ducimus explicabo fugiat corporis minus repudiandae repellendus neque maxime magnam dolore quas maiores nihil pariatur a aut provident debitis vel quo, libero omnis aliquid harum saepe. Quidem corrupti adipisci numquam qui earum explicabo minima doloribus. Eum tempora recusandae dolor quaerat! Dolore earum perferendis est laborum ipsam nobis cumque asperiores saepe repellat temporibus ad fugiat, fuga debitis consequatur maxime reprehenderit eaque sit. Neque harum mollitia quos facilis debitis fuga iste! Inventore nisi est velit similique et, officiis nam alias fuga quis? Natus, cumque animi perspiciatis qui omnis laborum optio quidem commodi officia a excepturi, nihil ad corporis. Exercitationem voluptates et, beatae officiis sapiente ipsam illum velit? Minus ex, corrupti magni consectetur alias porro officia adipisci eaque expedita autem, natus consequatur quae architecto nam voluptatibus dicta, in magnam!</CardText>
                  <Button.Ripple className='mr-1' color='primary' outline tag={Link} to='/pageinfoedit/Privacy Policy'>
                    Edit
                  </Button.Ripple>
                  <Button.Ripple color='danger' outline>
                    Delete
                  </Button.Ripple>
                </TabPane>
                <TabPane tabId='2'>
                  <CardTitle tag='h4'>Special title </CardTitle>
                  <CardText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem itaque provident autem repudiandae totam consequuntur libero illo, officia minima, enim vitae est reiciendis aliquam maiores! Voluptate ratione ipsum cum. Ullam tenetur blanditiis, dolore esse qui recusandae ipsam aut numquam accusantium officia voluptatibus dicta odit natus sequi id fuga modi nemo obcaecati non. Molestiae harum labore quisquam, id similique veniam sed laboriosam omnis dicta nisi molestias doloremque autem nihil? Aliquam cupiditate, numquam assumenda rerum esse commodi mollitia totam perspiciatis atque, expedita corrupti minima tenetur nostrum a error tempora vero eos molestiae natus. Hic, dignissimos! Tempora facilis maxime consequatur non delectus, accusamus, qui eligendi, illum quod mollitia repudiandae sint expedita natus molestias asperiores omnis sapiente ducimus nobis perferendis. Quisquam ex vero ipsum. Incidunt voluptate fuga temporibus explicabo tenetur, provident unde assumenda necessitatibus at saepe, excepturi autem id veritatis eius dicta a nisi odio! Odit nihil officiis mollitia est error sapiente consequatur pariatur fuga praesentium, placeat molestias quo quae, explicabo magni dolor quasi in qui deserunt perspiciatis voluptatem. Nostrum, nam blanditiis. Veritatis aspernatur dolores molestiae praesentium temporibus voluptas nobis consequuntur quaerat ducimus ut quam quo, placeat corporis, non illum vel impedit doloremque perspiciatis voluptatum in sunt cupiditate fugit iste. Incidunt nesciunt qui atque nam, amet ducimus quos velit similique. Totam animi eius aperiam, eum ad iusto eaque architecto id rerum nemo quo amet. Et incidunt atque alias inventore facere. Tenetur assumenda officiis ipsum a saepe aut illum, similique placeat facilis quam enim accusamus numquam laboriosam error possimus minus? Maxime at nostrum rem neque sapiente officiis reiciendis, voluptatibus praesentium, inventore, officia eius quam temporibus excepturi. Exercitationem consequuntur consectetur suscipit corporis nihil earum, veniam labore aspernatur doloribus nisi nobis optio error quae, alias distinctio quos id modi, illo odit nemo doloremque. Vitae hic nisi corporis corrupti molestias, laborum eligendi assumenda accusamus. Quo rerum vitae amet, facilis eveniet quod mollitia est modi cumque vel voluptatem vero distinctio non provident nulla nemo sapiente labore dolorem rem. In dicta adipisci libero facere explicabo saepe aperiam magnam minima, animi minus laudantium cumque odit officiis quod laborum id qui eos! Nisi doloribus odio exercitationem quidem repudiandae impedit quia! Sint eaque, blanditiis cumque perferendis veritatis, sunt nesciunt perspiciatis et odit aliquam possimus quisquam voluptate qui voluptatibus natus repellendus, in rem delectus dicta pariatur error modi iure. Tempora, earum tempore minima voluptatum maxime sapiente repellat doloremque, commodi corrupti rerum vero! Ab dignissimos tenetur quos rem nam corrupti asperiores harum dolorem aperiam reiciendis.</CardText>
                  <Button.Ripple className='mr-1' color='primary' outline tag={Link} to='/pageinfoedit/Terms & Conditions'>
                    Edit
                  </Button.Ripple>
                  <Button.Ripple color='danger' outline>
                    Delete
                  </Button.Ripple>
                </TabPane>
                <TabPane tabId='3'>
                  <CardTitle tag='h4'>Special title </CardTitle>
                  <CardText>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae blanditiis facilis fuga repudiandae natus officia molestias odio expedita, dicta eaque quis explicabo dolorem, doloribus dignissimos impedit necessitatibus repellendus nemo tempore ea distinctio laboriosam itaque! Laboriosam magni fugit accusantium. Nostrum rem error accusamus! Facere, nesciunt molestias quia iusto labore illum aliquid at voluptate vero veniam quos laboriosam ex vel nihil, cum ducimus suscipit temporibus eaque quasi culpa saepe pariatur fuga? Aliquam alias impedit saepe perspiciatis minus voluptatum dignissimos officiis ex, illum cum inventore a nesciunt delectus consectetur dolor eos quis. Dolorem perferendis natus, saepe blanditiis obcaecati molestiae quibusdam, voluptas enim consectetur incidunt facilis, similique earum? Dignissimos nostrum nobis enim tempore aut omnis similique labore itaque delectus rem error accusamus molestiae quia unde voluptatibus, earum distinctio expedita alias nihil? Eius similique accusantium minus? Quam, quos. Consectetur, beatae sint? Est saepe beatae quis. Adipisci nostrum placeat inventore dolor. Reprehenderit officia dolores deserunt id dolorem itaque placeat pariatur earum vitae vel repudiandae ipsam a voluptas, facilis quis iure doloribus odit culpa qui necessitatibus laboriosam optio facere? Exercitationem beatae dolorem dolorum deleniti aliquam, qui quibusdam eveniet. Blanditiis fuga sapiente quibusdam minus quasi? Facere, inventore repellat quidem sed velit totam est tenetur culpa, earum iusto nulla provident delectus odit omnis voluptatibus eaque, vel animi. Eos itaque distinctio praesentium officiis pariatur, earum est, placeat possimus alias eligendi sed perspiciatis! Impedit delectus eligendi, vel odio ex eveniet at! Sint omnis veniam autem nihil incidunt odio suscipit obcaecati debitis labore, vel placeat totam qui esse dignissimos quis, voluptates facere eligendi iusto modi neque, deserunt nesciunt delectus ex praesentium. Quasi nam asperiores earum sapiente aperiam vitae pariatur minus vero nihil. Accusamus modi dignissimos ut, magni beatae consequatur inventore voluptas quae ex possimus recusandae in, natus velit. Nulla quidem nisi voluptas architecto at, temporibus maxime magni, magnam eligendi omnis amet consequuntur ipsum ducimus, ex veritatis soluta iure ut! Rem facere, enim voluptatum officiis voluptates iusto eaque a modi blanditiis maxime reiciendis. Vitae corporis ipsam hic commodi accusamus quidem dolorum aliquid. Alias veniam praesentium quibusdam nobis quam eaque sed sequi, nesciunt ab totam harum doloremque nihil atque illo sit exercitationem magnam tempora.</CardText>
                  <Button.Ripple className='mr-1' color='primary' outline tag={Link} to='/pageinfoedit/About Us'>
                    Edit
                  </Button.Ripple>
                  <Button.Ripple color='danger' outline>
                    Delete
                  </Button.Ripple>
                </TabPane>
                <TabPane tabId='4'>
                  <CardTitle tag='h4'>Special title </CardTitle>
                  <CardText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur non reprehenderit eum sed quae quos voluptatum explicabo natus! Temporibus vel, eveniet nemo eligendi quisquam cupiditate saepe laboriosam doloribus nesciunt aliquid optio molestiae vitae culpa eaque facilis nulla. Hic repellat eligendi optio, consequuntur amet, nulla laborum voluptatibus est accusantium animi culpa itaque veritatis perspiciatis quod rerum. Dolorem quasi maxime beatae, ea temporibus tempore in sequi molestiae quos voluptatibus, quod sint ratione, voluptatem adipisci ipsa eos reiciendis enim! Non eos odio recusandae aspernatur ullam voluptatum incidunt quibusdam, culpa vero debitis quos sequi magnam molestiae explicabo repellendus dolor ea aperiam pariatur autem et temporibus quia repellat architecto? Unde in molestiae iste nesciunt est velit obcaecati numquam. Ullam excepturi exercitationem nostrum eligendi recusandae est laudantium velit reprehenderit sunt magni vitae, corporis cum, id in aut quis numquam. Dolor amet deserunt eos quidem tempore aut temporibus eius, qui magnam, aspernatur aliquam optio voluptatum debitis laboriosam.</CardText>
                  <Button.Ripple className='mr-1' color='primary' outline tag={Link} to='/pageinfoedit/Contact Us'>
                    Edit
                  </Button.Ripple>
                  <Button.Ripple color='danger' outline>
                    Delete
                  </Button.Ripple>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}

export default CardNavigation
