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
    return ((Math.abs(destination - start) * 264) - 400);
}
    if (calculatesFarePrice <= 400) {
    console.log('gives customer a free sample')
} else if (calculatesFarePrice > 400 && calculatesFarePrice <= 2000) {
    console.log((calculatesFarePrice) * .2)
} else if (calculatesFarePrice > 2000) {
    console.log((calculatesFarePrice) + 25)
} else {
    calculatesFarePrice > 2500;
    console.log('cannot travel that far');
}





