export const CardSchema = {
    type: "object",
    properties: {
        name: { type: "string" },
        url: { type: "string" },
        username: { type: "string" },
        password: { type: "string" },
    },
    required: ["name", "url", "username", "password"]
};

export const CardCreateInputSchema = {
    ...CardSchema,
    required: ["name", "url", "username", "password"]
};

export const CardUpdateInputSchema = CardSchema;
