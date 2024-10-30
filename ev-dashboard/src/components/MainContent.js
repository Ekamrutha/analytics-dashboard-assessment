import React from 'react'
import styles from "@/styles/MainContent.module.css";

const MainContent = ({setViewData, setViewHome, setViewCharts}) => {
  return (
    <>
    <div className={styles.mainContent}>
    <img src='evVehicle.png' width="500px" height="500px" className={styles.evImage}></img>
    <p className={styles.information}>
      An electric vehicle (EV) is a car that runs entirely or partially on electricity instead of gasoline. The electricity is stored in reusable batteries and used to power an electric motor that turns the wheels.
      <br></br>
      Electric vehicles are categorized as follows:
      <br></br>
      Battery Electric Vehicle (BEV): It runs entirely on electricity with no gas engine. They can travel distances ranging from 80 to over 300 miles on a single charge.
      <br></br>
      Plug-In Hybrid Electric Vehicle (PHEV): It has both electric and gas components. It can drive 20–55 miles on electricity before switching to gas.
      <br></br>
      Fuel Cell Electric Vehicle (FCEV): It uses hydrogen fuel cells to produce electricity. It has a 300–400 mile range and fast 5-minute refuel times.<br></br>
      Compared to gas-powered cars, EVs are more efficient. They have lower operating costs and produce no tailpipe emissions, making them better for the environment.</p>
  </div>
  <div className={styles.data}>
  <p>Please Click on the button to get the detailed Information on Electric Vehicle Data: </p>
  <div className={styles.button} onClick={() => {setViewData(true), setViewHome(false), setViewCharts(false)}}>View Electric Vehicle Data</div>
  </div>
  </>
  )
}

export default MainContent