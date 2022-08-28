import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import {getWeekByWeekNumber, getThisWeekInfo} from "../Date";
var thisWeekData = getThisWeekInfo()

const startWeek = 34;

// DATA
const rooms = [1201,1202,1203, 1205, 1206, 1208, 1209, 1210, 1211]
const duties = new Set(["Disposal Waste","Plastic & Paper", "Dishes and Surfaces", "Floor Cleaning", "Metal & Glass"])


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

const arr = []
function updateRosterbyWeek() {
  //const diff = Math.abs(getThisWeekInfo.weekNumber - startWeek);
  for (let i = 0; i < 7; i++) {
    arr.push(getRoster())  
  }
return arr;
}

function getWeeks() {
  const weeks = []
  for(var i = 34; i <= 40; i++) {
    weeks.push(getWeekByWeekNumber(i))
  }
  return weeks;
}

const weeks = getWeeks();
console.log(weeks)



function RosterTable(props) {
 const [rosters, setRosters] = [updateRosterbyWeek()]

  return (
    <MDBTable bordered>
      <MDBTableHead>
        <tr>
          <th scope='col'>Week</th>
          {Array.from(duties).map( (duty,index) => (
            <th key={index} scope='col'>{duty}</th>
          ))}
          
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          rosters.map( (roster, index) => (
            <tr className={getThisWeekInfo().startDateWeek === weeks[index].startDateWeek ? "table-primary" : ""}>
              <th key={weeks[index]} scope='row'>{weeks[index].startDateWeek} to {weeks[index].endDateWeek}</th>
            <td>{roster["Disposal Waste"]}</td>
            <td>{roster["Plastic & Paper"]}</td>
            <td>{roster["Dishes and Surfaces"]}</td>
            <td>{roster["Floor Cleaning"]}</td>
            <td>{roster["Metal & Glass"]}</td>
            </tr>
          ))

        }
      </MDBTableBody>
    </MDBTable>
  );
}

export default RosterTable;