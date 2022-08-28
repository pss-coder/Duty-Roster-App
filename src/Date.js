const { DateTime } = require("luxon");

//TODO: How to export module and functions

// Today Date
var today = DateTime.now()

// Week number
var weekNumber = today.weekNumber
// console.log("Week number for this week: " + weekNumber )

// Week range
// NOTE: ASSUMES - MONDAY IS START DAY
var startDateWeek =  today.startOf('week').toISODate()
var endDateWeek = today.endOf('week').toISODate()

const WeekInfo = {
    today: today,
    weekNumber: weekNumber,
    startDateWeek: startDateWeek,
    endDateWeek: endDateWeek
}

export function getThisWeekInfo() {
    return {
        today: today,
        weekNumber: weekNumber,
        startDateWeek: startDateWeek,
        endDateWeek: endDateWeek
    }   
}

export function getWeekByWeekNumber(weekNumber) {
    const dt = DateTime.fromObject({
        weekNumber: weekNumber
    })

    return {
        weekNumber: weekNumber,
        startDateWeek: dt.startOf('week').toISODate(),
        endDateWeek: dt.endOf('week').toISODate()
    }
}

export default WeekInfo;