import store from '../store/index.js';

export default {
    async create(body) {
        const newCard = await store.create(body);

        return newCard;
    },

    async read(filter) {
        const cards = store.read(filter);

        return cards;
    },

    async update(id, body) {
        const card = await store.update(id, body);

        return card;
    },

    async delete(id) {
        return await store.delete(id);
    },
};