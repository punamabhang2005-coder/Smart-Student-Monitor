const fs = require("fs");

function cleanText(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function getWords(text) {
    return cleanText(text)
        .split(" ")
        .filter(word => word.length > 2);
}

function analyzeEssay(text) {

    const words = getWords(text);

    const wordCount = words.length;

    const uniqueWords = new Set(words).size;

    const vocabularyRatio =
        wordCount > 0 ? uniqueWords / wordCount : 0;

    const sentences = text
        .split(/[.!?]+/)
        .filter(sentence => sentence.trim().length > 0);

    const paragraphs = text
        .split(/\n\s*\n/)
        .filter(paragraph => paragraph.trim().length > 0);

    let score = 0;

    // Essay length
    if (wordCount >= 50) score += 20;
    if (wordCount >= 100) score += 10;
    if (wordCount >= 150) score += 10;

    // Vocabulary
    if (vocabularyRatio >= 0.40) score += 20;
    else if (vocabularyRatio >= 0.30) score += 15;
    else score += 10;

    // Sentence structure
    if (sentences.length >= 5) score += 10;

    // Paragraph structure
    if (paragraphs.length >= 2) score += 10;

    // Basic punctuation
    if (/[.!?]/.test(text)) score += 10;

    return Math.min(score, 100);
}


function analyze() {

    // Read current essay
    const currentEssay = fs.readFileSync(
        "./data/latest_essay.txt",
        "utf8"
    );

    // Read previous essays
    const previousText = fs.readFileSync(
        "./data/previous_essays.txt",
        "utf8"
    );

    // Separate previous essays
    const previousEssays = previousText
        .split(/--- ESSAY \d+ ---/)
        .map(essay => essay.trim())
        .filter(essay => essay.length > 0);

    // Analyze current essay
    const currentScore = analyzeEssay(currentEssay);

    // Analyze previous essays
    const previousScores = previousEssays.map(essay =>
        analyzeEssay(essay)
    );

    // Calculate previous average
    const previousAverage =
        previousScores.length > 0
            ? previousScores.reduce((a, b) => a + b, 0)
              / previousScores.length
            : 0;

    // Calculate growth
    const difference = currentScore - previousAverage;

    let currentGrowth;

    if (difference >= 10) {
        currentGrowth = "Better";
    }
    else if (difference >= 0) {
        currentGrowth = "Good";
    }
    else {
        currentGrowth = "Average";
    }

    // Generate suggestion
    let suggestion;

    if (difference >= 10) {

        suggestion =
            "Your current essay shows clear improvement compared with your previous essays. Keep improving your vocabulary, sentence structure and organization.";

    }
    else if (difference >= 0) {

        suggestion =
            "Your current essay is performing around or slightly above your previous level. Try to improve vocabulary, sentence variety and paragraph organization.";

    }
    else {

        suggestion =
            "Your current essay is below your previous performance. Focus on improving vocabulary, sentence structure, organization and developing your ideas more clearly.";

    }

    return {
        currentGrowth,
        suggestion
    };
}

module.exports = analyze;