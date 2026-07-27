// Exercise 1: Meaningful Names

const currentDate = new Date();

const users = [
    { name: "John", age: 25 },
    { name: "Mary", age: 17 },
    { name: "Peter", age: 30 }
];

const adultUsers = users.filter(user => user.age >= 18);

console.log("Current Date:", currentDate);
console.log("Adult Users:", adultUsers);

function calculateDiscount(price, quantity) {

    const DISCOUNT_RATE = 0.10;

    return price * quantity * DISCOUNT_RATE;

}

console.log("Discount:", calculateDiscount(100, 2));

// Exercise 2: Single Responsibility

function validateUser(userData) {

    if (!userData.email.includes("@")) {
        throw new Error("Invalid email");
    }

    if (userData.age < 18) {
        throw new Error("User must be at least 18.");
    }

    return true;

}

function normalizeUser(userData) {

    return {
        ...userData,
        name: userData.name.trim(),
        email: userData.email.toLowerCase()
    };

}

function createUser(userData) {

    validateUser(userData);

    const newUser = normalizeUser(userData);

    console.log("User Created:", newUser);

    return newUser;

}

try {

    createUser({
        name: " Joseph ",
        email: "Joseph@Email.com",
        age: 20
    });

} catch (error) {

    console.log(error.message);

}

// Exercise 3: Avoid Magic Numbers

const MIN_PASSWORD_LENGTH = 8;
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const HTTP_NOT_FOUND = 404;

const password = "password123";

if (password.length >= MIN_PASSWORD_LENGTH) {

    console.log("Password is valid.");

}

console.log("One day in milliseconds:", ONE_DAY_MS);

const response = {
    status: 404
};

if (response.status === HTTP_NOT_FOUND) {

    console.log("Page Not Found.");

}