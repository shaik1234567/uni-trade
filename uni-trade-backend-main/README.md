# 🎓 University Trade App Backend

Welcome to the **University Trade App Backend**! This repository contains the server-side code for the University Trade App, built using Node.js and Express.js. The backend provides a robust API to manage user authentication and item listings for the application.

---

## 🛠️ Technologies Used

- **Node.js**: A JavaScript runtime for building scalable network applications.
- **Express.js**: A web application framework for Node.js that simplifies the development of server-side applications.
- **MongoDB**: A NoSQL database for storing user and item data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js, providing a straightforward schema-based solution.
- **Multer**: A middleware for handling `multipart/form-data`, used for uploading files.
- **JWT (JSON Web Tokens)**: A compact and self-contained way for securely transmitting information between parties as a JSON object.
- **Bcrypt**: A library to help hash passwords for secure authentication.

---

## 📐 Architecture

This application follows the **Model-View-Controller (MVC)** pattern, which organizes the code into three interconnected components:

- **Model**: Defines the data structure and business logic.
- **View**: Represents the user interface, implemented using **React**, which communicates with the backend API to display data.
- **Controller**: Manages the input and communicates between the model and the view.

By adhering to the MVC architecture, the codebase remains clean, modular, and easier to maintain.


## 🚀 Features

- **User Authentication**: Secure login and registration using JWT and password hashing with Bcrypt.
- **Item Management**: CRUD operations for item listings.
- **File Uploads**: Support for uploading images and other files using Multer.
- **Admin Functionality**: Manage user accounts and monitor posted items.

---

## 📦 Installation

To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Chamith75/uni-trade-backend.git
