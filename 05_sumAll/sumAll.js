const sumAll = function(num1, num2) {
    sum = 0;
    if (num1 < 0 || num2 < 0
        || (! Number.isInteger(num1))
        || (! Number.isInteger(num2))) {
            return "ERROR";
        }
    else if (num2 < num1) {
        n1 = num2;
        n2 = num1;
    }
    else {
        n1 = num1;
        n2 = num2;
    }

    for (i = n1; i <= n2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
