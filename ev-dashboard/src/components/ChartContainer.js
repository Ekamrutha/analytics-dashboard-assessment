import React, { useEffect, useState } from 'react'
import styles from '../styles/ChartContainer.module.css'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartContainer = ({setViewCharts, setViewData, setViewHome, data}) => {
const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        const processData = (data) => {
            const makeCount = {};
            const electricRange = [];
      
            data.forEach((vehicle) => {
              const make = vehicle.Make;
              const range = parseInt(vehicle['Electric Range'], 10);
      
              makeCount[make] = (makeCount[make] || 0) + 1;
      
              if (!isNaN(range)) {
                electricRange.push(range);
              }
            });
      
            const labels = Object.keys(makeCount);
            const counts = Object.values(makeCount);
      
            setChartData({
              labels,
              datasets: [
                {
                  label: 'Number of Vehicles by Make',
                  data: counts,
                  backgroundColor: 'rgba(75, 192, 192, 0.6)',
                },
                {
                  label: 'Electric Range',
                  data: electricRange,
                  backgroundColor: 'rgba(153, 102, 255, 0.6)',
                },
              ],
            });
          }; 
          processData(data);     
    }, [])

  return (
    <>
    <div>
      <div style={{ width: '2000px', height: '700px', overflow: 'auto', marginLeft: '150px'}}>
        <div style={{ width: '2000px', height: '700px' }}>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          showGrid:false,
          scales: {
            y: {
              beginAtZero: true,
              grid:{
                display:false,
            }

            },
            x:{
                grid:{
                    display:false,
                }
            }
          },
        }}
      />
      </div>
      </div>
    </div>
    <div className={styles.buttonContainer}>
            <div className={styles.button} onClick={() => {setViewData(true), setViewHome(false), setViewCharts(false)}}>View Table</div>
            <div className={styles.button} onClick={() => {setViewData(false), setViewHome(true), setViewCharts(false)}}>Go to Home</div>
    </div>
    </>
  )
}

export default ChartContainer