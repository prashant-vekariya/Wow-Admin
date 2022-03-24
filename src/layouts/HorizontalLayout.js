// !Do not remove the Layout import
import Layout from '@layouts/HorizontalLayout'

const HorizontalLayout = props => (
  <Layout
    // menu={props => <CustomMenu {...props} />}
    // navbar={props => <CustomNavbar {...props} />}
    // footer={props => <CustomFooter {...props} />}
    {...props}
  >
    {props.children}
  </Layout>
)

export default HorizontalLayout
