import React from 'react'
import { Bar, Line, Doughnut,Polar } from 'react-chartjs-2';

const Statistics = () => {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Grafica 1",
            backgroundColor: '#4a00e0',
            borderColor: 'white',
            data: [3, 10, 5, 2, 20, 30, 45],
        }]
    }
    const options = {
        scales: {
            xAxes: [{
                gridLines: {
                    offsetGridLines: true
                }
            }]
        }
    };

    return (
        <>
            <div className='row'>
                <div className='col-sm-6'>
                    <div className="card-lift--hover shadow border-0 card mt--150">
                        <Bar
                            data={data}
                            options={options}
                            width={300}
                            height={150}
                        />
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className="card-lift--hover shadow border-0 card mt--150">
                        <Polar
                            data={data}
                            options={options}
                            width={300}
                            height={150}
                        />
                    </div>
                </div>

                <div className='col-sm-6'>
                    <div className="card-lift--hover shadow border-0 card mt--20">
                        <Line
                            data={data}
                            options={options}
                            width={300}
                            height={150}
                        />
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className='card-lift--hover shadow border-0 card mt--20' >
                        <Doughnut
                            data={data}
                            options={options}
                            width={300}
                            height={150}
                            className="card_dashboard"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}


export default Statistics;