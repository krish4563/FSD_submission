function validateForm() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = ""; // Clear previous errors

    // Check if any field is empty
    if (!username || !email || !phone || !password || !confirmPassword) {
        errorMessage.textContent = "All fields are required!";
        return false;
    }

    // Validate phone number
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        errorMessage.textContent = "Phone number must be 10 digits!";
        return false;
    }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]{3,}\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
        errorMessage.textContent = "Invalid email format!";
        return false;
    }

    // Validate password
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@])[A-Za-z\d&$#@]{7,}$/;
    if (!passwordRegex.test(password)) {
        errorMessage.textContent = "Password must be at least 7 characters long, contain at least one uppercase letter, one digit, and one special character (&, $, #, @).";
        return false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return false;
    }

    alert("Registration successful!");
    return true;
}
