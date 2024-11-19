// Registration form validation
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.innerText = '');

    let errors = [];
  
    // Name validation
    const name = document.getElementById('name').value.trim();
    if (!name) {
        document.getElementById('nameError').innerText = 'Name is required';
        errors.push('Name is required');
    }
  
    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById('emailError').innerText = 'Invalid email format';
        errors.push('Invalid email format');
    }
  
    // Password validation
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password.length < 8) {
        document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long';
        errors.push('Password must be at least 8 characters long');
    }
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
        errors.push('Passwords do not match');
    }
  
    // Age validation
    const age = parseInt(document.getElementById('age').value, 10);
    if (isNaN(age) || age < 18 || age > 100) {
        document.getElementById('ageError').innerText = 'Age must be between 18 and 100';
        errors.push('Age must be between 18 and 100');
    }
  
    // Terms and conditions checkbox validation
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('termsError').innerText = 'You must agree to the terms and conditions';
        errors.push('You must agree to the terms and conditions');
    }
  
    // Show errors or submit form
    if (errors.length > 0) {
        
    } else {
        alert('Registration successful');
        
        // Clear the form fields
        document.getElementById('registrationForm').reset();
    }
});

// Login form validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form submission
    
    // Clear previous error messages
    document.getElementById('loginEmailError').innerText = '';
    document.getElementById('loginPasswordError').innerText = '';

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    let isValid = true;

    // Email validation
    if (!email) {
        document.getElementById('loginEmailError').innerText = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('loginEmailError').innerText = 'Please enter a valid email address';
        isValid = false;
    }

    // Password validation
    if (!password) {
        document.getElementById('loginPasswordError').innerText = 'Password is required';
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById('loginPasswordError').innerText = 'Password must be at least 8 characters long';
        isValid = false;
    }

    // If everything is valid
    if (isValid) {
        alert('Login successful');
        
        // Clear the form fields
        document.getElementById('loginForm').reset();
    }
});

