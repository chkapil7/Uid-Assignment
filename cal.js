// Basic Calculator
let basicDisplay = document.getElementById('basic-display');
let basicCalculation = '';

function clearDisplay() {
  basicDisplay.value = '';
  basicCalculation = '';
}

function appendToDisplay(value) {
  basicDisplay.value += value;
  basicCalculation += value;
}

function calculateResult() {
  try {
    basicCalculation = eval(basicCalculation);
    basicDisplay.value = basicCalculation;
  } catch (error) {
    basicDisplay.value = 'Error';
    basicCalculation = '';
  }
}

// Currency Converter
let inrAmount = document.getElementById('inr-amount');
let usdResult = document.getElementById('usd-result');
let convertButton = document.getElementById('convert-button');

convertButton.addEventListener('click', function () {
  let inr = parseFloat(inrAmount.value);
  let usd = inr / 74.5; // Assuming the exchange rate is 1 INR to 0.0134 USD
  usdResult.value = usd.toFixed(2);
});

// Age Calculator
let birthdate = document.getElementById('birthdate');
let ageResult = document.getElementById('age-result');
let calculateAgeButton = document.getElementById('calculate-age-button');

calculateAgeButton.addEventListener('click', function () {
  let birthDate = new Date(birthdate.value);
  let today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  ageResult.textContent = 'Your age is: ' + age + ' years';
});

// Income Tax Calculator
let incomeAmount = document.getElementById('income-amount');
let taxResult = document.getElementById('tax-result');
let calculateTaxButton = document.getElementById('calculate-tax-button');

calculateTaxButton.addEventListener('click', function () {
  let income = parseFloat(incomeAmount.value);
  let tax = 0;

  if (income <= 250000) {
    tax = 0;
  } else if (income <= 500000) {
    tax = (income - 250000) * 0.05;
  } else if (income <= 1000000) {
    tax = 250000 * 0.05 + (income - 500000) * 0.2;
  } else {
    tax = 250000 * 0.05 + 500000 * 0.2 + (income - 1000000) * 0.3;
  }

  taxResult.textContent = 'Tax amount: INR ' + tax.toFixed(2);
});

// GPA Calculator
let totalCredits = document.getElementById('total-credits');
let gradeList = document.getElementById('grade-list');
let gpaResult = document.getElementById('gpa-result');
let calculateGpaButton = document.getElementById('calculate-gpa-button');

calculateGpaButton.addEventListener('click', function () {
  let credits = parseInt(totalCredits.value);
  let grades = gradeList.value.split(',');
  let totalGradePoints = 0;

  if (grades.length !== credits) {
    gpaResult.textContent = 'Invalid input';
  } else {
    for (let i = 0; i < credits; i++) {
      let grade = parseFloat(grades[i]);
      totalGradePoints += grade;
    }

    let gpa = totalGradePoints / credits;
    gpaResult.textContent = 'GPA: ' + gpa.toFixed(2);
  }
});
