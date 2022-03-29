// import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Button } from 'reactstrap'

const UserChart = () => {

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        backgroundColor: true,
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: {
                display: false
            },
            yAxes: {
                display: true,
                grid: {
                    borderColor: 'transparent',
                    color: '#faebd73b',
                    drawTicks: false
                },
                ticks: {
                    stepSize: 25,
                    min: 0,
                    max: 100,
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
        }
    },
        data = {
            labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
            datasets: [
                {
                    data: [0, 0, 50, 0, 0, 0, 35, 43, 0, 100],
                    label: 'Users',
                    borderColor: '#F99C55',
                    lineTension: 0.1,
                    pointStyle: 'circle',
                    backgroundColor: 'rgb(249,156,85,0.3)',
                    fill: true,
                    pointRadius: 8,
                    pointHoverRadius: 5,
                    pointBackgroundColor: '#F99C55',
                    pointHoverBorderWidth: 5,
                    pointBorderColor: '#F99C55',
                    pointHoverBorderColor: '#F99C55',
                    pointHoverBackgroundColor: '#F99C55',
                    pointShadowOffsetX: 1,
                    pointShadowOffsetY: 1,
                    pointShadowBlur: 5,
                    pointShadowColor: '#F99C55'
                }
            ]
        }

    //** To add spacing between legends and chart
    const plugins = [
        {
            beforeInit(chart) {
                chart.legend.afterFit = function () {
                    this.height += 20
                }
            }
        }
    ]

    return (
        <Card>
            <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
                <div className='d-sm-flex justify-content-between w-100'>
                    <h2 className='mb-75 text-orange'>
                        Users
                    </h2>
                    <div >
                        <Button.Ripple className='round text-dark' color='flat-secondary'>Active</Button.Ripple>
                        <Button.Ripple className='round text-dark' color='flat-secondary'>New</Button.Ripple>
                        <Button.Ripple className='round text-dark' color='flat-secondary'>Daily</Button.Ripple>
                        <Button.Ripple className='round text-dark' color='flat-secondary'>Weekly</Button.Ripple>
                        <Button.Ripple className='round text-dark' color='flat-secondary'>Monthly</Button.Ripple>
                        <Button.Ripple className='round orange-bgcolor text-white' color='none'>
                            CSV
                        </Button.Ripple>
                    </div>
                </div>
            </CardHeader>
            <CardBody>
                <div style={{ height: '300px' }}>
                    <Line data={data} options={options} height={300} />
                </div>
            </CardBody>
        </Card>
    )
}

export default UserChart
