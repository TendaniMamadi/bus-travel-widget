
function Busride() {


    //create an object with amount in rands and initialize to points
    let location = {
        "Khayelitsha": 40,
        "Dunoon": 25,
        "Mitchells_Plain": 30,

    };

    var sum_K = 40;
    var sum_D = 25;
    var sum_M = 30;

    var pointsBalance = 0;

    function setPoints(amount) {
        //function takes a parameter
        //conditional statement setting amounts

        if (amount == 40) {
            pointsBalance += 40
        }

        if (amount == 25) {
            pointsBalance += 25
        }

        if (amount == 30) {
            pointsBalance += 30
        }
    }

    function getPoints() {
        //returns points

        return pointsBalance
    }

    function makePeakTrip(location, time) {
        //set peak hours trip
        //takes two parameters time and location
        //original set amount increase by 25%
        if (location === "Khayelitsha" && time === "peak") {

            return sum_K += sum_K * 0.25;
        }

        if (location === "Dunoon" && time === "peak") {

            return sum_D += sum_D * 0.25;
        }

        if (location === "Mitchells_Plain" && time === "peak") {

            return sum_M += sum_M * 0.25;
        }

    }


    function makeOffPeak(location, time) {
        //set off peak price per trip
        //takes off_peak parameter
        //amount do not increase

        if (location === "Khayelitsha" && time === "off_peak") {

            return sum_K
        }

        if (location === "Dunoon" && time === "off_peak") {

            return sum_D
        }

        if (location === "Mitchells_Plain" && time === "off_peak") {

            return sum_M
        }
    }


    function totalTripsTaken() {
        //returns total trips taken

    }

    function totalAmountSpent() {
        //returns total amount spent

    }

    
    return {
        setPoints,
        getPoints,
        makePeakTrip,
        makeOffPeak,
        totalTripsTaken,
        totalAmountSpent,
    }

}