const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const listingsRoutes = require("./routes/listings");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // Serve HTML/CSS/JS

app.use("/", listingsRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
