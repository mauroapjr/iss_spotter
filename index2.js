const { nextISSTimesForMyLocation } = require('./iss_promissed');
const { printPassTimes } = require('./index');



nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

  