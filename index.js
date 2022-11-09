import express from "express";
import cors from "cors";

import Store from "./src/app/store/index.js";
import router from "./src/app/routes/index.js";

const app = express();

app.use(cors())
app.use(express.json());

app.use("/api/", router);

app.use("/health", (req, res) => {
    res.status(200).send("Healthy!")
});

app.listen(5050, (err) => {
    if (!err) {
        console.log("Listening on 5050")
    }

});