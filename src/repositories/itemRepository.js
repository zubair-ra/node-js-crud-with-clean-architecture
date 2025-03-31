const db = require('../config/db');
class ItemRepository {
    static async getAllItems() {
        const [rows] = await db.query('select * from items');
        return rows;
    }

    static async createItem(name, description) {
        const [result] = await db.query('INSERT INTO items (name, description) VALUES (?, ?)', [name, description]);
        return result.insertId;
    }

    static async updateItem(id, name, description) {
        await db.query('UPDATE items SET name = ?, description = ? WHERE id = ?', [name, description, id]);
    }

    static async deleteItem(id) {
        await db.query('DELETE FROM items WHERE id = ?', [id]);
    }
}
module.exports = ItemRepository;