// Age Calculator
const ageCalculateBtn = document.querySelector(".claculate_age");
const ageOutputYears = document.querySelector(".age_years");
const ageOutputMonths = document.querySelector(".age_months");
const ageOutputHours = document.querySelector(".age_hours");
const ageOutputMinutes = document.querySelector(".age_minutes");
const ageOutputSeconds = document.querySelector(".age_seconds");

ageCalculateBtn.addEventListener("click", calculateAge);

function calculateAge() {
  const dobInput = document.querySelector("#dob").value;
  console.log(dobInput);
  const dob = new Date(dobInput);
  console.log(dob);
  const currentDate = new Date();
  console.log(currentDate);
  if (isNaN(dob)) {
    alert("Please enter a valid date of birth.");
    return;
  }
  const ageInMilliseconds = currentDate - dob;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;
  const ageInYears = ageInDays / 365.25;

  const years = Math.floor(ageInYears);
  const months = Math.floor((ageInYears - years) * 12);
  const hours = Math.floor((ageInDays - Math.floor(ageInDays)) * 24);
  const minutes = Math.floor((ageInHours - Math.floor(ageInHours)) * 60);
  const seconds = Math.floor((ageInMinutes - Math.floor(ageInMinutes)) * 60);

  ageOutputYears.textContent = `Years: ${years}`;
  ageOutputMonths.textContent = `Months: ${months}`;
  ageOutputHours.textContent = `Hours: ${hours}`;
  ageOutputMinutes.textContent = `Minutes: ${minutes}`;
  ageOutputSeconds.textContent = `Seconds: ${seconds}`;
}

// Distance Converter
const convertDistanceBtn = document.querySelector(".convert_distance");
const distanceOutputKm = document.querySelector(".distance_in_km");
const distanceOutputMeters = document.querySelector(".distance_in_meters");
const distanceOutputInches = document.querySelector(".distance_in_inches");

convertDistanceBtn.addEventListener("click", convertDistance);

function convertDistance() {
  const distanceInput = parseFloat(document.querySelector("#distance").value);
  const unitSelect = document.querySelector("#unit");
  const unitInput = unitSelect.options[unitSelect.selectedIndex].value;

  if (isNaN(distanceInput)) {
    alert("Please enter a valid distance value.");
    return;
  }

  let distanceInKm, distanceInMeters, distanceInInches;

  switch (unitInput) {
    case "km":
      distanceInKm = distanceInput;
      distanceInMeters = distanceInput * 1000;
      distanceInInches = distanceInput * 39370.08;
      break;
    case "m":
      distanceInKm = distanceInput / 1000;
      distanceInMeters = distanceInput;
      distanceInInches = distanceInput * 39.37;
      break;
    case "in":
      distanceInKm = distanceInput / 39370.08;
      distanceInMeters = distanceInput / 39.37;
      distanceInInches = distanceInput;
      break;
    default:
      alert("Please select a valid unit.");
      return;
  }

  distanceOutputKm.textContent = `Distance in KM: ${distanceInKm.toFixed(2)}`;
  distanceOutputMeters.textContent = `Distance in Meters: ${distanceInMeters.toFixed(
    2
  )}`;
  distanceOutputInches.textContent = `Distance in Inches: ${distanceInInches.toFixed(
    2
  )}`;
}
