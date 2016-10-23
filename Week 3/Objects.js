/*****************************************
**  Filename: Objects.js
**  Author: Spencer Moran
**  Class:  CS290
**  Date: 10/15/2016
**  Description: Object Demonstration.
******************************************/

var thing1 = {a: 1, b: 2, c: 3};
var thing2 = {a: 1, b: 2, c: 3};
var thing3 = {a: 1, b: 2, c: 3, d: 4};
var thing4 = {e: 1, b: 2, c: 3, d: 4};
var thing5 = {a: 2, b: 2, c: 3};

/*
*   Function: deepEqual
*   Description: takes two objects, and returns true only if they are the same value
*    or are objects with the same properties whose values are also equal 
*    when compared with a recursive call to deepEqual.
*/

function deepEqual(obj1, obj2, rFlag) {
    rFlag = rFlag || false;
    if (typeof obj1 === 'object' && obj1 != null)
        {
            //console.log("line 21");
            if (typeof obj2 === 'object' && obj2 != null)
                {                
                    for (var x in obj1)
                        {                        
                            if (obj1.x === obj2.x)
                                {
                                    if (obj1[x] != obj2[x])
                                    {   
                                       return false;
                                    }                                    
                                }                                
                            else 
                            {
                                return false;
                            }
                        }
                        if (rFlag == true)  //if it's the second object.
                            {                               
                                return true;
                            }
                        else 
                            {
                                if (deepEqual(obj2, obj1, true))
                                    {
                                        return true;
                                    }
                                return false;                                 
                            }                                   
                }
            return false;
        }
    else 
    {
        return false;
    }
};

console.log(deepEqual(thing1,thing2));  //returns true
console.log(deepEqual(thing1,thing3));  //returns false
console.log(deepEqual(thing1,thing4));  //returns false
console.log(deepEqual(thing1,thing5));  //returns false
//deepEqual(thing1,thing2);  
//deepEqual(thing1, thing3);  //returns false
//deepEqual(thing1, thing4);  //returns false
//deepEqual(thing1, thing5);  //returns false