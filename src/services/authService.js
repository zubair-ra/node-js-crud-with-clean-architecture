const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

class AuthService {
    static generateToken(user) {
        return jwt.sign(
            { id: user.id, name: user.name },
            SECRET_KEY,
            { expiresIn: "1h" } // Token expires in 1 hour
        );
    }

    static verifyToken(token) {
        return jwt.verify(token, SECRET_KEY);
    }
}

module.exports = AuthService;
