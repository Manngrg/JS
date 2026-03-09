// const { useCallback } = require("react");

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter). 
Your tasks: 
1. Store Mark's and John's mass and height in variables 
2. Calculate both their BMIs using the formula (you can even implement both 
versions) 
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data: 
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall. 
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.
---------------------------------------------
Coding Challenge #2 
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it. 
Your tasks: 
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's 
BMI (28.3) is higher than John's (23.9)!"
*/
const markHeight = 1.69;
const markWeight = 95;

const johnHeight = 1.95;
const johnWeight = 85;

const BMIMark = markWeight / markHeight ** 2;
const BMIJohn = johnWeight / johnHeight ** 2;

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIJohn, BMIMark, markHigherBMI);

console.log(BMIMark, BMIJohn);

if (BMIJohn > BMIMark) {
    console.log(`${BMIJohn} of John BMI is higher than ${BMIMark}`)
} else {
    console.log(` ${BMIMark} of Mark is higher`);

}

/*
Coding Challenge #3 
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy! 
Your tasks: 
1. Calculate the average score for each team, using the test data below 
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score) 
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks 
�
� 
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy 
Test data: 
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 
*/

const calculateAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphin = calculateAverage(44, 23, 71);
const scoreKoalas = calculateAverage(65, 54, 49);
console.log(scoreDolphin, scoreKoalas);


const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);

    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`koalas win (${avgKoalas} vs ${avgDolphins})`);

    } else {
        console.log('no team wins');

    }
}

checkWinner(scoreDolphin, scoreKoalas);


/* number 4 =>
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%. 
Your tasks: 
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100 
2. And now let's use arrays! So create an array 'bills' containing the test data 
below 
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before 
4. Bonus: Create an array 'total' containing the total values, so the bill + tip 
Test data: 125, 555 and 44

*/

function tipCalculator(bill) {

    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

}
// let bill = 900;
// let tip = tipCalculator(bill);
// important to pass bill as argument.
// let sum = bill + tip;
// console.log(`The Bill is ${bill} and the tip is ${tip}, please pay total of ${sum}`);

const bills = [123, 55, 44];
const tip = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])]


const total = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];
console.log(bills, tip, total);


/*
Coding Challenge #3 
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter) 
Your tasks: 
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith) 
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method 
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!" 
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall. 
*/

console.log('challenge 3');

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const john = {
    fullName: 'john wick',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

//"John's BMI (28.3) is higher than Mark's (23.9)!"

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)

}


console.log('--------challenge 4 -----');

/*
Your tasks: 
1. Create an array 'bills' containing all 10 test bill values 
2. Create empty arrays for the tips and the totals ('tips' and 'totals') 
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for 
loop to perform the 10 calculations! 
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52 
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays 

*/
const calArrayTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bill.length; i++) {
    const tip = calArrayTip(bill[i]);
    tips.push(tip);
    totals.push(tip + bill[i]);
}

console.log(bill, tips, totals);

console.log('--------------bonus----------------');

const calcArrayAvg = function (arr) {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;


}
console.log(calcArrayAvg([2, 3, 7]));
console.log(calcArrayAvg[total]);

/*

dev skill code challenge 1:

Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]

*/

//array transformed to string separated by dots
// what is the x days? -> its current index of array +1
// transform each element to string with Celsius
// string needday i.e index+1





let data1 = [17, 21, 23];
let data2 = [12, -5, -5, 0, 4];

let printForecast = function (arr) {

    let str = '';

    for (let i = 0; i < arr.length; i++) {

        str = str + `${arr[i]} degree Celsius in ${i + 1} days... `
    }
    console.log('...' + str);
}

printForecast(data1, data2);
















