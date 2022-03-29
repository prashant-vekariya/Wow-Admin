import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardBody, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const HorizontalBarChart = ({ title }) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration: 500,
        indexAxis: 'y',
        scales: {
            xAxes: {
                display: true,
                grid: {
                    borderColor: 'transparent',
                    color: '#faebd73b',
                    drawTicks: false
                },
                ticks: {
                    stepSize: 10,
                    min: 0,
                    max: 80,
                    color: 'beige',
                    font: {
                        size: 14
                    }
                }
            },
            yAxes: {
                display: true,
                grid: {
                    display: false
                },
                ticks: {
                    // stepSize: 10,
                    // min: 0,
                    // max: 80,
                    color: 'beige',
                    font: {
                        size: 14
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        title: {
            color: 'white'
        }

    },

        data = {
            labels: ['Android', 'IOS'],
            datasets: [
                {
                    data: [50, 25],
                    backgroundColor: [
                        '#65C7F8',
                        '#F66B3E'
                    ],
                    borderColor: 'transparent',
                    borderWidth: 1,
                    borderRadius: 20,
                    barThickness: 50
                }
            ]
        }

    return (
        <Card>
            <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
                <div className='d-sm-flex justify-content-between w-100'>
                    <h2 className='mb-75 text-orange'>
                        {title}
                    </h2>
                    <div >
                        <div className="round mb-1">
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
                </div>
            </CardHeader>
            <CardBody>
                <div style={{ height: '160px' }}>
                    <Bar data={data} options={options} height={400} />
                </div>
                <h5 className='text-center'>(K)</h5>
            </CardBody>
        </Card >
    )
}

export default HorizontalBarChart
