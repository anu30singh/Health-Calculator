window.onload=()=> {
    const button = document.querySelector('#btn');
    button.addEventListener('click', calculateBMI)
}

function calculateBMI() {
    //for fetching values
   const height = document.querySelector('#height').value;
   const weight = document.querySelector('#weight').value;
   const result = document.querySelector('#result');
   if(!height || isNaN(height) || height <= 0) {
      result.innerHTML = "Please give valid height";
      return;
} else if(!weight || isNaN(weight) || weight <= 0) {
      result.innerHTML = "Please give valid weight";
      return;
}

const bmi = (weight / ((height * height) / 10000)).toFixed(2);
if(bmi < 18.6) {
    result.innerHTML = `Underweight: <span>${bmi}</span>`;
} else if(bmi >= 18.6 && bmi < 24.9) {
    result.innerHTML = `Normal: <span>${bmi}</span>`;
} else if(bmi >= 24.9 && bmi < 30) {
    result.innerHTML = `Overweight: <span>${bmi}</span>`;
} else if(bmi >= 30) {
    result.innerHTML = `Obese: <span>${bmi}</span>`;
} else {
    result.innerHTML = 'Extream Obesity: <span>${bmi}</span>'
}
}