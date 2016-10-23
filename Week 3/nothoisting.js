/*****************************************
**  Filename: nothoisting.js
**  Author: Spencer Moran
**  Class:  CS290
**  Date: 10/15/2016
**  Description: Hoisting Demonstration
**    THIS CODE DOES NOT WORK BECAUSE YOU 
**    CANNOT HOIST A FUNCTION DECLARED AS
**    A VARIABLE.
******************************************/
cantHoistThis("\nCan't hoist this.");

var cantHoistThis = function(x) {
    console.log(x);
};


cantHoistThis("Da na na na");
cantHoistThis("doot doot");
cantHoistThis("Dun, dun");
cantHoistThis(1);
cantHoistThis(2);