// code your solution here
// function razzle(lawyer = "Billy", target ="'em") {
//     console.log(`${lawyer} razzle-dazzle ${target}!`);
// }


function saturdayFun(target="roller-skate") {
    return (`This Saturday, I want to ${target}!`)    
}

// const fn = function () {
//     console.log("Yet more razzling");
//   };

function mondayWork(response="go to the office") {
    return (`This Monday, I will ${response}.`)
}

function wrapAdjective(vf = '*') {
    // function(vf = '*') {
    return function(adjective = 'special') {
        return(`You are ${vf}${adjective}${vf}!`)
        
        };
    // };
}