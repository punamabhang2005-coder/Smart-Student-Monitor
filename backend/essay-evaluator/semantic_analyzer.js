const STOP_WORDS = new Set([
    "a", "an", "and", "are", "as", "at", "be", "by", "for", "from",
    "has", "have", "in", "is", "it", "of", "on", "or", "that", "the",
    "this", "to", "was", "were", "will", "with"
]);

function getTerms(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z\s]/g, " ")
        .split(/\s+/)
        .filter(term => term.length > 2 && !STOP_WORDS.has(term));
}

function getVector(terms, vocabulary) {
    const counts = new Map();

    for (const term of terms) {
        counts.set(term, (counts.get(term) || 0) + 1);
    }

    return vocabulary.map(term => counts.get(term) || 0);
}

function cosineSimilarity(firstVector, secondVector) {
    let dotProduct = 0;
    let firstMagnitude = 0;
    let secondMagnitude = 0;

    for (let index = 0; index < firstVector.length; index += 1) {
        dotProduct += firstVector[index] * secondVector[index];
        firstMagnitude += firstVector[index] ** 2;
        secondMagnitude += secondVector[index] ** 2;
    }

    if (firstMagnitude === 0 || secondMagnitude === 0) {
        return 0;
    }

    return dotProduct / Math.sqrt(firstMagnitude * secondMagnitude);
}

function analyzeSemantic(currentEssay, previousEssays = []) {
    const currentTerms = getTerms(currentEssay);
    const previousTerms = previousEssays.map(getTerms);
    const vocabulary = [...new Set([...currentTerms, ...previousTerms.flat()])];
    const currentVector = getVector(currentTerms, vocabulary);

    const similarities = previousTerms.map(terms =>
        cosineSimilarity(currentVector, getVector(terms, vocabulary))
    );

    const averageSimilarity = similarities.length > 0
        ? similarities.reduce((total, similarity) => total + similarity, 0) / similarities.length
        : 0;

    return {
        averageSimilarity: Number(averageSimilarity.toFixed(3)),
        highestSimilarity: Number(Math.max(0, ...similarities).toFixed(3)),
        repeatedIdeasDetected: Math.max(0, ...similarities) >= 0.7,
        comparisons: similarities.length
    };
}

module.exports = analyzeSemantic;