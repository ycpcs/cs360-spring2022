
var semesterInfo = {
    // The dates for the first and last day of classes (not including finals week).
    // Set the time to 4 AM ... because why not.
    firstDayOfSemester: new Date("01/27/2022 4:00:00"),
    lastDayOfSemester:  new Date("05/06/2022 4:00:00"),

    // Specify days on which there are no classes held at the college.
    // Each break is specified by a startDate and an endDate.
    // For single-day breaks, the startDate and endDate are the same.
    vacationDates: [
        new VacationDays("Winter Break",          new Date("03/10/2022"),  new Date("03/13/2022")),
        new VacationDays("Spring Break",         new Date("04/15/2022"), new Date("04/18/2022")),
    ]
};
