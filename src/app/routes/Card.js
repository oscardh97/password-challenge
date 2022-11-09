import { Router } from 'express';
import { vaidateCreateInput, vaidateUpdateInput } from '../middleware/Card.js';
import store from '../store/index.js';

const router = Router({ mergeParams: true });

router.post("/", [vaidateCreateInput], async (req, res) => {
    try {
        const { body } = req;
        const newCard = await store.create(body);
    
        return res.status(200).json(newCard);
    } catch (err) {
        return res.status(500).json({
            message: "There was an error when trying to create the card."
        });
    }
});

router.get("/", (req, res) => {
    try {
        const { query } = req;
        const cards = store.read(query);
    
        return res.status(200).json(cards);

    } catch (err) {
        return res.status(500).json({
            message: "There was an error when trying to get the cards."
        });
    }
});

router.put("/:id", [vaidateUpdateInput], async (req, res) => {
    try {
        const { params, body } = req;
        const { id } = params;

        const card = await store.update(id, body);

        return res.status(200).json(card);

    } catch (err) {
        return res.status(500).json({
            message: err.message || "There was an error when trying to update the card."
        });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { params } = req;
        const { id } = params;

        await store.delete(id);

        return res.status(200).json({
            message: "The card was deleted."
        });

    } catch (err) {
        return res.status(500).json({
            message: "There was an error when trying to delete the card."
        });
    }
});

export default router;