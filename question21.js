// Program to get the weekend date

function getWeekendDate() {
    var today = new Date();

    var day = today.getDay();

    // Calculate Saturday
    var saturday = new Date(today);
    saturday.setDate(today.getDate() + (6 - day));

    // Calculate Sunday
    var sunday = new Date(saturday);
    sunday.setDate(saturday.getDate() + 1);

    console.log("Saturday:", saturday.toDateString());
    console.log("Sunday:", sunday.toDateString());
}

getWeekendDate();