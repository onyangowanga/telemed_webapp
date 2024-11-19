// Get all input fields
const formFields = [
    'name',
    'email',
    'phone',
    'appointment-date',
    'appointment-time',
    'reason',
    'doctor',
    'terms'
];

// Add event listeners for real-time updates
formFields.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (field) {
        field.addEventListener('input', updateSummary);
    }
});

// Appointment booking form validation
document.getElementById("appointmentForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Clear previous error messages
    document.querySelectorAll(".error").forEach(el => el.innerText = '');
    
    let errors = [];
  
    // Name validation
    const name = document.getElementById("name").value.trim();
    if (!name) {
        document.getElementById("nameError").innerText = "Name is required";
        errors.push("Name is required");
    }
  
    // Email validation
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        errors.push("Invalid email format");
    }
  
    // Phone number validation
    const phone = document.getElementById("phone").value.trim();
    if (!phone) {
        document.getElementById("phoneError").innerText = "Phone number is required";
        errors.push("Phone number is required");
    }
  
    // Appointment date validation
    const appointmentDate = document.getElementById("appointment-date").value;
    if (!appointmentDate) {
        document.getElementById("dateError").innerText = "Appointment date is required";
        errors.push("Appointment date is required");
    }
  
    // Appointment time validation
    const appointmentTime = document.getElementById("appointment-time").value;
    if (!appointmentTime) {
        document.getElementById("timeError").innerText = "Appointment time is required";
        errors.push("Appointment time is required");
    }
  
    // Reason for appointment validation
    const reason = document.getElementById("reason").value.trim();
    if (!reason) {
        document.getElementById("reasonError").innerText = "Reason for appointment is required";
        errors.push("Reason for appointment is required");
    }
  
    // Doctor selection validation
    const doctor = document.getElementById("doctor").value;
    if (!doctor) {
        document.getElementById("doctorError").innerText = "You must select a doctor";
        errors.push("You must select a doctor");
    }

    // Terms and conditions checkbox validation
    const terms = document.getElementById("terms").checked;
    if (!terms) {
        document.getElementById("termsError").innerText = "You must agree to the terms and conditions";
        errors.push("You must agree to the terms and conditions");
    }
  
    // Show errors or submit form
    if (errors.length > 0) {
        alert("Please fix the errors before submitting.");
    } else {
        alert("Appointment booked successfully");
        
        // Capture form data and display it
        const formData = captureFormData();
        displayFormData(formData);
        
        // Clear the form fields
        document.getElementById("appointmentForm").reset();
    }
});

// Capture form data in an object
function captureFormData() {
    return {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        appointmentDate: document.getElementById("appointment-date").value,
        appointmentTime: document.getElementById("appointment-time").value,
        reason: document.getElementById("reason").value,
        doctor: document.getElementById("doctor").value,
        termsAccepted: document.getElementById("terms").checked
    };
}

// Display form data in a table
function displayFormData(data) {
    const summaryContent = document.getElementById("summaryContent");
    summaryContent.innerHTML = `
        <table>
            <tr>
                <th>FIELD</th>
                <th>VALUE</th>
            </tr>
            <tr>
                <td><strong>Full Name:</strong></td>
                <td>${data.name}</td>
            </tr>
            <tr>
                <td><strong>Email:</strong></td>
                <td>${data.email}</td>
            </tr>
            <tr>
                <td><strong>Phone:</strong></td>
                <td>${data.phone}</td>
            </tr>
            <tr>
                <td><strong>Preferred Appointment Date:</strong></td>
                <td>${data.appointmentDate}</td>
            </tr>
            <tr>
                <td><strong>Preferred Appointment Time:</strong></td>
                <td>${data.appointmentTime}</td>
            </tr>
            <tr>
                <td><strong>Reason for Appointment:</strong></td>
                <td>${data.reason}</td>
            </tr>
            <tr>
                <td><strong>Doctor:</strong></td>
                <td>${data.doctor}</td>
            </tr>
            <tr>
                <td><strong>Terms Accepted:</strong></td>
                <td>${data.termsAccepted ? "Yes" : "No"}</td>
            </tr>
        </table>
    `;
}

// Update the summary when form inputs change
function updateSummary() {
    const formData = captureFormData();
    displayFormData(formData);
}
