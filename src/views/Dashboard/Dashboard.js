import { useContext } from 'react'
import { Row, Col } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import Earnings from '@src/views/ui-elements/cards/analytics/Earnings'
import CardMedal from '@src/views/ui-elements/cards/advance/CardMedal'
import CardMeetup from '@src/views/ui-elements/cards/advance/CardMeetup'
import StatsCard from '@src/views/ui-elements/cards/statistics/StatsCard'
import GoalOverview from '@src/views/ui-elements/cards/analytics/GoalOverview'
import RevenueReport from '@src/views/ui-elements/cards/analytics/RevenueReport'
import OrdersBarChart from '@src/views/ui-elements/cards/statistics/OrdersBarChart'
import ProfitLineChart from '@src/views/ui-elements/cards/statistics/ProfitLineChart'
import CardTransactions from '@src/views/ui-elements/cards/advance/CardTransactions'
import CardBrowserStates from '@src/views/ui-elements/cards/advance/CardBrowserState'

import '@styles/react/libs/charts/apex-charts.scss'
import '@styles/base/pages/dashboard-ecommerce.scss'

const EcommerceDashboard = () => {
    const { colors } = useContext(ThemeColors),
        trackBgColor = '#e9ecef'

    return (
        <div id='dashboard-ecommerce'>
            <Row className='match-height'>
                <Col xs='12'>
                    <StatsCard cols={{ xl: '3', sm: '6' }} />
                </Col>
            </Row>
        </div>
    )
}

export default EcommerceDashboard
