const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const authRoutes = require('./authRoutes');
const authenticateToken = require('../middlewares/authMiddleware'); // Import the middleware

router.use("/auth", authRoutes);

// Protect item routes using JWT middleware
router.get('/items', authenticateToken, itemController.getAllItems);
router.post('/items', authenticateToken, itemController.createItem);
router.put('/items/:id', authenticateToken, itemController.updateItem);
router.delete('/items/:id', authenticateToken, itemController.deleteItem);

module.exports = router;
