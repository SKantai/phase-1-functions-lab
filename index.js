// Code your solution in this file!

function distanceFromHqInBlocks(customerLocation) {
    const hqLocation = 42;  
    const distance = Math.abs(customerLocation - hqLocation);
    return distance;
}

function distanceFromHqInFeet(customerLocation){
    const hqLocation = 42;  
    const distance = Math.abs(customerLocation - hqLocation);
    const feet = distance * 264;
    return feet;
    

}

function distanceTravelledInFeet(start, destination){
    const block = Math.abs(destination - start);
    const feetTravel = block * 264
    return feetTravel;
}
function calculatesFarePrice(start, destination) {
    var distanceInFeet =distanceTravelledInFeet(start,destination);
    if(distanceInFeet <= 400) {
        return 0;
    }
    else if(distanceInFeet>400 && distanceInFeet <= 2000){
        return((distanceInFeet -400)*2)/100;
    }
    else if (distanceInFeet >2000 && distanceInFeet <= 2500){
        return 25;
    }
    else if(distanceInFeet > 2500){
        return "cannot travel that far";
    }
}