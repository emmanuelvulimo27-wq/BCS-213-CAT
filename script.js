// ============================================
// QUESTION 5: JAVASCRIPT PROGRAMMING
// ============================================

// Q5 a) Declare 3 variables and display with console.log()
let studentName = "Vulimo Emmanuel";
let registrationNumber = "COM/B/01-00157/2025";
let academicProgramme = "Bachelor of Science in Computer Science";

console.log("Student Name: " + studentName);
console.log("Registration Number: " + registrationNumber);
console.log("Programme: " + academicProgramme);

// Q5 b) Function calculateGrade()
function calculateGrade(score) {
    if (score >= 70 && score <= 100) {
        return "A";
    } else if (score >= 60 && score <= 69) {
        return "B";
    } else if (score >= 50 && score <= 59) {
        return "C";
    } else if (score >= 40 && score <= 49) {
        return "D";
    } else {
        return "E";
    }
}

// Q5 c) Call function with 75 and display with alert()
let grade = calculateGrade(75);
alert("Grade for score 75 is: " + grade);

// ============================================
// QUESTION 6 & 7: DOM, EVENT HANDLING & VALIDATION
// ============================================

// Q6 a) Retrieve the form from HTML
let form = document.getElementById("registrationForm");

// Q6 b) Add event listener for submit
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page from reloading

    // Q6 c) Retrieve student's name and registration number from form
    let fullName = document.getElementById("fullName").value.trim();
    let regNumber = document.getElementById("registrationNumber").value.trim();
    let email = document.getElementById("email").value.trim();
    let programme = document.getElementById("programme").value;

    // Q7 a) Validation - Name and Reg Number must not be empty
    if (fullName === "" || regNumber === "") {
        alert("Error: Full Name and Registration Number must not be empty!");
        return;
    }

    // Q7 b) Validation - Email must follow correct format
    // Simple check: must contain @ and .
    if (!email.includes("@") || !email.includes(".")) {
        alert("Error: Please enter a valid email address! Example: vulimo@gmail.com");
        return;
    }

    // Extra: Check programme is selected
    if (programme === "") {
        alert("Error: Please select your Academic Programme!");
        return;
    }

    // Q6 c) Display name and reg number on webpage
    document.getElementById("displayArea").innerHTML =
        "<b>Registered Student:</b> " + fullName + " | <b>Reg No:</b> " + regNumber + " | <b>Programme:</b> " + programme;

    // Q6 d) Display success message
    document.getElementById("successMessage").innerHTML =
        " Registration Successful! Welcome, " + fullName + "!";

  
});