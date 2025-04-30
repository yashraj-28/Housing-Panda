const express = require("express");
const router = express.Router();
const db = require("../db/database");
const path = require("path");

// Serve form
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

// Handle form submission
router.post("/submit", (req, res) => {
  const { title, description, rent, address, rooms, contact_info } = req.body;
  const sql =
    "INSERT INTO listings (title, description, rent, address, rooms, contact_info) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(
    sql,
    [title, description, rent, address, rooms, contact_info],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Failed to submit listing");
      }
      res.status(200).send("Success");
    }
  );
});

// API route to get all listings
router.get("/api/listings", (req, res) => {
  db.query("SELECT * FROM listings", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = router;
