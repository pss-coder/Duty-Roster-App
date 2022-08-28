import React, { useState, useEffect } from "react";
import { MDBCol, MDBRow, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import RosterTable from "./RosterTable";

// import Duty from "./Duty";
import {getWeekByWeekNumber, getThisWeekInfo} from "../Date";


var originalstartWeek = 34
const thisWeekData = getThisWeekInfo()

const rooms = [1201,1202,1203, 1205, 1206, 1208, 1209, 1210, 1211]

function Roster() {
  const [weekView, setWeekView] = useState(thisWeekData)
  
  return (
    <div className="d-flex align-items-center justify-content-center custom-height">

    <MDBRow>
      <MDBCol>
      {/* Header */}
        {/* <h1>Week {weekView.weekNumber}: {weekView.startDateWeek} to {weekView.endDateWeek}</h1> */}
        <h1>F10 Kitchen Roster</h1>
        <p>Rooms assigned in corridor: {rooms.join(", ")}</p>
        <hr></hr>
        <p>Settings coming soon <button>Settings</button></p>
        
        
      {/* Roster Table View */}

      {/* { Object.keys(roster).map((duty, index) => (
        <Duty 
          key = {index}
          duty = {duty}
          room = {roster[duty]}
        />
      ))} */}

      <RosterTable />
      

        
        {/* <button>Previous Week</button> */}
        {/* <button onClick={RenderNextWeekRoster}>View Next Week</button> */}
      </MDBCol>
    </MDBRow>

      

    </div>
  );
}

export default Roster;