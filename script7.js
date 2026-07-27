// Exercise 1: Console Methods

console.log('Basic message');

console.log('%cImportant!', 'color:red; font-size:20px;');

console.warn('This might be a problem');

console.error('This is definitely wrong');

const users = [
    { name: 'John', age: 25 },
    { name: 'Mary', age: 30 },
    { name: 'Peter', age: 22 },
];

console.table(users);

console.group('User Processing');

console.log('Step 1');

console.log('Step 2');

console.groupEnd();

console.time('Loop');

for (let i = 0; i < 1000000; i++) {
    // Just a loop for timing
}

console.timeEnd('Loop');

const x = 10;

console.assert(x > 0, 'x should be positive');

console.trace('How did we get here?');

// Exercise 2

function multiply(a, b) {
    const result = a * b;

    return result;
}

console.log('Multiply Result:', multiply(5, 6));

// Exercise 3
// Fixed Bugs

function calculateOrderTotal(items) {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        total += item.price * item.quantity;
    }

    if (total > 100) {
        total = total * 0.9;
    }

    return total;
}

const order = [
    {
        name: 'Book',
        price: 15,
        quantity: 2,
    },

    {
        name: 'Pen',
        price: 3,
        quantity: 5,
    },

    {
        name: 'Notebook',
        price: 8,
        quantity: 3,
    },
];

console.log('Order Total:', calculateOrderTotal(order));
