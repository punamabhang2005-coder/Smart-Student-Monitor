const express = require("express");
const essayService = require("./services/essay_service");

const app = express();
app.use(express.json());
app.get("/analyze", (req, res) => {
    try {
        res.json(essayService.analyzeCurrentEssay());
    } catch (error) {
        res.status(500).json({ error: "Unable to analyze essay" });
    }
});

const PORT = Number(process.env.PORT || 3000);

app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );

});