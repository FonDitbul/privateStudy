// before 
function rating(aDriver) {
  return moreThanFiveLateDeliveries(aDriver) ? 2: 1;
}

function moreThanFiveLateDeliveries(aDriver) {
  return aDriver.numberOfLateDeliveries > 5;
}

// after

function rating(aDriver) {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1
}
