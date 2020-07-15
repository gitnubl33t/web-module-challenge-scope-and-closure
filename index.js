// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *
 * Counter 1 has the variable "count" declared within the scope of the counterMaker() function, while Counter 2 has the variable declared outside of the function, within global scope.
 *
 * 2. Which of the two uses a closure? How can you tell?
 *
 * counter2 is a closure because it reaches outside its scope to find "count" because it doesn't exist inside of return count++ scope when "count" is referenced.
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *
 * counter1 would be prefereable when we only want "count" to be declared within the function. counter2 would be preferable when we want "count" to be accessible by functions globally.
 *
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  let inningPoints = Math.floor(Math.random() * 3);
  return inningPoints;
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(callback, inningNum) {
  let homeScore = 0;
  let awayScore = 0;
  let scoreObj = {};

  for (let i = 1; i <= inningNum; i++) {
    homeScore = homeScore + callback();
    awayScore = awayScore + callback();
  }

  scoreObj["Home"] = homeScore;
  scoreObj["Away"] = awayScore;

  return scoreObj;
}

// console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore(callback) {
  let inningScore = { home: 0, away: 0 };
  inningScore.home = inningScore.home + callback();
  inningScore.away = inningScore.away + callback();
  return inningScore;
}

function scoreboard(callback, callback2, inningNum) {
  let finalScore = { home: 0, away: 0 };

  for (let i = 1; i <= inningNum; i++) {
    let inningScore = { home: 0, away: 0 };
    inningScore = callback2(callback);

    finalScore.home = finalScore.home + inningScore.home;
    finalScore.away = finalScore.away + inningScore.away;

    switch (i) {
      case 1:
        console.log(
          `${i}st inning: Away ${finalScore.away} - Home ${finalScore.home}`
        );
        break;
      case 2:
        console.log(
          `${i}nd inning: Away ${finalScore.away} - Home ${finalScore.home}`
        );
        break;
      case 3:
        console.log(
          `${i}rd inning: Away ${finalScore.away} - Home ${finalScore.home}`
        );
        break;
      default:
        console.log(
          `${i}th inning: Away ${finalScore.away} - Home ${finalScore.home}`
        );
    }
  }

  console.log(
    `The final score is Away ${finalScore.away} - Home ${finalScore.home}`
  );
}

scoreboard(inning, getInningScore, 9);
