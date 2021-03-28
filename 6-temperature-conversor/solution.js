let temperatureSourceType = prompt(
  "From which temperature unit what you convert from? [c]elsius or [f]ahrenheit"
);

while (temperatureSourceType !== "c" && temperatureSourceType !== "f") {
  temperatureSourceType = prompt(
    "Invalid: From which temperature unit what you convert from? [c]elsius or [f]arenheit"
  );
}

let sourceTemperature = Number(
  prompt("Give me the temperature. You can use '.' for decimals")
);

if (Number.isNaN(sourceTemperature)) {
  alert("You gave me a wrong number");
} else {
  let targetTemperature;
  switch (temperatureSourceType) {
    case "c":
      targetTemperature = sourceTemperature * (9 / 5) + 32;
      alert(`${sourceTemperature} celsius -> ${targetTemperature} farhenheit`);
      break;
    case "f":
      targetTemperature = (sourceTemperature - 32) * (5 / 9);
      alert(`${sourceTemperature} farhenheit -> ${targetTemperature} celsius`);
      break;
  }
}
