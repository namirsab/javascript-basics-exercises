let operation = prompt(
  "Which operation you want to do? [+, -, /, *] Type exit or cancel to finish"
);

while (operation !== null && operation !== "exit") {
  const operand1 = Number(prompt("First operand ="));
  const operand2 = Number(prompt("Second operand = "));

  switch (operation) {
    case "+":
      alert(operand1 + operand2);
      break;
    case "-":
      alert(operand1 - operand2);
      break;
    case "*":
      alert(operand1 * operand2);
      break;
    case "/":
      alert(operand1 / operand2);
      break;
  }

  operation = prompt(
    "Which operation you want to do? [+, -, /, *] Type exit or cancel to finish"
  );
}
