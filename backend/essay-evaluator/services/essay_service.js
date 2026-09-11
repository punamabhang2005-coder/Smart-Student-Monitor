const fs = require("fs");
const path = require("path");
const basicAnalyzer = require("../analyzers/basic_analyzer");
const semanticAnalyzer = require("../analyzers/semantic_analyzer");
const aiAnalyzer = require("../analyzers/ai_analyzer");

function readEssayData() {
    const dataPath = path.join(__dirname, "../data");
    const currentEssay = fs.readFileSync(path.join(dataPath, "latest_essay.txt"), "utf8");
    const previousEssays = fs.readFileSync(path.join(dataPath, "previous_essays.txt"), "utf8")
        .split(/--- ESSAY \d+ ---/).map(essay => essay.trim()).filter(Boolean);
    return { currentEssay, previousEssays };
}

function analyzeCurrentEssay() {
    const { currentEssay, previousEssays } = readEssayData();
    const basic = basicAnalyzer(currentEssay);
    const previousScores = previousEssays.map(essay => basicAnalyzer(essay).score);
    const previousAverage = previousScores.length
        ? previousScores.reduce((total, score) => total + score, 0) / previousScores.length
        : 0;
    const semantic = semanticAnalyzer(currentEssay, previousEssays);

    return aiAnalyzer(basic, previousAverage, semantic);
}

module.exports = { readEssayData, analyzeCurrentEssay };