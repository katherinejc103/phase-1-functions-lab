// Part one
function distanceFromHqInBlocks (someValue) {
    return Math.abs(someValue - 42);
}

// Part Two
function distanceFromHqInFeet (someValue) {
    return (Math.abs(someValue - 42) * 264);
}

//Part three
function distanceTravelledInFeet (start, destination) {
    return (Math.abs(destination - start) * 264);
}

//part four
function calculatesFarePrice (start, destination) {
    //return ((Math.abs(destination - start) * 264))
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return ((distance - 400) * .02);
    } else if (distance > 2000 && distance < 2500) {
      return 25;   
    } else { 
       return 'cannot travel that far';
    }}



