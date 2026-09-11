const express = require("express");

const analyze = require("./essay_analyzer");

const app = express();

app.get("/analyze", (req, res) => {

    try {

        const result = analyze();

        res.json(result);

    } catch (error) {

        res.status(500).json({
            error: "Unable to analyze essay"
        });

    }

});

const PORT = 3000;

app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );

});