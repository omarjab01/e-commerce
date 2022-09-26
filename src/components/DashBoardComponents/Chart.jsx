import React from 'react'
import { Line, Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const Chart = ({ chartData }) => {
    return (
        <div className='bg-white p-4 rounded-3xl'>
            <Line data={chartData} />
        </div>
    )
}

export default Chart