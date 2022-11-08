import { Router } from 'express';

import CardRouter from "./Card.js";

const router = Router();

router.use("/password-cards", CardRouter);

export default router;