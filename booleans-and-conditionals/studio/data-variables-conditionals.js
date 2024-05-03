// Initialize Variables below
let date = "Monday 2019-03-18"
let time = 	"10:05:34 AM"
let astronautCount = 7;
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
const crewMassKg =	astronautCount * averageAstronautMassKg;
//let 
let fuelMassKg = 760000;
let shuttleMassKg =	74842.31;
const totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
const maximumMassLimit = 850000;
const fuelTempCelsius	= -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
let fuelLevel =fuelMassKg/760000 * 100
let weatherStatus= "clear";
let preparedForLiftOff = true;
let launchReady = false;


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
 if (astronautCount <=7) {
        launchReady = true

} else {
    launchReady = false
    console.log("No. of Astronauts exceed the limit, Not ready to launch")
}

// add logic below to verify all astronauts are ready
if (launchReady && astronautStatus ==='ready'){
   

} else {
    launchReady = false
    console.log("Astronauts not ready,Not ready to launch")
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit){
    launchReady = true

} else {
    launchReady = false
    console.log("The total mass does not exceed the maximum limit of 850000, Not ready to launch")
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if(fuelTempCelsius >= -300 && fuelTempCelsius <= -150){
    launchReady =  true

} else {
    launchReady = false
    console.log("Fuel temperature not feasible,Not ready to launch ")

}
// add logic below to verify the fuel level is at 100%
if (fuelLevel ===100.00) {
    launchReady = true

} else {
       launchReady = false
       console.log("Fuel not 100%,Not ready to launch")

}
// add logic below to verify the weather status is clear
if (weatherStatus ==="clear"){
    launchReady = true

} else {
    launchReady = false
    console.log("Weather not clear,Not ready to launch")

}
// Verify shuttle launch can proceed based on above conditions
if (launchReady = true) {
    console.log(" Date:Monday 2019-03-18 \n Time: 10:05:34 AM \n Astronaut Count: 7  \n Astronaut Status: ready \n Fuel Mass: 760000Kg \n Shuttle Mass: 74842.31Kg")
    console.log(" Total Mass ",totalMassKg)
    console.log(" Fuel Temperature",fuelTempCelsius,"°C")
    console.log(" Weather Status", weatherStatus)
    console.log(" Have a Safe Trip Astrounauts!")
} else {
    
    console.log(" Shut down the launch operations.")
}