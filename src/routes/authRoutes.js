const express = require("express");
const AuthService = require("../services/authService");

const router = express.Router();

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Dummy user (Replace with database validation)
    if (username === "admin" && password === "password123") {
        const token = AuthService.generateToken({ id: 1, name: "Admin" });
        return res.json({ token });
    }

    return res.status(401).json({ error: "Invalid credentials" });
});

module.exports = router;
