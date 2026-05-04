const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
} else {
    document.documentElement.removeAttribute('data-theme');
}
const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'light') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        } else{
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
}
function validateContact(event) {
    if (event) event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();
    let msg = document.getElementById("msg");

    if (name === "" || email === "" || phone === "" || message === "") {
        msg.innerText = "All fields are required!";
        msg.style.color = "#ff4d4d"; 
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        msg.innerText = "Please enter a valid Email (e.g., test@example.com)";
        msg.style.color = "#ff4d4d";
        return;
    }
    if (phone.length < 11 || isNaN(phone)) {
        msg.innerText = "Please enter a valid Phone Number (at least 11 digits)";
        msg.style.color = "#ff4d4d";
        return;
    }
    if (message.length < 10) {
        msg.innerText = "Your message must be at least 10 characters long";
        msg.style.color = "#ff4d4d";
        return;
    }

    localStorage.setItem("contactName", name);
    localStorage.setItem("contactEmail", email);
    localStorage.setItem("contactPhone", phone);
    localStorage.setItem("contactMessage", message);

    msg.innerText = "Your message has been sent successfully! We will contact you soon.";
    msg.style.color = "#28a745";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
}