module.exports = function predictImprovement(scores = []) {
    if (scores.length < 2) return { trend: "Insufficient data", predictedScore: null };
    const change = scores[scores.length - 1] - scores[0];
    return {
        trend: change > 0 ? "Improving" : change < 0 ? "Declining" : "Stable",
        predictedScore: Math.max(0, Math.min(100, Math.round(scores[scores.length - 1] + change / (scores.length - 1))))
    };
};