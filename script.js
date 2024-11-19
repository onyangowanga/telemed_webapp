document.getElementById('registrationForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.innerText = '');

    let errors = [];

    // First Name validation
    const first_name = document.getElementById('first_name').value.trim();
    if (!first_name) {
        document.getElementById('firstNameError').innerText = 'First name is required';
        errors.push('First name is required');
    }

    // Last Name validation
    const last_name = document.getElementById('last_name').value.trim();
    if (!last_name) {
        document.getElementById('lastNameError').innerText = 'Last name is required';
        errors.push('Last name is required');
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

    // Phone validation
    const phone = document.getElementById('phone').value.trim();
    if (!phone) {
        document.getElementById('phoneError').innerText = 'Phone number is required';
        errors.push('Phone number is required');
    }

    // Date of Birth validation
    const date_of_birth = document.getElementById('date_of_birth').value.trim();
    if (!date_of_birth) {
        document.getElementById('dobError').innerText = 'Date of birth is required';
        errors.push('Date of birth is required');
    }

    // Country validation
    const country = document.getElementById('country').value;
    if (!country) {
        document.getElementById('countryError').innerText = 'Country is required';
        errors.push('Country is required');
    }

    // Gender validation
    const gender = document.getElementById('gender').value;
    if (!gender) {
        document.getElementById('genderError').innerText = 'Gender is required';
        errors.push('Gender is required');
    } else {
        document.getElementById('genderError').innerText = '';
        console.log('Selected Gender:', gender);
    }


    // Address validation
    const address = document.getElementById('address').value.trim();
    if (!address) {
        document.getElementById('addressError').innerText = 'Address is required';
        errors.push('Address is required');
    }

    // If there are errors, stop form submission
    if (errors.length > 0) {
        return;
    }

    try {
        // Send the request to the server
        const response = await fetch('/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ first_name, last_name, email, password, phone, date_of_birth, country, gender, address })
        });

        const data = await response.json();
        console.log(data)

        // Handle response
        if (response.ok) {
            alert(data.message);
            // Clear the form
            document.getElementById('registrationForm').reset();
        } else {
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        alert('An error occurred while registering. Please try again.');
        console.error(error);
    }
});


document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value; 
    const password = document.getElementById('loginPassword').value; 

    //send the request to the server
    const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    alert(data.message + 'Welcome ' + data.name + ' of email address: ' + data.email);
    
});