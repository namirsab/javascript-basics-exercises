alert("Welcome to my amazing website!");

const username = prompt("What's your name?");

const CURRENT_YEAR = 2021;
const MY_YEAR_OF_BIRTH = 1991;

let yearOfBirth = Number(prompt("In which year were you born?"));

// In case they type a text instead of a number, we check for NaN
if (Number.isNaN(yearOfBirth)) {
  yearOfBirth = CURRENT_YEAR;
}

// In case they didn't type anything, or press cancel, we check for 0
if (yearOfBirth === 0) {
  yearOfBirth = CURRENT_YEAR;
}

const userAge = CURRENT_YEAR - yearOfBirth;
const myAge = CURRENT_YEAR - MY_YEAR_OF_BIRTH;

if (userAge < 10) {
  alert(
    `You are too young for this ${username}. Come back when you are older.`
  );
} else if (userAge >= 10 && userAge < 18) {
  const isUserWithAdult = confirm("Are you with an adult?");

  if (isUserWithAdult) {
    alert(
      `Welcome to my super website ${username}! Good that you are not alone!`
    );
  } else {
    alert(
      `You are too young for this ${username}. You need an adult next to you to continue.`
    );
  }
} else if (userAge >= 18) {
  if (userAge === myAge) {
    alert(`Welcome to my super website ${username}! We are the same age!`);
  } else {
    alert(`Welcome to my super website ${username}!`);
  }
}
