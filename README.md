
# 💄 Glamora – Beauty E-Commerce Website

<img width="1366" height="2424" alt="Glamora" src="https://github.com/user-attachments/assets/50e2860d-06ea-4aec-804e-21b93c434f27" />


Glamora is a simple and responsive Beauty E-Commerce Website developed using HTML, CSS, Bootstrap, and JavaScript. Users can explore beauty products, add products to their cart, manage quantities, and perform CRUD operations.

## ✨ Features

- Display beauty products with images, names, and prices.
- Add products to the shopping cart.
- Increase and decrease product quantities.
- Remove products from the cart.
- Calculate the grand total automatically.
- Store cart data using LocalStorage.
- Add new beauty products.
- Update existing product details.
- Delete products from the product list.
- Checkout functionality with order confirmation.
- Bootstrap modals for cart, add, and update operations.
- Responsive product cards with a modern beauty-themed design.

## 🛠️ Technologies Used

- **HTML5** – Website structure
- **CSS3** – Styling and design
- **Bootstrap 5.3.8** – Responsive layout, cards, buttons, and modals
- **JavaScript** – Dynamic functionality and CRUD operations
- **LocalStorage** – Store cart items in the browser

## 📂 Project Structure

```text
Glamora/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🛍️ Product Categories

- Lipstick
- Makeup Brush
- Foundation
- Perfume
- Skincare Cream
- Face Serum
- Eyeshadow Palette
- Nail Polish
- Face Makeup
- Cosmetic Products
- Beauty Products
- Makeup Kit

## ⚙️ JavaScript Functionalities

| Function | Description |
|----------|-------------|
| displayData() | Displays all products |
| addToCart() | Adds products to the cart |
| updateLocalStorage() | Saves cart data in LocalStorage |
| displayCartModal() | Opens the cart modal |
| displayCartData() | Displays cart products |
| incQty() | Increases product quantity |
| decQty() | Decreases product quantity |
| removePro() | Removes a product from the cart |
| finalTotal() | Calculates the grand total |
| checkOut() | Completes checkout and clears the cart |
| displayAddProductModal() | Opens the add product modal |
| addPro() | Adds a new product |
| deleteProduct() | Deletes an existing product |
| updateProduct() | Updates product details |

## 📌 CRUD Operations

- **Create:** Add new products.
- **Read:** Display available products.
- **Update:** Edit product information.
- **Delete:** Remove products.

## 💾 LocalStorage

The shopping cart data is stored in the browser using JavaScript LocalStorage.

- `localStorage.setItem()` – Saves cart data.
- `localStorage.getItem()` – Retrieves stored cart data.
- `JSON.stringify()` – Converts JavaScript data into a JSON string.
- `JSON.parse()` – Converts a JSON string into JavaScript data.

## 🚀 How to Run the Project

1. Download or clone the repository.
2. Open the project folder in VS Code.
3. Open `index.html` in your browser or use Live Server.
4. Explore the Glamora beauty shopping website.

## 📱 Website Design

- Burgundy and pink color theme.
- Responsive Bootstrap product cards.
- Beauty product images.
- Styled navigation bar and buttons.
- Shopping cart and product management modals.
- Simple and user-friendly interface.

## 📚 JavaScript Concepts Used

- Arrays and Objects
- Functions and Arrow Functions
- DOM Manipulation
- Events
- Template Literals
- forEach()
- find()
- findIndex()
- filter()
- reduce()
- push()
- splice()
- Spread Operator
- LocalStorage
- JSON Methods
- Try-Catch Error Handling

## 👩‍💻 Developed By

**Disha Mehta**

Full Stack Development Student

## 📝 Project Note

This is a frontend JavaScript project created for learning and practicing E-Commerce functionality, DOM manipulation, CRUD operations, Bootstrap, and LocalStorage.

The checkout is a demonstration feature and does not include a real payment gateway.
