

/* Useful Functions */

//Check if it is a list
function checkList(list) {
    if (list.constructor !== Array) {
        throw new Error('It is not an array');
    }
    return true;

}


/* Basic Functions */

//Calculates the median
function median(numbers) {
    checkList(numbers);

    if (numbers.length == 0){
        throw new Error(`There are no numbers in this list`);
    }

    // Check if all in the list are numbers
    for (let item of numbers) {
        if (typeof item != 'number') {
            throw new Error(`${item} is not an number`);

        }
    }

    // Organize numbers
    numbers = numbers.sort((a, b) => {
        if (a > b) {
            return 1;
        }
        else if (a < b) {
            return -1;
        }
        return 0;
    });

    if (numbers.length % 2 == 0) {
        let _m = numbers.length / 2;
        return numbers[_m - 1] + numbers[_m];

    }
    else {
        return numbers[Math.floor(numbers.length / 2)];
    }

}

//Calculate the average
function average(numbers) {
    checkList(numbers);

    if (numbers.length == 0){
        throw new Error(`There are no numbers in this list`);
    }

    let _average = 0;
    for (let item of numbers) {
        if (typeof item == 'number') {
            _average += item;
        }
        else {
            throw new Error(`${item} is not an number`);

        }
    }

    _average = _average / numbers.length;
    return _average;

}

//Calculate the weighted average
function average_weighted(numbers, weights) {

    checkList(numbers);
    checkList(weights);

    if (numbers.length == 0){
        throw new Error(`There are no numbers in this list`);
    }

    if (numbers.length !== weights.length) {
        throw new Error(`Values ​​and Weights do not have the same quantities`);
    }

    let _average_num = 0;
    let _average_den = 0;
    let _average = 0;

    for (let x = 0; x < numbers.length; x++) {

        if (typeof numbers[x] !== 'number') {
            throw new Error(`${numbers[x]} is not an number`);
        }

        if (typeof weights[x] !== 'number') {
            throw new Error(`${weights[x]} is not an number`);
        }


        _average_num += numbers[x] * weights[x];
        _average_den += weights[x];

    }

    _average = _average_num / _average_den;

    return _average;

}

//Calculates the mode
function mode(numbers) {
    checkList(numbers);

    if (numbers.length == 0){
        throw new Error(`There are no numbers in this list`);
    }

    // Check if all in the list are numbers
    for (let item of numbers) {
        if (typeof item != 'number') {
            throw new Error(`${item} is not an number`);

        }
    }
    
    const frequency = {};

    for (item of numbers){

        if (item in frequency){
            frequency[item] ++;
        }
        else{
            frequency[item] = 0;
        }

    }

    let _moda = [];

    let lastBigger;
    for (const freq of  Object.keys(frequency)){
        if (_moda.length == 0){
            _moda.push(parseFloat(freq));
            lastBigger = frequency[freq];
            continue;
        }
        if (frequency[freq] > lastBigger){
            _moda=[parseFloat(freq)];
            lastBigger=frequency[freq];
        }
        else if (frequency[freq] == lastBigger){
            _moda.push(parseFloat(freq));
        }
    }

    if (_moda.length == 1){
        return _moda[0];
    }

    return _moda;
}

module.exports = {
    median,
    average,
    average_weighted,
    mode
}