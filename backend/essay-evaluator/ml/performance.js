module.exports = function calculatePerformance(scores = []) {
    const averageScore = scores.length ? scores.reduce((total, score) => total + score, 0) / scores.length : 0;
    return { essayCount: scores.length, averageScore: Number(averageScore.toFixed(2)) };
};