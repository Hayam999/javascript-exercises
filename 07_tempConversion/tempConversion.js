const convertToCelsius = function(fahrenheit) {
  c = (fahrenheit - 32) * (5/9);
  cToTheNearestOneDecimal =
   Math.round(c * 10) / 10;
   return cToTheNearestOneDecimal;

};

const convertToFahrenheit = function(clesius) {
  f = (clesius * (9/5)) + 32;
  fToTheNearestOneDecimal =
  Math.round(f * 10) / 10;
  return fToTheNearestOneDecimal;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
