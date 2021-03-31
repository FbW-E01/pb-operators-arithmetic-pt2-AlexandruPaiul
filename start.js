
// Q1. In one night, a movie theater sells tickets for 6450 dollars.
//  Each ticket costs 15 dollars. How many tickets were sold? 
const cashFlow = 6450;
const price = 15;
const quantity = cashFlow/price;
console.log(`The quantity of tickets is ${quantity}`);

// Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
const incomeWeek=500;
console.log(incomeWeek*52);

// **Percentage**

// Q3. Calculate the percentage of 17/30. Expected output: number%
console.log(17/30*100);

// **Geometry Formulas** 

// Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.
console.log(4.75*4);

// Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
console.log(5+6+7);

// Q6. Calculate the area of a square. Each side is 5cm.
console.log(5*5);

// Q7. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
const triSideLength1 = 5;
const triSideLength2 = 6;
const triSideLength3 = 7;
const halfPerimeter = (triSideLength1 + triSideLength2 + triSideLength3) / 2;
const areaTriangle = Math.sqrt(halfPerimeter*(halfPerimeter-triSideLength1)*(halfPerimeter-triSideLength2)*(halfPerimeter-triSideLength3));
console.log(`Area of triangle = ${areaTriangle}cm²`);
// Q8. Calculate the volume of a cube. Length of each side is 9cm.
const vulumCube =9*9*9;
console.log(`The volume of a cube = ${vulumCube}`)

// **Consumer Formula**

// Q9. Calculate the three bills including tips:
// €22.35 + 10% tip
// €26.67 + 15% tip
// €35.92 + 20% tip
const bill1 = 22.35 + 0.1*22.35;
const bill2 = 26.67 + 0.15*26.67;
const bill3 = 35.92 + 0.2*35.92;
console.log(bill1,bill2,bill3);

// **Average** 

// Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
// What is Noemy's average hours worked per day?
const sumHour = (8+6+5+9+8+2+1+8.5+7+4)/10;
console.log(`Average hours worked per day = ${sumHour}`);

// Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took .
//  After he took his sixth math test, the average is now 85. What did he score on the sixth test?
// Expected output: Score in the sixth test: --.
const test6 = 85*6-420;
console.log(`Score in the sixth test: ${test6}`);

// Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments.
//  He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? 
// Expected output: James needs a minimum of --% to get an 80% average.
const minimPercentage = 9*80-8*78;
console.log(`James needs a minimum of ${minimPercentage}% to get an 80% average.`);