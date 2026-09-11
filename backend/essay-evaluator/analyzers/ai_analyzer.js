module.exports = function analyzeWithAi(current, previousAverage, semantic) {
    const score = current.score;
    const analysis = score >= 70 ? "Good" : score >= 45 ? "Average" : "Bad";
    const difference = Math.round(score - previousAverage);
    const trend = difference >= 5 ? "improving" : difference <= -5 ? "declining" : "remaining close to";
    let suggestion = `Your essay is ${trend} compared with your previous average. `;

    if (semantic.repeatedIdeasDetected) {
        suggestion += "Develop a new perspective and add examples that were not used before.";
    } else if (score < 45) {
        suggestion += "Focus on clearer sentences, stronger organization, and more supporting details.";
    } else if (score < 70) {
        suggestion += "Improve vocabulary and connect your ideas with clearer transitions.";
    } else {
        suggestion += "Keep developing your argument with specific evidence and examples.";
    }

    return {
        analysis,
        suggestion,
        comparison: {
            currentScore: score,
            previousAverage: Number(previousAverage.toFixed(2)),
            change: difference,
            trend
        }
    };
};