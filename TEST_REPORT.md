# Test Report: Sweet Shop Management System

This document provides a detailed summary of the test cases and test coverage for the Sweet Shop Management System developed using JavaScript and tested with Jest.

---

## 1. Test Summary

| Test Case ID | Description                              | Status  |
| ------------ | ---------------------------------------- | ------- |
| TC001        | Add a sweet to the inventory             | ✅ Pass |
| TC002        | Retrieve all sweets from the inventory   | ✅ Pass |
| TC003        | Delete a sweet by ID                     | ✅ Pass |
| TC004        | Search sweet by name                     | ✅ Pass |
| TC005        | Search sweets by category                | ✅ Pass |
| TC006        | Search sweets within a given price range | ✅ Pass |
| TC007        | Sort sweets by name (ascending)          | ✅ Pass |
| TC008        | Sort sweets by name (descending)         | ✅ Pass |
| TC009        | Sort sweets by price (ascending)         | ✅ Pass |
| TC010        | Sort sweets by price (descending)        | ✅ Pass |
| TC011        | Restock a sweet and update quantity      | ✅ Pass |
| TC012        | Purchase a sweet with sufficient stock   | ✅ Pass |
| TC013        | Error when restocking non-existent sweet | ✅ Pass |
| TC014        | Error when purchasing non-existent sweet | ✅ Pass |

---

## 2. Detailed Test Cases

### TC001 – Add a sweet to the inventory

- **Input**: `{ id: '1001', name: 'Kaju Katli', category: 'Nut-Based', price: 50, quantity: 20 }`
- **Expected Output**: Sweet is added to the inventory list.

---

### TC002 – Retrieve all sweets from the inventory

- **Input**: None
- **Expected Output**: Returns array of all added sweets.

---

### TC003 – Delete a sweet by ID

- **Input**: Sweet ID = `'1001'`
- **Expected Output**: Removes the sweet with that ID from inventory.

---

### TC004 – Search sweet by name

- **Input**: `'Gulab Jamun'`
- **Expected Output**: Returns matching sweet in a case-insensitive manner.

---

### TC005 – Search sweets by category

- **Input**: `'Milk-Based'`
- **Expected Output**: Returns all sweets in the Milk-Based category.

---

### TC006 – Search sweets within a given price range

- **Input**: `min = 10`, `max = 30`
- **Expected Output**: Sweets priced between 10 and 30 are returned.

---

### TC007 – Sort sweets by name (ascending)

- **Input**: Sort key `'name'`, order `'asc'`
- **Expected Output**: Sweets sorted alphabetically by name.

---

### TC008 – Sort sweets by name (descending)

- **Input**: Sort key `'name'`, order `'desc'`
- **Expected Output**: Sweets sorted in reverse alphabetical order.

---

### TC009 – Sort sweets by price (ascending)

- **Input**: Sort key `'price'`, order `'asc'`
- **Expected Output**: Sweets sorted from lowest to highest price.

---

### TC010 – Sort sweets by price (descending)

- **Input**: Sort key `'price'`, order `'desc'`
- **Expected Output**: Sweets sorted from highest to lowest price.

---

### TC011 – Restock a sweet and update quantity

- **Input**: Sweet ID = `'1001'`, restock quantity = `10`
- **Expected Output**: Sweet quantity is increased by 10 units.

---

### TC012 – Purchase a sweet with sufficient stock

- **Input**: Sweet ID = `'1001'`, purchase quantity = `5`
- **Expected Output**: Sweet quantity is reduced by 5 units.

---

### TC013 – Error when restocking non-existent sweet

- **Input**: Sweet ID = `'9999'`
- **Expected Output**: Throws `"Sweet Not Found"` error.

---

### TC014 – Error when purchasing non-existent sweet

- **Input**: Sweet ID = `'8888'`
- **Expected Output**: Throws `"Sweet Not Found"` error.

---

## 3. Jest Test Coverage Report

To generate this report, run:

```bash
npx jest --coverage
```
<img width="415" height="74" alt="image" src="https://github.com/user-attachments/assets/e924a75c-7823-40c1-85f8-dad9fe2cb597" />

## 4. Test File Structure

All test cases are organized into modular files under /tests/:

```bash
tests/
├── addSweet.test.js
├── deleteSweet.test.js
├── search.test.js
├── sort.test.js
├── purchase.test.js
├── restock.test.js
```

Each file targets a specific functionality of the system, improving clarity, maintainability, and debugging ease.
