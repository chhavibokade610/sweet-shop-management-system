# Sweet Shop Management System

This project is a backend-only Sweet Shop Management System built using JavaScript and tested thoroughly with Jest. It follows the principles of **Test-Driven Development (TDD)** and focuses on clean code, modularity, and proper Git practices.

The goal was to simulate how inventory management for a traditional sweet shop would work programmatically — from adding and restocking sweets to handling purchases and checking stock levels.

---

## What This Project Does

- Add new sweets to the system
- Delete sweets using their unique ID
- View a list of all available sweets
- Search sweets by:
  - Name (case-insensitive)
  - Category
  - Price range (min to max)
- Sort sweets:
  - Alphabetically by name
  - By price (highest to lowest)
- Restock existing sweets
- Purchase sweets with automatic quantity check

---

## How It Was Built

- Language: JavaScript
- Testing Framework: Jest
- Version Control: Git

From the very beginning, the project was developed using a strict **TDD approach**:

> First write a failing test → Then implement just enough code to pass → Refactor if needed → Repeat.

This approach ensured all logic was testable, modular, and covered from edge to edge.

---

## Folder Structure

```bash
sweet-shop-management/

├── src/
│ └── sweetShop.js # Main sweet shop logic
├── tests/
│ ├── addSweet.test.js # Test for adding sweets
│ ├── deleteSweet.test.js # Test for deleting sweets
│ ├── search.test.js # Test for search functionality
│ ├── sort.test.js # Test for sorting functionality
│ ├── purchase.test.js # Test for purchasing sweets
│ └── restock.test.js # Test for restocking
├── TEST_REPORT.md # Summary of test cases and coverage
├── package.json # Project setup & dependencies
├── README.md # Project documentation (this file)
```

## How to Set Up and Run Locally

1. Clone this repository:

```bash
git clone https://github.com/chhavibokade610/sweet-shop-management.git
cd sweet-shop-management
```

2. Install the dependencies:

```bash
npm install
```

3. Run the tests:

```bash
npm test
```
<img width="258" height="196" alt="image" src="https://github.com/user-attachments/assets/32a8f948-16a1-4fb4-9403-8c9bbe624240" />


4. View test coverage report :

```bash
npm test -- --coverage
```

Then open the following file in your browser to view detailed test coverage:

```
coverage/lcov-report/index.html
```

---

### Modular Tests

Tests are organized into separate files based on functionality:

- `addSweet.test.js`
- `deleteSweet.test.js`
- `search.test.js`
- `sort.test.js`
- `restock.test.js`
- `purchase.test.js`

This helps with better modularity and easier debugging when scaling the project.

## Sample Test Output

Tests include:

- Adding a sweet
- Searching by name, category, and price range
- Sorting by name and price
- Stock updates via restocking or purchases
- Validating edge cases (e.g., invalid sweet IDs)

The entire system is covered by **automated unit tests**, written before the actual code was implemented — staying true to the TDD discipline.

---

## Use of AI

Some sections (such as sorting logic) were developed with the help of AI tools, especially to improve edge case coverage and consistency. These contributions were marked clearly in Git commit history.

---

## Deliverables

- Complete source code with modular structure
- README with setup instructions and methodology
- TEST_REPORT.md with:
  - Summary of all test cases
  - Description of test scenarios
  - Jest test coverage output
- No frontend implemented (focus remained on backend logic)

---

## Notes

- This project was developed as part of a TDD-focused exercise.
- Every method and feature was backed by one or more tests.
- Git commits were made frequently, with clear messages after every logical milestone.

---

## License

This project is open source and available under the MIT License.

