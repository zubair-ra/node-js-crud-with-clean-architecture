const ItemRepository = require("../repositories/itemRepository");

class ItemService {
    static async getAllItems() {
        return await ItemRepository.getAllItems();
    }

    static async getItemById(id) {
        return await ItemRepository.getItemById(id);
    }

    static async createItem(name, description) {
        return await ItemRepository.createItem(name, description);
    }

    static async updateItem(id, name, description) {
        return await ItemRepository.updateItem(id, name, description);
    }

    static async deleteItem(id) {
        return await ItemRepository.deleteItem(id);
    }
}

module.exports = ItemService;
