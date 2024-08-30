const form = document.querySelector("form");
//This use well give you empty
// const height = parseInt(document.querySelector("#height").value);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  /*
  if (height === "" || height < 0 || isNaN(height)) {
    // 1.:- results.innerHTML = "Please give a valid height";/
    results.innerHTML = `Please give a valid height ${height}`;
  }
  // 2.:-  results.innerHTML = `${height}`;
  if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  */
  /*
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
  */
  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `You have a Under weight. Your BMI is <span>${bmi}</span>`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
      results.innerHTML = `You have a Normal weight. Your BMI is <span>${bmi}</span>`;
    } else if (bmi >= 25 && bmi < 29.9) {
      results.innerHTML = `You have a Over weight. Your BMI is <span>${bmi}</span>`;
    } else {
      //show the result
      results.innerHTML = `You are Obese. Your BMI is <span>${bmi}</span>`;
    }
  }
});
