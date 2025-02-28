const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 7777;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "Portfolioserver")));

// Default route to serve the homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Portfolioserver", "index.html")); // Corrected path
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});