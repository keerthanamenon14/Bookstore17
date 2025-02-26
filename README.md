📚 Book Store App

A full-stack Book Store application built with React.js (frontend), Node.js & Express.js (backend), and Tailwind CSS for styling. This app allows users to view, create, edit, and delete books.

🚀 Features

📖 View a list of books

✍️ Create a new book entry

🛠 Edit book details

❌ Delete books

🌊 Responsive UI with Tailwind CSS

⚡ Fast API with Node.js & Express

🛠 Technologies Used

Frontend:

React.js (UI Framework)

React Router (Client-side navigation)

Axios (API requests)

Tailwind CSS (Styling)

Backend:

Node.js & Express.js (Server-side logic)

MongoDB with Mongoose (Database)

CORS & dotenv (Middleware & environment variables)

📦 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/yourusername/bookstore-app.git
cd bookstore-app

2️⃣ Install Dependencies

Backend

cd backend
npm install

Frontend

cd frontend
npm install

3️⃣ Set Up Environment Variables

Create a .env file in both backend and frontend directories.

Backend .env:

PORT=5555

Frontend .env:

REACT_APP_API_URL=http://localhost:5555

4️⃣ Start the Application

Start Backend Server:

cd backend
npm run dev

Start Frontend App:

cd frontend
npm run dev

📌 API Endpoints

Method

Endpoint

Description

GET

/books

Fetch all books

POST

/books

Add a new book

GET

/books/:id

Fetch book by ID

PUT

/books/:id

Update book details

DELETE

/books/:id

Delete a book

🖥 UI Preview

