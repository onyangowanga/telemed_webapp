//import
const express = require('express');
const path = require('path');
require('dotenv').config();

const session = require('express-session');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware for session handling
app.use(session({
    secret: '12345678ab', // Replace with a secure secret in production
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // Set `secure: true` if using HTTPS
}));


//set-up middleware
app.use(express.static(path.join(__dirname, '/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/auth', authRoutes)

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'index2.html'));
});

app.get('/login', (request, response) => {
    response.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/register', (request, response) => {
    response.sendFile(path.join(__dirname, 'register.html'));
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`)
});