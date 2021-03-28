const number = Number(prompt("Give me a number"));

if (number < 0) {
  alert(
    "You gave me a negative number, I can't calculate the summation for that!"
  );
} else {
  let sum = 0;
  for (let n = 1; n <= number; n++) {
    sum += n;
  }

  alert(`The summation from 1 to ${number} is: ${sum}`);
}
