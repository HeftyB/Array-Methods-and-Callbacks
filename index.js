import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */





fifaData.forEach(function(item){
    if (item.Year === 2014 && item.Stage === "Final") {
        console.log(item["Home Team Name"]);
        console.log(item["Away Team Name"]);
        console.log(item["Home Team Goals"]);
        console.log(item["Away Team Goals"]);
        console.log(item["Win conditions"]);
    }
});





/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    let finalsArray = [];
    data.forEach(function(item){
        if (item.Stage === "Final") {
            finalsArray.push(item);
        }
    });

    return finalsArray;

};

getFinals(fifaData);

/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {

    const years = callback.map(function (item) {
        return item.Year;
    });
    return years; 

};

getYears(getFinals(fifaData));



/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {

    let winners = [];
    callback.forEach(function (item) {
        if (item["Home Team Goals"] > item["Away Team Goals"]) {
            winners.push(item["Home Team Name"]);
        }

        else if (item["Home Team Goals"] < item["Away Team Goals"]) {
            winners.push(item["Away Team Name"]);
        }

        else {
            winners.push("TIE");
        }
    });

    return winners;

};

getWinners(getFinals(fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getAllWinners(callback1, callback2) {
    
    let newArray = [];
    for (let i = 0; i < callback1.length; i++) {
        newArray.push(`in year ${callback1[i]}, ${callback2[i]} won the world cup`);
    }
    return newArray;
};

getAllWinners(getYears(getFinals(fifaData)), getWinners(getFinals(fifaData)));

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamIn) {

 
    let totalWins = data.reduce(function(accum, item){
        if (item[ "Home Team Initials" ] === teamIn && item[ "Home Team Goals" ] > item[ "Away Team Goals" ]) {
            return accum + 1;
        } else if (item[ "Away Team Initials" ] === teamIn && item[ "Away Team Goals" ] > item[ "Home Team Goals" ]){
            return accum + 1;
        }
        
        return accum 
    }, 0);
    
    return totalWins;
};

console.log(getCountryWins(getFinals(fifaData), "BRA"));


/* Task 8: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Task 9: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();


/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();


/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */