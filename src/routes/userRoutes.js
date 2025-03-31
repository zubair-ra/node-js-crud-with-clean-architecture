const express = require("express");
const AuthService = require("../services/authService");
const UserRepository = require("../repositories/userRepository");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Login Route - Generates JWT Token
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await UserRepository.getUserByUsername(username);
    if (!user || user.password !== password) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = AuthService.generateToken(user);
    res.json({ token });
});

// Protected Route Example
router.get("/profile", authMiddleware, async (req, res) => {
    const user = await UserRepository.getUserById(req.user.id);
    res.json({ user });
});

module.exports = router;
