# Week 7: JavaScript Best Practices

## Author

**Name:** Joseph Wambugu

**GitHub:** https://github.com/wambugujoseph467-dot

**Repository:** https://github.com/wambugujoseph467-dot/iyf-s11-week-07-wambugujoseph467-dot

**Date:** July 27, 2026

---

# Project Overview

This week's project focused on improving JavaScript code quality and introducing automated testing. I learned how to configure ESLint and Prettier to maintain consistent coding standards, write unit tests with Vitest, and organize code into reusable modules.

---

# Learning Objectives

By completing this week's tasks, I learned how to:

* Configure ESLint to identify JavaScript errors.
* Use Prettier to automatically format code.
* Combine ESLint and Prettier in one project.
* Create npm scripts to automate development tasks.
* Write and run unit tests using Vitest.
* Extract pure functions into reusable modules.
* Test JavaScript functions independently.

---

# Tasks Completed

## Task 14.4 – ESLint & Prettier Setup

Completed the following:

* Initialized an npm project.
* Installed ESLint.
* Installed Prettier.
* Configured ESLint.
* Configured Prettier.
* Added npm scripts for:

  * `npm run lint`
  * `npm run lint:fix`
  * `npm run format`

### Commands Used

```bash
npm init -y
npm install eslint --save-dev
npm install prettier --save-dev
npm run lint
npm run lint:fix
npm run format
```

---

## Task 14.5 – Your First Unit Test

Completed the following:

* Installed Vitest as the test runner.
* Added the `test` script in `package.json`.
* Extracted pure functions into a separate module.
* Wrote unit tests for each function.
* Successfully ran all tests.

### Functions Tested

* `formatPrice()`
* `capitalize()`

### Test Cases

* Formats whole dollar values.
* Formats zero correctly.
* Capitalizes the first character of a string.
* Handles empty strings correctly.

### Running the Tests

```bash
npm run test
```

### Test Results

```text
✓ format.test.js (4 tests)

✓ formats whole dollars
✓ formats zero
✓ capitalizes the first letter
✓ handles an empty string

Test Files  1 passed (1)
Tests       4 passed (4)
```

---

# Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* Node.js
* npm
* ESLint
* Prettier
* Vitest
* Git
* GitHub
* Visual Studio Code

---

# Project Structure

```text
.
├── package.json
├── package-lock.json
├── eslint.config.mjs
├── .prettierrc
├── format.js
├── format.test.js
├── README.md
└── Other HTML and JavaScript exercise files
```

---

# What I Learned

Throughout this week's tasks, I learned:

* How to use ESLint to detect coding issues.
* How Prettier automatically formats code consistently.
* The importance of writing clean, readable, and maintainable code.
* How to create and test pure functions.
* How unit testing helps verify that code behaves as expected.
* How npm scripts simplify common development tasks.

---

# Challenges Faced

* Configuring ESLint with the latest version.
* Understanding the different roles of ESLint and Prettier.
* Writing my first unit tests using Vitest.
* Organizing reusable functions into separate modules.
* ESLint installing and running.
* Configuring with Prettier.
* npm.
* 
---

# Conclusion

This week's exercises introduced important software development practices such as linting, code formatting, and automated testing. These tools help improve code quality, reduce bugs, and make JavaScript projects easier to maintain and scale.

