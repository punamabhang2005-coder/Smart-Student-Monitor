module.exports = function detectRisk({ averageScore = 0, trend = "Stable" } = {}) {
    const atRisk = averageScore < 50 || trend === "Declining";
    return { atRisk, level: atRisk ? "High" : "Low" };
};