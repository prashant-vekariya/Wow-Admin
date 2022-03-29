import Flatpickr from 'react-flatpickr'
import { Calendar } from 'react-feather'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardBody, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

const CategoryvsUploadChart = ({ title }) => {
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration: 500,
        scales: {
            xAxes: {
                display: true,
                grid: {
                    display: false
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
                    borderDash: [12, 4],
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
            labels: ['Vocal', 'Dance', 'Acting', 'Djing', 'Comedy', 'Instrumental'],
            datasets: [
                {
                    data: [10, 25, 30, 25, 38, 34],
                    backgroundColor: [
                        '#D1A780',
                        '#FF9898',
                        '#F99C55',
                        '#48B9BF',
                        '#98A2FF',
                        '#65C7F8'
                    ],
                    borderColor: 'transparent',
                    borderWidth: 1,
                    borderRadius: 20
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
                <div style={{ height: '400px' }}>
                    <Bar data={data} options={options} height={400} />
                </div>
                <h5 className='text-center'>(in Hours)</h5>
            </CardBody>
        </Card >
    )
}

export default CategoryvsUploadChart
