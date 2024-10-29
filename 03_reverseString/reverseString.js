const reverseString = function(string) {
reversed = []
arrString = string.split("");
len = string.length
for (i = 1; i <= len; i++) {
    reversed.push(arrString[len - i]);
}
return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
