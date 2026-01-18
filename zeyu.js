// Welcome Alert
window.onload = function() {
    alert("Welcome to Cyber Ziya's Website!");
}

// Visit YouTube Button
function visitYouTube() {
    window.open("https://www.youtube.com/@cyberziya", "_blank");
}

function checkLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // Simple check (example: username = admin, password = 1234)
    if(user === "admin" && pass === "1234") {
        alert("Login Successful!");
        document.getElementById('login-msg').innerText = "Welcome, " + user + "!";
    } else {
        alert("Login Failed!");
        document.getElementById('login-msg').innerText = "Invalid username or password!";
    }
    return false; // prevent page reload
}

// Contact Me Button
function contactMe() {
    window.location.href = "mailto:cyberziya96@gmail.com";
}
function rate(star) {
    const stars = document.querySelectorAll('.stars span');
    stars.forEach((s, index) => {
        if(index < star) {
            s.classList.add('selected');
        } else {
            s.classList.remove('selected');
        }
    });
    document.getElementById('rating-value').innerText = `You rated: ${star} star(s)`;
}