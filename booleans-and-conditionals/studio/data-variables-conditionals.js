// Initialize Variables below
let date = "Monday 2019-03-18"
let time = 	"10:05:34 AM"
let astronautCount = 7;
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg =	astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg =	74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius	= -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 100
let weatherStatus= "clear";
let preparedForLiftOff = true;


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
 if (astronautCount <= 7) {
        launchReady = true

} else {
    launchReady = false
}

// add logic below to verify all astronauts are ready
if (astronautStatus = 'ready'){
    launchReady = true

} else {
    launchReady = false
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit){
    launchReady = true

} else {
    launchReady = false
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if(fuelTempCelsius >= -300 || fuelTempCelsius <= -150){
    launchReady =  true

} else {
    launchReady = false

}
// add logic below to verify the fuel level is at 100%
if (fuelLevel = 100) {
    launchReady = true

} else {
       launchReady = false

}
// add logic below to verify the weather status is clear
if (weatherStatus = "Clear"){
    launchReady = true

} else {
    launchReady = false

}
// Verify shuttle launch can proceed based on above conditions
if (launchReady = true) {
    console.log(" Date:Monday 2019-03-18 \n Time: 10:05:34 AM \n Astronaut Count: 7  \n Astronaut Status: ready \n Fuel Mass: 760000Kg \n Shuttle Mass: 74842.31Kg")
    console.log(" Total Mass ",totalMassKg)
    console.log(" Fuel Temperature",fuelTempCelsius,"°C")
    console.log(" Weather Status", weatherStatus)
    console.log(" Have a Safe Trip Astrounauts!")
} else {
    launchReady =false
    console.log(" Shut down the launch operations.")
}