const STOP_WORDS = new Set(["a", "an", "and", "are", "as", "at", "be", "by", "for", "from", "has", "have", "in", "is", "it", "of", "on", "or", "that", "the", "this", "to", "was", "were", "will", "with"]);

function terms(text) {
    return text.toLowerCase().replace(/[^a-z\s]/g, " ").split(/\s+/)
        .filter(term => term.length > 2 && !STOP_WORDS.has(term));
}

function vector(values, vocabulary) {
    const counts = new Map();
    values.forEach(value => counts.set(value, (counts.get(value) || 0) + 1));
    return vocabulary.map(value => counts.get(value) || 0);
}

function similarity(first, second) {
    let dot = 0;
    let firstMagnitude = 0;
    let secondMagnitude = 0;
    first.forEach((value, index) => {
        dot += value * second[index];
        firstMagnitude += value ** 2;
        secondMagnitude += second[index] ** 2;
    });
    return firstMagnitude && secondMagnitude ? dot / Math.sqrt(firstMagnitude * secondMagnitude) : 0;
}

module.exports = function analyzeSemantic(currentEssay, previousEssays = []) {
    const currentTerms = terms(currentEssay);
    const previousTerms = previousEssays.map(terms);
    const vocabulary = [...new Set([...currentTerms, ...previousTerms.flat()])];
    const currentVector = vector(currentTerms, vocabulary);
    const similarities = previousTerms.map(previous => similarity(currentVector, vector(previous, vocabulary)));
    const average = similarities.length ? similarities.reduce((total, value) => total + value, 0) / similarities.length : 0;
    const highest = Math.max(0, ...similarities);

    return {
        averageSimilarity: Number(average.toFixed(3)),
        highestSimilarity: Number(highest.toFixed(3)),
        repeatedIdeasDetected: highest >= 0.7,
        comparisons: similarities.length
    };
};
