const repeatString = function(string, num) {
    result = "";
    error = "ERROR";
    if (num < 0) {
        return error;
    }
    for(i = 0; i < num; i++) {
        result += string;
    }
    return result;

};

// Do not edit below this line
module.exports = repeatString;
