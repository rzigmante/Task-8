/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
let a = 40;
let b = 5;

function CalculatorES5() {
  this.sum = function (a, b) {
    return a + b;
  };

  this.subtraction = function (a, b) {
    return a - b;
  };

  this.multiplication = function (a, b) {
    return a * b;
  };

  this.division = function (a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  };
}
const calculator = new CalculatorES5();
console.log("Skaičių suma:", calculator.sum(a, b));
console.log("Skaičių atimtis:", calculator.subtraction(a, b));
console.log("Skaičių daugyba:", calculator.multiplication(a, b));
console.log("Skaičių dalyba:", calculator.division(a, b));
