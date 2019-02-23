// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  return Math.abs(distance - 42);
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(destination1, destination2) {
  return Math.abs((destination1 - destination2) * 264)
}


function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination)

  if (distance <= 400) {
    return 0
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02
  }
}
