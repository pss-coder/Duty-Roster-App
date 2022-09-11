import React from 'react';
//import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import '../App.css';

import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table'


import {getWeekByWeekNumber, getThisWeekInfo} from "../Date";
var thisWeekData = getThisWeekInfo()

const startWeek = 34;

// DATA
// const rooms = [1201,1202,1203, 1205, 1206, 1207, 1208, 1209, 1210, 1211]
const rooms = [1201,1202,1203,1206,1207, 1208, 1209,1210, 1211,1212]
const duties = new Set(["Disposal Waste","Plastic & Paper", "Dishes and Surfaces", "Floor Cleaning", "Metal & Glass"])


// Assign each duty to available rooms in ascending order until duty is filled up
// counter will be the input to determine where to start for following weeks :) 
var counter = 5; 
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
  for (let i = 0; i < 9; i++) {
    arr.push(getRoster())  
  }

return arr;

}

function getWeeks() {
  const weeks = []
  for(var i = 37; i <= 46; i++) {
    weeks.push(getWeekByWeekNumber(i))
  }
  return weeks;
}

const weeks = getWeeks();
// console.log(weeks)



function RosterTable(props) {
 const [rosters, setRosters] = [updateRosterbyWeek()]
  return (
    <div>
      <Table>
      <Thead>
        <Tr>
          <Th scope='col'>Week</Th>
          {Array.from(duties).map( (duty,index) => (
            <Th key={index} scope='col'>{duty}</Th>
          ))}
          
        </Tr>
      </Thead>
      <Tbody>
        {
          rosters.map( (roster, index) => (
            <Tr key={index} className={getThisWeekInfo().startDateWeek === weeks[index].startDateWeek ? "table-primary" : ""}>
              <Th key={weeks[index]} scope='row'>{weeks[index].startDateWeek} to {weeks[index].endDateWeek}</Th>
            <Td>{roster["Disposal Waste"]}</Td>
            <Td>{roster["Plastic & Paper"]}</Td>
            <Td>{roster["Dishes and Surfaces"]}</Td>
            <Td>{roster["Floor Cleaning"]}</Td>
            <Td>{roster["Metal & Glass"]}</Td>
            </Tr>
          ))

        }
      </Tbody>
    </Table>
    </div>
    
  );
}

export default RosterTable;