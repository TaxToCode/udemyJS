// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(1991));

// PROBLEM 1:
//  We work for a company building a smart home thermometer.
//  Our most recent task is this: "Given an array of temperatures of one day,
//  calculate the temperature amplitude.
//  Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
//  -what is temp ampliltude? Answer : difeerence between highest and lowest temp
//  -How to compute max and min temperatures? :
//  -What's a sensor error? And what to do? :

// 2) Breaking up into sub-problems
//  - How to ignore errors?
//  - Find max value in temp array
//  - subtract min from max(amplitude) and return it

const calcTempAmplitude1 = function (temps) {
  let maxTemp = temps[0];
  let minTemp = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > maxTemp) maxTemp = curTemp;
    if (curTemp < minTemp) minTemp = curTemp;
  }

  const amplitude = maxTemp - minTemp;
  console.log(maxTemp, minTemp);
  return amplitude;
};

console.log(calcTempAmplitude1(temperatures));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

// const temperatures1 = [4, 6, -4, -10, 5, 2, 'error', 23, -10];
// const temperatures2 = [-16, 4, 5, 7, 11, 'error'];

// const calcTempAmplitude2 = function (temp1, temp2) {
//   const temps = temp1.concat(temp2);

//   let maxTemp = temps[0];
//   let minTemp = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > maxTemp) maxTemp = curTemp;
//     if (curTemp < minTemp) minTemp = curTemp;
//   }

//   const amplitude = maxTemp - minTemp;
//   console.log(`max = ${maxTemp}, min = ${minTemp}`);
//   return amplitude;
// };

// console.log(calcTempAmplitude2(temperatures1, temperatures2));

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celsius:')),
//   };
//   console.table(measurement);

//   //   console.log(measurement.value);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());
