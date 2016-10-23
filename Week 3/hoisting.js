/***************************************
**  Filename: hoisting.js
**  Author: Spencer Moran
**  Class:  CS290
**  Date: 10/15/2016
**  Description: Hoisting Demonstration
****************************************/

hoistMe(2);
hoistMe(4);
hoistMe(6);
hoistMe(8);

function hoistMe(x) {
    console.log(x*x);
};

var cantHoistThis = function(x) {
    console.log(x);
};

cantHoistThis("\nCan't hoist this.");
cantHoistThis("Da na na na");
cantHoistThis("doot doot");
cantHoistThis("Dun, dun");
cantHoistThis(1);
cantHoistThis(2);