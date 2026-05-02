const button = document.getElementById("theme-switch");

// لما الصفحة تفتح
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
} else {
  document.body.classList.remove("light"); // خليه دارك
}

// لما تدوسي على الزرار
button.onclick = function () {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
};




// const button = document.getElementById("theme-switch");
// if (localStorage.getItem("theme") === "dark") {
//     document.body.classList.add("dark");
// }
// button.onclick = function () {
//     document.body.classList.toggle("light");

//     if (document.body.classList.contains("light")) {
//     localStorage.setItem("theme", "light");
//     } else {
//     localStorage.setItem("theme", "dark");
//     }
// };


