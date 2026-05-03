const button =document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
} else {
    document.body.classList.remove("light");
}

button.onclick = function () {
    document.body.classList.toggle ("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme","light");
    } else {
        localStorage.setItem("theme","dark");
    }
}