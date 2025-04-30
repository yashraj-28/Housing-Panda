# HousingPanda - Simple Rental Listing App

HousingPanda is a basic full-stack web application where users can submit rental listings and view all existing listings. It's built with **Node.js**, **Express**, **MySQL**, and styled using **Tailwind CSS**. Data is submitted through a form and stored in a relational database.

---

## Project Structure

housingpanda/ │ ├── public/ │ ├── home.html # Form to submit listings │ ├── listings.html # Displays all listings │ ├── db/ │ └── database.js # MySQL connection setup │ ├── routes/ │ └── listings.js # All listing-related routes │ ├── server.js # Main Express server ├── package.json # Node dependencies └── README.md # This file

---

## Features

- Submit rental listings with:
  - Title
  - Description
  - Rent
  - Address
  - Number of Rooms
  - Contact Info
- View all listings in a styled layout
- Inline success popup message on submission
- Tailwind CSS styling
- RESTful API backend using MySQL

---

## Technologies Used

- **Frontend**: HTML, Tailwind CSS, Vanilla JS
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Others**: Fetch API, JSON-based form submission

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yashraj-28/housingpanda.git
cd housingpanda
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
node app.js
```

## Usage

### Submit a house listing

- Go to /home.html
- Fill out the form
- Submit to store the listing in the database
- A popup will confirm success

### View house listings

- Click “View Listings” in the top right
- It will take you to /listings.html
- Listings are fetched from /api/listings via AJAX
