import { Validator } from "jsonschema";
import { CardCreateInputSchema, CardUpdateInputSchema } from "../../schemas/Card.js";

const CardValidator = new Validator();

export const vaidateCreateInput = (req, res, next) => {
    const valid = CardValidator.validate(req.body, CardCreateInputSchema);

    if (valid.valid) {
        return next();
    }

    return res.status(503).json({
        message: "Invalid input card"
    });
};

export const vaidateUpdateInput = (req, res, next) => {
    const valid = CardValidator.validate(req.body, CardUpdateInputSchema);

    if (valid.valid) {
        return next();
    }

    return res.status(503).json({
        message: "Invalid input card"
    });
};
