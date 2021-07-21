function distanceFromHqInBlocks(someBlocks) {
    return (Math.abs (someBlocks - 42));
}
function distanceFromHqInFeet(someBlocks) {
    return (Math.abs (someBlocks - 42)) * 264;
}
function distanceTravelledInFeet(pointA, pointB) {
    return (Math.abs (pointA - pointB)) * 264;

}
let farePrice;
function calculatesFarePrice(pointA, pointB) {
    if (distanceTravelledInFeet (pointA, pointB) < 400) {
        return 0;
    } else if (distanceTravelledInFeet (pointA, pointB) > 400 && distanceTravelledInFeet (pointA, pointB) <= 2000) {
        return (distanceTravelledInFeet (pointA, pointB) - 400) * 0.02;
    } else if (distanceTravelledInFeet (pointA, pointB) > 2000 && distanceTravelledInFeet (pointA, pointB) <= 2500) {
        return 25;
    } else if (distanceTravelledInFeet (pointA, pointB) > 2500) {
        return "cannot travel that far";
    }
} 