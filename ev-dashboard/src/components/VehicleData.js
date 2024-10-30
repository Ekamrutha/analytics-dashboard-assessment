import React from 'react'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import styles from '../styles/VehicleData.module.css';

const VehicleData = ({rowData, setViewCharts, setViewData, setViewHome}) => {
    const columnDefs = [
        { headerName: 'VIN', field: 'VIN (1-10)', filter: true},
        { headerName: 'Country', field: 'County', filter: true },
        { headerName: 'City', field: 'City', filter: true },
        { headerName: 'State', field: 'State', filter: true },
        { headerName: 'Postal Code', field: 'Postal Code', filter: true },
        { headerName: 'Model Year', field: 'Model Year', filter: true },
        { headerName: 'Make', field: 'Make', filter: true },
        { headerName: 'Model', field: 'Model', filter: true },
        { headerName: 'Electric Vehicle Type', field: 'Electric Vehicle Type', filter: true},
        { headerName: 'CAFV Eligibility', field: 'Clean Alternative Fuel Vehicle (CAFV) Eligibility', filter: true },
        { headerName: 'Electric Range', field: 'Electric Range', filter: true },
        { headerName: 'Base MSRP', field: 'Base MSRP', filter: true },
        { headerName: 'Legislative District', field: 'Legislative District', filter: true },
        { headerName: 'DOL Vehicle ID', field: 'DOL Vehicle ID', filter: true },
        { headerName: 'Vehicle Location', field: 'Vehicle Location', filter: true },
        { headerName: 'Electric Utility', field: 'Electric Utility', filter: true },
        { headerName: '2020 Census Tract', field: '2020 Census Tract', filter: true },
      ];
    
      return (
        <div>
        <h2 className={styles.header}>Electric Vehicle Data</h2>
        <div className="ag-theme-alpine" style={{ height: '600px', width: '80%', margin: '50px 100px 30px 180px'}}>
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            pagination={true}
            paginationPageSize='1000'
            enableSorting={true}
            enableFilter={true}
          />
        </div>
        <p className={styles.noteText}>Note : Each Column of this table are adjustable,each column data have the Sorting functionality and can be filtered.</p>
        <div className={styles.buttonContainer}>
            <div className={styles.button} onClick={() => {setViewData(false), setViewHome(false), setViewCharts(true)}}>View Chart</div>
            <div className={styles.button} onClick={() => {setViewData(false), setViewHome(true), setViewCharts(false)}}>Go to Home</div>
        </div>
        </div>
      );
}

export default VehicleData