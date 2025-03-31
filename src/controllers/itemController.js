const ItemService = require('../services/itemService');

exports.getAllItems = async (req, res) => {
    try {
        const items = await ItemService.getAllItems();
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createItem = async (req, res) => {
    try {
        const { name, description } = req.body;
        const id = await ItemService.createItem(name, description);
        res.status(201).json({ id, name, description });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        await ItemService.updateItem(id, name, description);
        res.json({ message: 'Item updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        await ItemService.deleteItem(id);
        res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};