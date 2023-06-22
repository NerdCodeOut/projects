////////////////////////////
let finalYear = 0;
let finalDay = 0;
let finalMonth = 0;

const empty = function () {
  for (i = 0; i < 3; i++) {
    document.querySelectorAll(".in")[i].style.borderColor = "red";
  }
  for (let i = 0; i < 3; i++) {
    document.querySelectorAll(".empty")[i].classList.remove("hidden");
  }
  for (let i = 0; i < 3; i++) {
    document.querySelectorAll("label")[i].style.color = "red";
  }
};
const invalid = function () {
  for (i = 0; i < 3; i++) {
    document.querySelectorAll(".in")[i].style.borderColor = "red";
  }
  for (let i = 0; i < 3; i++) {
    document.querySelectorAll("label")[i].style.color = "red";
  }
  for (let i = 0; i < 3; i++) {
    document.querySelectorAll(".invalid")[i].classList.remove("hidden");
  }
};
const results = function () {
  finalYear = 2023 - Number(document.querySelector(".year").value);
  console.log(finalYear);
  document.querySelector(".ans-0").textContent = `${finalYear}`;
  document.querySelector(".ans-0").style.fontSize = "100px";
  finalDay = 31 - Number(document.querySelector(".day").value);

  document.querySelector(".ans-2").textContent = `${finalDay}`;
  document.querySelector(".ans-2").style.fontSize = "100px";
  finalMonth = 12 - Number(document.querySelector(".month").value);

  document.querySelector(".ans-1").textContent = `${finalMonth}`;
  document.querySelector(".ans-1").style.fontSize = "100px";

  for (let i = 0; i < 3; i++) {
    document.querySelectorAll(".z")[i].classList.add("hh");
  }
};
const april = function () {
  for (i = 0; i < 3; i++) {
    document.querySelectorAll(".in")[i].style.borderColor = "red";
  }

  document.querySelector(".april").classList.remove("hidden");

  for (let i = 0; i < 3; i++) {
    document.querySelectorAll("label")[i].style.color = "red";
  }
};

document.querySelector(".btn").addEventListener("click", function () {
  const days = document.querySelector(".day").value;
  const years = document.querySelector(".year").value;
  const months = document.querySelector(".month").value;
  console.log(years);

  if (!years || !months || !days) {
    empty();
  } else if (years > 2023 || days > 31 || months > 12) {
    invalid();
  } else if (days === 31 && months === 4) {
    april();
  } else {
    results();
  }
});
