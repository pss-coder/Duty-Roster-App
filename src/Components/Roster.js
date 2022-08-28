import React, { useState } from "react";
import { MDBCol, MDBRow, MDBInput, MDBBtn } from 'mdb-react-ui-kit';


import Duty from "./Duty";
import {getWeekByWeekNumber, getThisWeekInfo} from "../Date";


// DATA
const rooms = [1201,1202,1203, 1205, 1206, 1208, 1209, 1210, 1211, 1212]
const duties = new Set(["Disposal Waste","Plastic & Paper", "Dishes and Surfaces", "Floor Cleaning", "Metal & Glass"])
const thisWeekData = getThisWeekInfo()

// Assign each duty to available rooms in ascending order until duty is filled up
// counter will be the input to determine where to start for following weeks :) 
var counter = 0; 
const assignedDuties = new Map(); // Map data


function getRoster() {
  duties.forEach(function(duty) {
    // map each duty to rooms
    if (rooms.length >= duties.size && counter < rooms.length - 1) {
        assignedDuties.set(duty, rooms[counter])
        // Track which rooms onwards are not assigned
        counter++;
    } else {
        if (counter >= rooms.length) {
            // reset counter
            counter = 0;
        }
        assignedDuties.set(duty, rooms[counter])
        counter++;
    }
  })

  // return as Map as object
  return Object.fromEntries(assignedDuties)
}

function Roster() {
  const [roster, setRoster] = useState(getRoster)
  const [weekView, setWeekView] = useState(thisWeekData)

  function RenderNextWeekRoster() {
    thisWeekData.weekNumber = thisWeekData.weekNumber + 1;
    
    setWeekView(getWeekByWeekNumber(thisWeekData.weekNumber))

    setRoster(getRoster())
  }

  return (
    <div className="d-flex align-items-center justify-content-center custom-height">

    <MDBRow>
      <MDBCol>
      {/* Header */}
        <h1>Week {weekView.weekNumber}: {weekView.startDateWeek} to {weekView.endDateWeek}</h1>
        <p>Rooms assigned in corridor: {rooms.join(", ")}</p>
        <hr></hr>
        <p>Settings coming soon</p>
        <button>Settings</button>
        <hr></hr>
      {/* Roster Table View */}

      { Object.keys(roster).map((duty, index) => (
        <Duty 
          key = {index}
          duty = {duty}
          room = {roster[duty]}
        />
      ))}
      
        {/* <p>Disposal Waste: 1208</p>
        <p>Disposal Waste: 1208</p>
        <p>Disposal Waste: 1208</p>
        <p>Disposal Waste: 1208</p>
        <p>Disposal Waste: 1208</p> */}

        <hr></hr>
        {/* <button>Previous Week</button> */}
        <button onClick={RenderNextWeekRoster}>View Next Week</button>
      </MDBCol>
    </MDBRow>

      

    </div>
  );
}

export default Roster;