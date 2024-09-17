const { average, median, average_weighted, mode } = require('./index');

//test average

console.log(average([
    1, 7, 8, 4,
]))

//test median
console.log(median([
    1, 7, 8, 4, 9
]))

//test average_weighted
console.log(average_weighted([
1, 23, 3
],  [
    4, 
    5, 1
]))

//test mode
console.log(mode([
    1, 2, 3, 4, 1, 3, 4, 5, 1, 3, 1.2, 1.2, 1.2, 1.2, 3
]))