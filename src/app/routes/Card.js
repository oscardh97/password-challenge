import { Router } from 'express';
import store from '../store/index.js';

const router = Router({ mergeParams: true });

router.post("/", async (req, res) => {
    const { body } = req;
    store.create(body)
});

router.get("/", async (req, res) => {
    const { query } = req;
    const cards = store.read(query);
    res.json(cards)
});

router.put("/:id", async (req, res) => {
    const { params, body } = req;
    const { id } = params;

    await store.update(id, body);
});

router.delete("/:id", async (req, res) => {
    const { params } = req;
    const { id } = params;

    await store.delete(id);

});

export default router;