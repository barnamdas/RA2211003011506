const express = require('express');

const app = express();

const PORT = 3000;

// Function to generate prime numbers up to a limit

function generatePrimes(limit) {

    const primes = [];

    for (let num = 2; num <= limit; num++) {

        let isPrime = true;

        for (let i = 2; i * i <= num; i++) {

            if (num % i === 0) {

                isPrime = false;

                break;

            }

        }

        if (isPrime) primes.push(num);

    }

    return primes;

}

// Function to generate Fibonacci numbers up to a limit

function generateFibonacci(limit) {

    const fib = [0, 1];

    while (true) {

        let next = fib[fib.length - 1] + fib[fib.length - 2];

        if (next > limit) break;

        fib.push(next);

    }

    return fib;

}

// Function to generate even numbers up to a limit

function generateEvenNumbers(limit) {

    const evens = [];

    for (let i = 2; i <= limit; i += 2) {

        evens.push(i);

    }

    return evens;

}

// Function to generate random numbers within a limit

function generateRandomNumbers(limit, count = 10) {

    const randomNumbers = [];

    for (let i = 0; i < count; i++) {

        randomNumbers.push(Math.floor(Math.random() * limit) + 1);

    }

    return randomNumbers;

}

app.get('/', (req, res) => {

    res.send('Server is running!');

});

app.get('/numbers/:type', (req, res) => {

    const { type } = req.params;

    const limit = 100; // Set a limit for number generation

    let numbers = [];

    switch (type) {

        case 'primes':

            numbers = generatePrimes(limit);

            break;

        case 'fibonacci':

            numbers = generateFibonacci(limit);

            break;

        case 'even':

            numbers = generateEvenNumbers(limit);

            break;

        case 'random':

            numbers = generateRandomNumbers(limit);

            break;

        default:

            return res.status(400).json({ error: 'Invalid number type' });

    }

    res.json({ numbers });

});

app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);

});