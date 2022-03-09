import { useContext } from "react"
import { Row, Col, Progress, Card, CardBody, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap"
import { ThemeColors } from "@src/utility/context/ThemeColors"
import Earnings from "@src/views/ui-elements/cards/analytics/Earnings"
import CardMedal from "@src/views/ui-elements/cards/advance/CardMedal"
import CardMeetup from "@src/views/ui-elements/cards/advance/CardMeetup"
import StatsCard from "@src/views/ui-elements/cards/statistics/StatsCard"
import GoalOverview from "@src/views/ui-elements/cards/analytics/GoalOverview"
import RevenueReport from "@src/views/ui-elements/cards/analytics/RevenueReport"
import OrdersBarChart from "@src/views/ui-elements/cards/statistics/OrdersBarChart"
import ProfitLineChart from "@src/views/ui-elements/cards/statistics/ProfitLineChart"
import CardTransactions from "@src/views/ui-elements/cards/advance/CardTransactions"
import CardBrowserStates from "@src/views/ui-elements/cards/advance/CardBrowserState"
import StatsHorizontal from "@components/widgets/stats/StatsHorizontal"
import {
    ChevronDown,
    MessageSquare,
    ShoppingBag,
    Heart,
    Award,
    Truck,
    Cpu,
    Server,
    Activity,
    AlertOctagon
} from "react-feather"

import styles from "./styles.module.scss"
import "@styles/react/libs/charts/apex-charts.scss"
import "@styles/base/pages/dashboard-ecommerce.scss"

const Dashboard = () => {
    const { colors } = useContext(ThemeColors),
        trackBgColor = "#e9ecef"

    return (
        <div id="dashboard-ecommerce">
            {/* Statistics */}
            <Row>
                <Col className="d-flex justify-content-between align-items-center">
                    <h3 className="text-orange">Statistics</h3>
                    <div className="br-20 mb-1">
                        <UncontrolledButtonDropdown>
                            <DropdownToggle className='grey-bgcolor br-20 text-dark' color='flat-secondary' caret>
                                Today
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href='/' tag='a'>Option 1</DropdownItem>
                                <DropdownItem href='/' tag='a'>Option 2</DropdownItem>
                                <DropdownItem href='/' tag='a'>Option 3</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledButtonDropdown>
                    </div>
                </Col>
            </Row>
            <Row className='match-height'>
                <Col>
                    <Card className="pink-bgcolor br-20 text-white">
                        <CardBody>
                            <div className="d-flex">
                                <div className="mr-1">
                                    <div className="avatar-content rounded-circle p-50 bg-white">
                                        <svg
                                            width="24"
                                            height="22"
                                            viewBox="0 0 25 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14.8898 0.000848856C15.1593 0.0177289 15.3991 0.160595 15.5212 0.376812C15.6432 0.593029 15.6294 0.85066 15.4849 1.05553C15.3404 1.26023 15.0865 1.38193 14.8164 1.37579H9.73217C9.52589 1.37977 9.32645 1.30919 9.17888 1.17982C9.03131 1.05046 8.94811 0.873221 8.94811 0.688297C8.94811 0.503233 9.03131 0.32599 9.17888 0.196615C9.32645 0.0672512 9.52589 -0.00333493 9.73217 0.000805643H14.8164C14.8408 -0.000268548 14.8653 -0.000268548 14.8898 0.000805643L14.8898 0.000848856ZM14.8164 2.65529C15.0199 2.65575 15.2151 2.72864 15.3587 2.85816C15.5023 2.98768 15.5826 3.16292 15.5818 3.34552V10.7439H19.12C19.3172 10.7433 19.5072 10.811 19.6504 10.9327C19.7935 11.0545 19.8789 11.221 19.8885 11.3977C19.8982 11.5743 19.8316 11.7475 19.7026 11.8813L12.8527 19.0004H12.8528C12.707 19.1516 12.4952 19.2386 12.2723 19.2386C12.0494 19.2386 11.8375 19.1516 11.6918 19.0004L4.84802 11.8813C4.71929 11.748 4.65269 11.5755 4.66194 11.3993C4.67118 11.2233 4.75541 11.0571 4.89733 10.9351C5.03925 10.8133 5.22807 10.7447 5.42459 10.7439H8.96279V3.3455C8.96194 3.16228 9.04291 2.98627 9.1874 2.85677C9.33189 2.7271 9.52824 2.65467 9.73263 2.65528L14.8164 2.65529ZM23.7905 14.6017C23.9929 14.6049 24.1856 14.6796 24.3267 14.8096C24.4679 14.9397 24.546 15.1145 24.5439 15.2959V19.8529C24.5439 21.0313 23.4632 21.9998 22.1488 21.9998L2.39533 22C1.08092 22 0.000183105 21.0312 0.000183105 19.853V15.2957C0.000183105 15.0498 0.146551 14.8227 0.383999 14.6999C0.621445 14.577 0.914022 14.577 1.15164 14.6999C1.38909 14.8227 1.53546 15.0498 1.53546 15.2957V19.8526C1.53546 20.2931 1.90404 20.6247 2.39518 20.6247L22.1486 20.6248C22.6399 20.6248 23.0085 20.293 23.0085 19.8528V15.2954C23.0065 15.1096 23.0883 14.931 23.2357 14.8001C23.3829 14.6693 23.583 14.5975 23.7903 14.6012L23.7905 14.6017Z"
                                                fill="#FF9898"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="font-weight-bolder text-white mb-0">270K</h2>
                                    <p className="card-text p-0 m-0">App installs</p>
                                    <small className="p-0 m-0">500K Installs till date</small>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    {/* <StatsHorizontal className='text-white' icon={<Cpu size={21} />} color='pink' stats='86%' statTitle='CPU Usage' /> */}
                </Col>
                <Col>
                    <Card className="orange-bgcolor br-20 text-white">
                        <CardBody>
                            <div className="d-flex">
                                <div className="mr-1">
                                    <div className="avatar-content rounded-circle p-50 bg-white">
                                        <svg width="23" height="23" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.3589 2.4375C10.5832 2.4375 10.7651 2.25559 10.7651 2.03125V0.40625C10.7651 0.181907 10.5832 0 10.3589 0C10.1345 0 9.95264 0.181907 9.95264 0.40625V2.03125C9.95264 2.25559 10.1345 2.4375 10.3589 2.4375Z" fill="#F99C55" />
                                            <path d="M15.0308 8.32835C15.0308 10.9084 12.9391 13 10.3591 13C7.77915 13 5.6875 10.9082 5.6875 8.32835C5.6875 5.74813 7.77915 3.65671 10.3591 3.65671C12.9391 3.65671 15.0308 5.74836 15.0308 8.32835Z" fill="#F99C55" />
                                            <path d="M16.6558 8.73413H18.2808C18.5051 8.73413 18.687 8.55222 18.687 8.32788C18.687 8.10354 18.5051 7.92163 18.2808 7.92163H16.6558C16.4314 7.92163 16.2495 8.10354 16.2495 8.32788C16.2495 8.55222 16.4314 8.73413 16.6558 8.73413Z" fill="#F99C55" />
                                            <path d="M2.4375 8.73413H4.0625C4.28684 8.73413 4.46875 8.55222 4.46875 8.32788C4.46875 8.10354 4.28684 7.92163 4.0625 7.92163H2.4375C2.21316 7.92163 2.03125 8.10354 2.03125 8.32788C2.03125 8.55222 2.21316 8.73413 2.4375 8.73413Z" fill="#F99C55" />
                                            <path d="M5.61926 4.1626C5.69851 4.24185 5.80262 4.28157 5.90654 4.28157C6.01046 4.28157 6.11456 4.24185 6.19381 4.1626C6.35251 4.00408 6.35251 3.74674 6.19381 3.58804L5.04471 2.43894C4.88619 2.28024 4.62866 2.28024 4.47034 2.43894C4.31165 2.59745 4.31165 2.8548 4.47034 3.0133L5.61926 4.1626Z" fill="#F99C55" />
                                            <path d="M14.8116 4.2816C14.9155 4.2816 15.0197 4.24188 15.0989 4.16262L16.248 3.01352C16.4067 2.85501 16.4067 2.59766 16.248 2.43915C16.0895 2.28046 15.832 2.28046 15.6736 2.43915L14.5245 3.58826C14.3658 3.74677 14.3658 4.00412 14.5245 4.16262C14.6038 4.24188 14.7077 4.2816 14.8116 4.2816H14.8116Z" fill="#F99C55" />
                                            <path d="M1.6569 26H19.0611C19.9763 26 20.7186 25.2503 20.7186 24.3269V20.2722C20.7186 16.4658 17.891 13.4366 14.4075 12.2842C13.3785 13.337 11.9443 13.9923 10.3592 13.9923C8.77426 13.9923 7.34008 13.337 6.31104 12.2844C2.82782 13.4369 0 16.4658 0 20.272V24.3267C0 25.25 0.741929 25.9997 1.65727 25.9997L1.6569 26ZM11.3744 16.4534H9.34315C9.1188 16.4534 8.9369 16.2714 8.9369 16.0471C8.9369 15.8228 9.1188 15.6409 9.34315 15.6409H11.3744C11.5987 15.6409 11.7806 15.8228 11.7806 16.0471C11.7806 16.2714 11.5987 16.4534 11.3744 16.4534ZM8.70002 14.0159H12.0177C12.242 14.0159 12.4239 14.1978 12.4239 14.4221C12.4239 14.6464 12.242 14.8284 12.0177 14.8284H8.70002C8.47567 14.8284 8.29377 14.6464 8.29377 14.4221C8.29377 14.1978 8.47549 14.0159 8.70002 14.0159ZM4.26502 16.2502C4.48936 16.2502 4.67127 16.4321 4.67127 16.6565C4.67127 16.8808 4.48936 17.0627 4.26502 17.0627C4.04068 17.0627 3.85877 16.8808 3.85877 16.6565C3.85877 16.4321 4.04068 16.2502 4.26502 16.2502ZM2.25699 20.5265C2.25699 19.5949 2.46809 18.6944 2.8847 17.8502C2.9839 17.6489 3.22783 17.5661 3.4288 17.6655C3.63011 17.7647 3.71263 18.0085 3.61342 18.2096C3.25252 18.9411 3.0697 19.7206 3.0697 20.5265V23.1323C3.0697 23.324 3.0697 23.5627 3.89455 23.5627H9.95255C10.1769 23.5627 10.3588 23.7446 10.3588 23.9689C10.3588 24.1933 10.1769 24.3752 9.95255 24.3752H3.89455C2.54125 24.3752 2.2572 23.6994 2.2572 23.1323L2.25699 20.5265Z" fill="#F99C55" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="font-weight-bolder text-white mb-0">72K</h2>
                                    <p className="card-text p-0 m-0">DAU</p>
                                    {/* <small className="p-0 m-0">500K Installs till date</small> */}
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className="viking-bgcolor br-20 text-white">
                        <CardBody>
                            <div className="d-flex">
                                <div className="mr-1">
                                    <div className="avatar-content rounded-circle p-50 bg-white">
                                        <svg width="23" height="23" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.3589 2.4375C10.5832 2.4375 10.7651 2.25559 10.7651 2.03125V0.40625C10.7651 0.181907 10.5832 0 10.3589 0C10.1345 0 9.95264 0.181907 9.95264 0.40625V2.03125C9.95264 2.25559 10.1345 2.4375 10.3589 2.4375Z" fill="#48B9BF" />
                                            <path d="M15.0308 8.32835C15.0308 10.9084 12.9391 13 10.3591 13C7.77915 13 5.6875 10.9082 5.6875 8.32835C5.6875 5.74813 7.77915 3.65671 10.3591 3.65671C12.9391 3.65671 15.0308 5.74836 15.0308 8.32835Z" fill="#48B9BF" />
                                            <path d="M16.6558 8.73413H18.2808C18.5051 8.73413 18.687 8.55222 18.687 8.32788C18.687 8.10354 18.5051 7.92163 18.2808 7.92163H16.6558C16.4314 7.92163 16.2495 8.10354 16.2495 8.32788C16.2495 8.55222 16.4314 8.73413 16.6558 8.73413Z" fill="#48B9BF" />
                                            <path d="M2.4375 8.73413H4.0625C4.28684 8.73413 4.46875 8.55222 4.46875 8.32788C4.46875 8.10354 4.28684 7.92163 4.0625 7.92163H2.4375C2.21316 7.92163 2.03125 8.10354 2.03125 8.32788C2.03125 8.55222 2.21316 8.73413 2.4375 8.73413Z" fill="#48B9BF" />
                                            <path d="M5.61926 4.1626C5.69851 4.24185 5.80262 4.28157 5.90654 4.28157C6.01046 4.28157 6.11456 4.24185 6.19381 4.1626C6.35251 4.00408 6.35251 3.74674 6.19381 3.58804L5.04471 2.43894C4.88619 2.28024 4.62866 2.28024 4.47034 2.43894C4.31165 2.59745 4.31165 2.8548 4.47034 3.0133L5.61926 4.1626Z" fill="#48B9BF" />
                                            <path d="M14.8116 4.2816C14.9155 4.2816 15.0197 4.24188 15.0989 4.16262L16.248 3.01352C16.4067 2.85501 16.4067 2.59766 16.248 2.43915C16.0895 2.28046 15.832 2.28046 15.6736 2.43915L14.5245 3.58826C14.3658 3.74677 14.3658 4.00412 14.5245 4.16262C14.6038 4.24188 14.7077 4.2816 14.8116 4.2816H14.8116Z" fill="#48B9BF" />
                                            <path d="M1.6569 26H19.0611C19.9763 26 20.7186 25.2503 20.7186 24.3269V20.2722C20.7186 16.4658 17.891 13.4366 14.4075 12.2842C13.3785 13.337 11.9443 13.9923 10.3592 13.9923C8.77426 13.9923 7.34008 13.337 6.31104 12.2844C2.82782 13.4369 0 16.4658 0 20.272V24.3267C0 25.25 0.741929 25.9997 1.65727 25.9997L1.6569 26ZM11.3744 16.4534H9.34315C9.1188 16.4534 8.9369 16.2714 8.9369 16.0471C8.9369 15.8228 9.1188 15.6409 9.34315 15.6409H11.3744C11.5987 15.6409 11.7806 15.8228 11.7806 16.0471C11.7806 16.2714 11.5987 16.4534 11.3744 16.4534ZM8.70002 14.0159H12.0177C12.242 14.0159 12.4239 14.1978 12.4239 14.4221C12.4239 14.6464 12.242 14.8284 12.0177 14.8284H8.70002C8.47567 14.8284 8.29377 14.6464 8.29377 14.4221C8.29377 14.1978 8.47549 14.0159 8.70002 14.0159ZM4.26502 16.2502C4.48936 16.2502 4.67127 16.4321 4.67127 16.6565C4.67127 16.8808 4.48936 17.0627 4.26502 17.0627C4.04068 17.0627 3.85877 16.8808 3.85877 16.6565C3.85877 16.4321 4.04068 16.2502 4.26502 16.2502ZM2.25699 20.5265C2.25699 19.5949 2.46809 18.6944 2.8847 17.8502C2.9839 17.6489 3.22783 17.5661 3.4288 17.6655C3.63011 17.7647 3.71263 18.0085 3.61342 18.2096C3.25252 18.9411 3.0697 19.7206 3.0697 20.5265V23.1323C3.0697 23.324 3.0697 23.5627 3.89455 23.5627H9.95255C10.1769 23.5627 10.3588 23.7446 10.3588 23.9689C10.3588 24.1933 10.1769 24.3752 9.95255 24.3752H3.89455C2.54125 24.3752 2.2572 23.6994 2.2572 23.1323L2.25699 20.5265Z" fill="#48B9BF" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="font-weight-bolder text-white mb-0">108K</h2>
                                    <p className="card-text p-0 m-0">MAU</p>
                                    {/* <small className="p-0 m-0">500K Installs till date</small> */}
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className="skyblue-bgcolor br-20 text-white">
                        <CardBody>
                            <div className="d-flex">
                                <div className="mr-1">
                                    <div className="avatar-content rounded-circle p-50 bg-white">
                                        <svg width="20" height="21" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5841 3.40164H2.70038C2.05959 3.40164 1.44527 3.65615 0.992125 4.1091C0.539178 4.56223 0.284668 5.17657 0.284668 5.81735C0.284668 6.45813 0.539178 7.07246 0.992125 7.5256C1.44525 7.97855 2.05959 8.23306 2.70038 8.23306H15.5841C16.2249 8.23306 16.8393 7.97855 17.2924 7.5256C17.7453 7.07247 17.9999 6.45813 17.9999 5.81735C17.9999 5.17657 17.7453 4.56224 17.2924 4.1091C16.8393 3.65615 16.2249 3.40164 15.5841 3.40164Z" fill="#98A2FF" />
                                            <path d="M12.3631 5.01214H5.9212C5.70767 5.01214 5.50277 4.9273 5.35179 4.77632C5.20081 4.62534 5.11597 4.42043 5.11597 4.2069V2.59643C5.11597 1.95565 5.37048 1.34132 5.82342 0.888182C6.27655 0.435235 6.89089 0.180725 7.53167 0.180725H10.7526C11.3934 0.180725 12.0077 0.435235 12.4609 0.888182C12.9138 1.34131 13.1683 1.95565 13.1683 2.59643V4.2069C13.1683 4.42043 13.0835 4.62534 12.9325 4.77632C12.7815 4.9273 12.5766 5.01214 12.3631 5.01214ZM6.72644 3.40167H11.5579V2.59643C11.5579 2.3829 11.473 2.17799 11.322 2.02702C11.1711 1.87604 10.9661 1.7912 10.7526 1.7912H7.53167C7.31814 1.7912 7.11324 1.87604 6.96226 2.02702C6.81128 2.17799 6.72644 2.3829 6.72644 2.59643V3.40167Z" fill="#98A2FF" />
                                            <path d="M15.5841 9.84355H2.70032C2.14673 9.84301 1.59903 9.73067 1.08984 9.51337V20.3118C1.09182 20.9519 1.34687 21.5653 1.79946 22.0179C2.25206 22.4705 2.8655 22.7255 3.50555 22.7275H14.7789C15.4189 22.7255 16.0323 22.4705 16.4849 22.0179C16.9375 21.5653 17.1926 20.9519 17.1946 20.3118V9.51337C16.6854 9.73067 16.1377 9.84301 15.5841 9.84355ZM7.53173 18.7011C7.53173 18.9889 7.37823 19.2547 7.12911 19.3985C6.87999 19.5423 6.57299 19.5423 6.32388 19.3985C6.07476 19.2547 5.92126 18.9889 5.92126 18.7011V13.8697C5.92126 13.582 6.07475 13.3161 6.32388 13.1723C6.573 13.0286 6.87999 13.0286 7.12911 13.1723C7.37823 13.3161 7.53173 13.582 7.53173 13.8697V18.7011ZM12.3631 18.7011C12.3631 18.9889 12.2096 19.2547 11.9605 19.3985C11.7114 19.5423 11.4044 19.5423 11.1553 19.3985C10.9062 19.2547 10.7527 18.9889 10.7527 18.7011V13.8697C10.7527 13.582 10.9062 13.3161 11.1553 13.1723C11.4044 13.0286 11.7114 13.0286 11.9605 13.1723C12.2096 13.3161 12.3631 13.582 12.3631 13.8697V18.7011Z" fill="#98A2FF" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="font-weight-bolder text-white mb-0">190</h2>
                                    <p className="card-text p-0 m-0">Total uninstalls</p>
                                    <small className="p-0 m-0">64K UnInstalls till date</small>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className="brown-bgcolor br-20 text-white">
                        <CardBody>
                            <div className="d-flex">
                                <div className="mr-1">
                                    <div className="avatar-content rounded-circle p-50 bg-white">
                                        <svg width="24" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.8896 0.000848856C15.1591 0.0177289 15.3989 0.160595 15.5209 0.376812C15.643 0.593029 15.6291 0.85066 15.4847 1.05553C15.3402 1.26023 15.0863 1.38193 14.8161 1.37579H9.73197C9.52568 1.37977 9.32624 1.30919 9.17867 1.17982C9.0311 1.05046 8.9479 0.873221 8.9479 0.688297C8.9479 0.503233 9.0311 0.32599 9.17867 0.196615C9.32624 0.0672512 9.52568 -0.00333493 9.73197 0.000805643H14.8161C14.8406 -0.000268548 14.8651 -0.000268548 14.8896 0.000805643L14.8896 0.000848856ZM14.8162 2.65529C15.0197 2.65575 15.2149 2.72864 15.3585 2.85816C15.5021 2.98768 15.5824 3.16292 15.5816 3.34552V10.7439H19.1197C19.317 10.7433 19.507 10.811 19.6501 10.9327C19.7932 11.0545 19.8787 11.221 19.8882 11.3977C19.898 11.5743 19.8314 11.7475 19.7023 11.8813L12.8524 19.0004H12.8526C12.7068 19.1516 12.495 19.2386 12.2721 19.2386C12.0492 19.2386 11.8373 19.1516 11.6916 19.0004L4.84783 11.8813C4.71909 11.748 4.6525 11.5755 4.66174 11.3993C4.67099 11.2233 4.75521 11.0571 4.89713 10.9351C5.03905 10.8133 5.22788 10.7447 5.42439 10.7439H8.96259V3.3455C8.96173 3.16228 9.0427 2.98627 9.18719 2.85677C9.33168 2.7271 9.52803 2.65467 9.73242 2.65528L14.8162 2.65529ZM23.7903 14.6017C23.9926 14.6049 24.1854 14.6796 24.3264 14.8096C24.4677 14.9397 24.5457 15.1145 24.5437 15.2959V19.8529C24.5437 21.0313 23.4629 21.9998 22.1485 21.9998L2.39514 22C1.08073 22 0 21.0312 0 19.853V15.2957C0 15.0498 0.146368 14.8227 0.383814 14.6999C0.62126 14.577 0.913836 14.577 1.15146 14.6999C1.3889 14.8227 1.53527 15.0498 1.53527 15.2957V19.8526C1.53527 20.2931 1.90385 20.6247 2.39499 20.6247L22.1484 20.6248C22.6397 20.6248 23.0083 20.293 23.0083 19.8528V15.2954C23.0062 15.1096 23.088 14.931 23.2354 14.8001C23.3827 14.6693 23.5828 14.5975 23.7901 14.6012L23.7903 14.6017Z" fill="#D1A780" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="font-weight-bolder text-white mb-0">10%</h2>
                                    <p className="card-text p-0 m-0">Churn Rate</p>
                                    {/* <small className="p-0 m-0">500K Installs till date</small> */}
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            {/* Overview */}
            <Row>
                <Col>
                    <h3 className="text-orange">Overview</h3>
                </Col>
            </Row>
            <Row>
                <Col sm={12} lg={8}>
                    <Row className='match-height'>
                        <Col sm={3}>
                            <Card className="lightgrey-bgcolor shadow-none py-0">
                                <CardBody>
                                    <h3 className="text-orange">15 Mins</h3>
                                    <p className="p-0 m-0">Average TOP</p>
                                    <small>Total TOP = 27 hrs</small>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card className="lightgrey-bgcolor shadow-none">
                                <CardBody>
                                    <h3 className="text-orange">60</h3>
                                    <p className="p-0 m-0">Average Views per session</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card className="lightgrey-bgcolor shadow-none">
                                <CardBody>
                                    <h3 className="text-orange">9 Mins</h3>
                                    <p className="p-0 m-0">Avg. Video Time Per User</p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='match-height'>
                        <Col sm={3}>
                            <Card className="lightgrey-bgcolor shadow-none py-0">
                                <CardBody>
                                    <h3 className="text-orange">504 Videos</h3>
                                    <p className="p-0 m-0">Total Videos Uploaded</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card className="lightgrey-bgcolor shadow-none py-0 pr-0">
                                <CardBody>
                                    <h3 className="text-orange">126 Secs</h3>
                                    <p className="p-0 m-0">Avg. Video Length</p>
                                    <small>Total Video Length = 17.6 hrs</small>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} lg={4}>
                    <Card className="border bg-transparent shadow-none">
                        <CardBody>
                            <div className="d-flex justify-content-between align-items-center">
                                <h3 className="text-orange">Installs v/s Sign-ups</h3>
                                <div className="br-20 mb-1">
                                    <UncontrolledButtonDropdown>
                                        <DropdownToggle className='grey-bgcolor br-20 text-dark' color='flat-secondary' caret>
                                            Today
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem href='/' tag='a'>Option 1</DropdownItem>
                                            <DropdownItem href='/' tag='a'>Option 2</DropdownItem>
                                            <DropdownItem href='/' tag='a'>Option 3</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledButtonDropdown>
                                </div>
                            </div>
                            <div>
                                <Progress className="installvssignup my-1" value={50} />
                            </div>
                            <div className="d-flex justify-content-around mt-2 mb-3">
                                <div>
                                    <h3>270K</h3>
                                    <small>Total Installs</small>
                                </div>
                                <div>
                                    <h3>180.9K</h3>
                                    <small>Total Sign ups</small>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard
